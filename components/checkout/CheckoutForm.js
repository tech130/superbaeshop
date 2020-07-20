import React, { useEffect } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { useActiveCountry } from "../common/CountryLink";
import { setValue } from "../../hooks/form/formReducer";
import { AddressModalBtn } from "../address/CreateAddress";
import { H6 } from "../styled/Headings";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";

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
        phone_country: {
            name: "phone_country",
            type: "countrySelect",
            placeholder: "+91",
            valKey: "dialCode",
        },
        phone: {
            name: "name",
            type: "tel",
            placeholder: "Phone Number",
        },
        alt_phone_country: {
            name: "phone_country",
            type: "countrySelect",
            placeholder: "+91",
            valKey: "dialCode",
        },
        alt_phone: {
            name: "name",
            type: "tel",
            placeholder: "Alternate Phone Number",
        },
        // street: {
        //     name: "street",
        //     type: "text",
        //     placeholder: "Street Address",
        // },
        // locality: {
        //     name: "locality",
        //     type: "text",
        //     placeholder: "Locality",
        // },
        // city: {
        //     name: "city",
        //     type: "text",
        //     placeholder: "City",
        // },
        // state: {
        //     name: "state",
        //     type: "text",
        //     placeholder: "State",
        // },
        // country: {
        //     name: "country",
        //     type: "countrySelect",
        //     placeholder: "Country",
        // },
        // pincode: {
        //     name: "pincode",
        //     type: "number",
        //     placeholder: "Pincode",
        // },
    },
    defaultUiProps: {
        md: 6,
    },
    uiProps: {
        same_as: {
            md: 12,
            xs: 12,
        },
        redeem: {
            md: 12,
            xs: 12,
        },
        phone_country: {
            md: 4,
        },
        phone: {
            md: 8,
        },
        alt_phone_country: {
            md: 4,
        },
        alt_phone: {
            md: 8,
        },
    },
    allIds: [
        "name",
        "email",
        "phone_country",
        "phone",
        "alt_phone_country",
        "alt_phone",
    ],
};

const CheckoutForm = () => {
    return <FormCon form={checkoutForm} renderForm={CheckoutRenderForm} />;
};

const CheckoutRenderForm = ({ fetching, formDispatch }) => {
    const { activeCountry } = useActiveCountry();

    useEffect(() => {
        if (activeCountry.code) {
            formDispatch(setValue("phone_country", activeCountry.code2));
            formDispatch(setValue("alt_phone_country", activeCountry.code2));
        }
    }, [activeCountry]);

    return (
        <>
            <FieldArray />
            <H6>Choose Address</H6>
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
                        <Txt fontSize="14px" color="hsl(0, 0%, 50%)">ADD ADDRESS</Txt>
                    </Flex>
                )}
            />
            <SubmitButton fetching={fetching}>PAY NOW</SubmitButton>
        </>
    );
};

export default CheckoutForm;
