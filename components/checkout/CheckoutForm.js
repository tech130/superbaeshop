import React, { useEffect, useState, useCallback } from "react";
import FormCon from "../form/FormCon";
import FieldArray, { FormRow } from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { setValue } from "../../hooks/form/formReducer";
import { AddressModalBtn } from "../address/CreateAddress";
import { H6 } from "../styled/Headings";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import { useDispatch, useSelector } from "react-redux";
import { addrTyps, fetchAddress } from "../../redux/user/address";
import { ApiContent } from "../common/DynamicContent";
import { FormGroup } from "../form/FieldCon";
import useUser from "../../hooks/redux/user/useUser";
import P from "../styled/P";
import AddressLoder from "../address/AddressLoder";
import urls from "../../apiService/urls";

const checkoutForm = {
    inputs: {
        name: {
            name: "name",
            type: "text",
            placeholder: "Name",
        },
        email: {
            name: "email",
            type: "email",
            placeholder: "Email Id",
        },
        dial_code: {
            name: "dial_code",
            type: "countrySelect",
            placeholder: "+91",
            valType: "dialCode",
        },
        phone: {
            name: "name",
            type: "tel",
            placeholder: "Phone Number",
        },
        alt_dial_code: {
            name: "alt_dial_code",
            type: "countrySelect",
            placeholder: "+91",
            valType: "dialCode",
        },
        alt_phone: {
            name: "name",
            type: "tel",
            placeholder: "Alternate Phone Number",
        },
        payment_type: {
            name: "name",
            type: "select",
            options: [
                {
                    label: "Online",
                    value: "Online",
                },
                {
                    label: "COD",
                    value: "COD",
                },
            ],
            placeholder: "Select payment type",
        },
    },
    uiProps: {
        payment_type: {
            md: 12,
        },
    },
    defaultUiProps: {
        md: 6,
    },
    allIds: [
        "name",
        "email",
        "dial_code",
        "phone",
        "alt_dial_code",
        "alt_phone",
        "payment_type",
    ],
};

const CheckoutForm = ({ coupon, redeem }) => {
    const [address_id, setAddress] = useState(null);
    const [address_err, setAddressErr] = useState("");

    const chooseAddr = useCallback((id) => {
        setAddress(id);
        setAddressErr("");
    }, []);

    return (
        <FormCon
            asDiv
            form={checkoutForm}
            config={{
                url: urls.checkout,
                method: "POST",
            }}
            customValid={() => {
                if (!address_id) {
                    setAddressErr("Choose an address");
                    return true;
                }
                return false;
            }}
            formatData={(data) => {
                const wallet = redeem
                    ? { is_wallet: true }
                    : coupon
                    ? { coupon_code: coupon }
                    : {};
                return {
                    ...data,
                    address_id,
                    ...wallet,
                };
            }}
            renderForm={(props) => (
                <CheckoutRenderForm
                    {...props}
                    address_id={address_id}
                    address_err={address_err}
                    chooseAddr={chooseAddr}
                />
            )}
        />
    );
};

const CheckoutRenderForm = ({
    fetching,
    formDispatch,
    address_id,
    address_err,
    chooseAddr,
    onSubmit,
}) => {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            formDispatch(setValue("name", user.first_name || ""));
            formDispatch(setValue("phone", user.username || ""));
        }
    }, []);

    return (
        <>
            <FieldArray />
            <H6>Choose Address</H6>
            <AddressList chooseAddr={chooseAddr} address_id={address_id} />
            <AddAddress />
            {address_err && (
                <P fontSize="14px" color="red">
                    {address_err}
                </P>
            )}
            <SubmitButton onClick={onSubmit} fetching={fetching}>
                CONTINUE CHECKOUT
            </SubmitButton>
        </>
    );
};

const AddressList = ({ chooseAddr, address_id }) => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.addressList);

    useEffect(() => {
        dispatch(fetchAddress());
    }, []);

    return (
        <ApiContent name={addrTyps.apiName} loader={<AddressLoder />}>
            <FormRow>
                {list.map((item) => (
                    <AddressItem
                        isActive={item.id === address_id}
                        chooseAddr={chooseAddr}
                        {...item}
                        key={item.id}
                    />
                ))}
            </FormRow>
        </ApiContent>
    );
};

const getAddress = ({
    door_no = "",
    street_address = "",
    locality = "",
    city = "",
    state = "",
    country = {},
    postal_code = "",
    landmark = "",
}) =>
    `${door_no}, ${street_address}, ${locality}, ${city}, ${state}, ${
        country ? country.title || "" : ""
    }, ${postal_code}, ${landmark}`;

const AddressItem = ({
    name = "",
    address_type = "",
    dial_code = "",
    phone = "",
    id,
    chooseAddr,
    isActive,
    ...rest
}) => {
    return (
        <FormGroup md={6}>
            <Flex
                onClick={() => chooseAddr(id)}
                vertical
                padding="10px"
                border={`1px solid ${isActive ? "#000" : "#f5f5f5"}`}
                as="a"
            >
                <Txt fontSize="14px" weight="500">
                    {name} ({address_type})
                </Txt>
                <Txt fontSize="12px">
                    +{dial_code} {phone}
                </Txt>
                <Txt fontSize="12px">{`${getAddress(rest)}`}</Txt>
            </Flex>
        </FormGroup>
    );
};

const AddAddress = () => {
    return (
        <AddressModalBtn
            Btn={({ onClick }) => (
                <Flex
                    height="100px"
                    border="1px dashed #cecece"
                    alignItems="center"
                    justifyContent="center"
                    onClick={onClick}
                    margin="0px 0px 15px 0px"
                    vertical
                    as="a"
                >
                    <Txt fontSize="28px" color="hsl(0, 0%, 50%)">
                        +
                    </Txt>
                    <Txt fontSize="14px" color="hsl(0, 0%, 50%)">
                        ADD ADDRESS
                    </Txt>
                </Flex>
            )}
        />
    );
};

export default CheckoutForm;
