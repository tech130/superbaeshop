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
import Input from "../form/Input";
import useSubmit from "../../hooks/http/useSubmit";
import { emailValid, phoneValid } from "../../utils/validation";
import { useActiveCountry } from "../common/CountryLink";
import SelectIp from "../form/SelectIp";
import styled from "styled-components";
import Button, { LinkButton } from "../styled/Button";
import ModalLoader from "../modal/ModalLoader";

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

    const onSubmit = (payment_type) => {
        let err = {};
        if (!values.name) {
            err.name = "Name is required";
        }
        const emailErr = emailValid(values.email);
        if (emailErr) {
            err.email = emailErr;
        }
        const dialErr =
            values.dial_code && values.dial_code.value
                ? ""
                : "Dial code is required";
        if (dialErr) {
            err.dial_code = dialErr;
        }
        const altdialErr =
            values.alt_dial_code && values.alt_dial_code.value
                ? ""
                : "Dial code is required";
        if (values.alt_dial_code && altdialErr) {
            err.alt_dial_code = altdialErr;
        }
        const phoneErr = phoneValid(values.phone);
        if (phoneErr) {
            err.phone = phoneErr;
        }
        const altphoneErr = phoneValid(values.phone);
        if (values.alt_phone && altphoneErr) {
            err.alt_phone = altphoneErr;
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
            payment_type,
        };
        submit({
            url: urls.checkout,
            method: "POST",
            data: formData,
        });
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
                <FieldCon err={errors.dial_code} md={5}>
                    <SelectIp
                        value={values.dial_code}
                        placeholder="Dial Code"
                        options={dialCodes}
                        setValue={(val) => onChange("dial_code", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.phone} md={7}>
                    <Input
                        type="tel"
                        value={values.phone}
                        placeholder="Phone Number"
                        setValue={(val) => onChange("phone", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.alt_dial_code} md={5}>
                    <SelectIp
                        value={values.alt_dial_code}
                        placeholder="Dial Code"
                        options={dialCodes}
                        setValue={(val) => onChange("alt_dial_code", val)}
                    />
                </FieldCon>
                <FieldCon err={errors.alt_phone} md={7}>
                    <Input
                        type="tel"
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
            <Button
                margin="0px 0px 10px 0px"
                block
                onClick={onPayNow}
                disabled={fetching}
                border="1px solid #ced4da"
                padding="8px"
            >
                PAY SECURELY VIA{" "}
                <img
                    style={{ marginLeft: "10px" }}
                    width={100}
                    src="/images/razorpay-logo.svg"
                />
            </Button>
            <Button
                border="1px solid #ced4da"
                padding="8px"
                onClick={onPayLater}
                block
                disabled={fetching}
            >
                CASH ON DELIVERY
                {/* (+{activeCountry.currency_type}
                        {activeCountry.shipping_fee}) */}
            </Button>
            <ModalLoader isOpen={fetching} />

            {successData && successData.id && (
                <CheckoutConfirmModal
                    isOpen
                    closeModal={closeModal}
                    data={successData}
                />
            )}
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
