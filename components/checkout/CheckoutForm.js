import React, {
    useEffect,
    useState,
    useCallback,
    useReducer,
    useMemo,
} from "react";
import { FormRow } from "../form/FieldArray";
import { AddressModalBtn } from "../address/CreateAddress";
import { H6 } from "../styled/Headings";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import { useDispatch, useSelector } from "react-redux";
import { addrTyps, fetchAddress } from "../../redux/user/address";
import { ApiContent } from "../common/DynamicContent";
import FieldCon, { FormCol } from "../form/FieldCon";
import useUser from "../../hooks/redux/user/useUser";
import AddressLoder from "../address/AddressLoder";
import urls from "../../apiService/urls";
import getAddress from "../../utils/getAddress";
import { CheckoutConfirmModal } from "./CheckoutConfirm";
import Input, { NumberInput } from "../form/Input";
import useSubmit from "../../hooks/http/useSubmit";
import { emailValid, phoneValid } from "../../utils/validation";
import CountryLink, { useActiveCountry } from "../common/CountryLink";
import SelectIp from "../form/SelectIp";
import styled from "styled-components";
import Button, { LinkButton, SubmitBtn } from "../styled/Button";
import ModalLoader from "../modal/ModalLoader";
import P from "../styled/P";
import DealsModal from "../product/DealsModal";
import Modal from "../modal/Modal";
import useToggle from "../../hooks/useToggle";
import Block from "../styled/Block";

const ImportantPoints = styled.ul`
    width: 90%;
    background-color: #f9f9f9;
    list-style: inside;
    list-style-type: circle;
    border: 1px solid #ff566d4f;
    padding: 15px;
    border-radius: 8px;
    margin: auto;
    margin-bottom: 30px;
    li{
        color: black;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: 576px) {
        font-size: 14px;
    }
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;
const getDialOption = (x) => {
    return {
        label: `+${x.dial_code} (${x.title})`,
        value: x.dial_code,
        image: x.image,
    };
};

const init = ({ user = {}, country = {} }) => ({
    values: {
        name: user.first_name,
        email: user.email,
        phone: user.username,
        dial_code: country && country.dial_code ? getDialOption(country) : null,
    },
    errors: {},
});

export function formReducer(state, action) {
    switch (action.type) {
        case "on_change":
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.name]: action.value,
                },
                errors: {
                    ...state.errors,
                    [action.name]: "",
                },
            };
        case "set_errors":
            return {
                ...state,
                errors: action.payload,
            };
        case "reset_form":
            return {
                ...state,
                errors: {},
                values: {},
            };
        default:
            return state;
    }
}

const CheckoutForm = ({ coupon, redeem }) => {
    const { toggle, onTrue, onFalse } = useToggle();
    const [paymentType, setPaymentType] = useState("");
    const { countries, activeCountry } = useActiveCountry();
    const [successData, setSuccess] = useState(null);
    const user = useUser();
    const [formState, formDispatch] = useReducer(formReducer, init(user));

    const dialCodes = useMemo(() => {
        return countries.map((x) => getDialOption(x));
    }, []);

    const closeModal = useCallback(() => {
        setSuccess(null);
    }, []);

    const onChange = useCallback((name, value) => {
        formDispatch({
            type: "on_change",
            name,
            value,
        });
    });

    const { values, errors } = formState;

    const [fetching, submit] = useSubmit((data) => {
        setSuccess(data);
    });

    const onSubmit = (payType) => {
        let err = {};
        if (!values.name) {
            err.name = "Name is required";
        }
        const emailErr = emailValid(values.email);
        if (emailErr) {
            err.email = emailErr;
        }

        //phone number validation
        const dialErr =
            values.dial_code && values.dial_code.value
                ? ""
                : "Dial code is required";
        if (dialErr) {
            err.dial_code = dialErr;
        }
        const phoneErr = phoneValid(values.phone);
        if (phoneErr) {
            err.phone = phoneErr;
        }

        //alt phone number
        if (values.alt_dial_code || values.alt_phone) {
            const altdialErr =
                values.alt_dial_code && values.alt_dial_code.value
                    ? ""
                    : "Dial code is required";
            if (altdialErr) {
                err.alt_dial_code = altdialErr;
            }
            const altphoneErr = phoneValid(values.alt_phone);
            if (altphoneErr) {
                err.alt_phone = altphoneErr;
            }
        }

        if (!values.address_id) {
            err.address_id = "Address is required";
        }

        if (Object.keys(err).length > 0) {
            formDispatch({
                type: "set_errors",
                payload: err,
            });
            return;
        }
        setPaymentType(payType);
        onTrue();
    };

    const onContine = () => {
        if (paymentType) {
            const wallet = redeem
                ? { is_wallet: true }
                : coupon.code
                ? { coupon_code: coupon.code }
                : {};
            let formData = {
                ...wallet,
                ...values,
                dial_code: values.dial_code.value,
                alt_dial_code:
                    values.alt_dial_code && values.alt_dial_code.value
                        ? values.alt_dial_code.value
                        : "",
                payment_type: paymentType,
            };
            submit({
                url: urls.checkout,
                method: "POST",
                data: formData,
            });
            onFalse();
        }
    };

    const onPayNow = () => {
        onSubmit("Online");
    };

    const onPayLater = () => {
        onSubmit("COD");
    };

    return (
        <>
            <FormRow>
                <FieldCon err={errors.name} md={6}>
                    <Input
                        setValue={(val) => onChange("name", val)}
                        type="text"
                        value={values.name}
                        placeholder="Name"
                    />
                </FieldCon>
                <FieldCon err={errors.email} md={6}>
                    <Input
                        type="email"
                        value={values.email}
                        placeholder="Email"
                        setValue={(val) => onChange("email", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.dial_code} md={6}>
                    <SelectIp
                        value={values.dial_code}
                        placeholder="Dial Code"
                        options={dialCodes}
                        setValue={(val) => onChange("dial_code", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.phone} md={6}>
                    <NumberInput
                        value={values.phone}
                        placeholder="Phone Number"
                        setValue={(val) => onChange("phone", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.alt_dial_code} md={6}>
                    <SelectIp
                        value={values.alt_dial_code}
                        placeholder="Dial Code"
                        options={dialCodes}
                        setValue={(val) => onChange("alt_dial_code", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.alt_phone} md={6}>
                    <NumberInput
                        value={values.alt_phone}
                        placeholder="Alternate Ph. (Optional)"
                        setValue={(val) => onChange("alt_phone", val)}
                    />
                </FieldCon>
            </FormRow>
            <Flex justifyContent="space-between">
                <H6>Choose your delivery address</H6>
                <AddAddress />
            </Flex>
            <FormRow>
                <FieldCon err={errors.address_id}>
                    <AddressList
                        chooseAddr={(id) => onChange("address_id", id)}
                        address_id={values.address_id}
                        activeCountryId={activeCountry.id}
                    />
                </FieldCon>
            </FormRow>
            <P weight={500} fontSize="13px">
                Note: A tracking link will be sent once your order is
                dispatched. Delivery time 3-14 days depending on delivery
                location.
                <br />
                By placing this order you agree to our
                <CountryLink href="/terms">
                    <Txt textDecor="underline"> Terms and Conditions</Txt>
                </CountryLink>
            </P>
            <ImportantPoints>
                <li>
                Now a step closer to creating your own space full of beauty.
                </li>
                <li>
                The 2022 catalogue is now available for pre-order.
                </li>
                <li>
                Deliveries starting November 15.
                </li>

            </ImportantPoints>
            <SubmitBtn
                className="no_box_shadow"
                margin="0px 0px 10px 0px"
                onClick={onPayNow}
                disabled={fetching}
            >
                PAY NOW
            </SubmitBtn>
            {activeCountry.is_cod_available && (
                <SubmitBtn  className="no_box_shadow" onClick={onPayLater} disabled={fetching}>
                    CASH ON DELIVERY (+{activeCountry.currency_type}
                    {activeCountry.cod_charge})
                </SubmitBtn>
            )}
            <ModalLoader isOpen={fetching} />
            {successData && successData.id && (
                <CheckoutConfirmModal
                    isOpen
                    closeModal={closeModal}
                    data={successData}
                />
            )}
            <Modal isOpen={toggle}>
                <DealsModal closeModal={onContine} />
                <Block padding="15px">
                    <SubmitBtn onClick={onContine}>Continue Checkout</SubmitBtn>
                    <Button block onClick={onContine}>
                        <Txt textDecor="underline" fontSize="0.9rem">
                            No Thanks
                        </Txt>
                    </Button>
                </Block>
            </Modal>
        </>
    );
};

const AddressList = ({ chooseAddr, address_id, activeCountryId = null }) => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.addressList);

    useEffect(() => {
        dispatch(fetchAddress());
    }, []);

    return (
        <ApiContent name={addrTyps.apiName} loader={<AddressLoder />}>
            {list.length > 0 && (
                <FormRow>
                    {list.map((item) => (
                        <FormCol md={12} key={item.id}>
                            <AddressItem
                                activeCountryId={activeCountryId}
                                isActive={item.id === address_id}
                                chooseAddr={chooseAddr}
                                {...item}
                            />
                        </FormCol>
                    ))}
                </FormRow>
            )}
        </ApiContent>
    );
};

const AddrStl = styled(Button)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    border: ${(props) => `1px solid ${props.isActive ? "#000" : "#ced4da"}`};
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;

    &:disabled {
        opacity: 1;
        cursor: not-allowed;
    }
`;

const AddressItem = ({
    address_type = "",
    id,
    chooseAddr,
    isActive,
    activeCountryId,
    ...rest
}) => {
    const countryId = rest.country && rest.country.id ? rest.country.id : null;
    const disabled = countryId !== activeCountryId;
    return (
        <AddrStl
            disabled={disabled}
            onClick={() => {
                if (!disabled) {
                    chooseAddr(id);
                }
            }}
            isActive={isActive}
        >
            <Txt fontSize="14px" weight="500">
                {address_type}
            </Txt>
            <Txt fontSize="12px">{`${getAddress(rest)}`}</Txt>
        </AddrStl>
    );
};

const AddAddress = () => {
    return (
        <AddressModalBtn
            Btn={({ onClick }) => (
                <LinkButton
                    textDecor="underline"
                    fontSize="13px"
                    onClick={onClick}
                >
                    + Add Address
                </LinkButton>
            )}
        />
    );
};

export default CheckoutForm;
