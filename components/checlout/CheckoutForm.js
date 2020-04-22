import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";

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
            type: "text",
            placeholder: "+91",
        },
        phone: {
            name: "name",
            type: "text",
            placeholder: "Phone Number",
        },
        phone: {
            name: "name",
            type: "tel",
            placeholder: "Phone Number",
        },
        same_as: {
            name: "same_as",
            type: "checkbox",
            placeholder: "Phone Number",
        },
        alt_phone_country: {
            name: "phone_country",
            type: "text",
            placeholder: "+91",
        },
        alt_phone: {
            name: "name",
            type: "tel",
            placeholder: "Alternate Phone Number",
        },
        street: {
            name: "street",
            type: "text",
            placeholder: "Street Address",
        },
        locality: {
            name: "locality",
            type: "text",
            placeholder: "Locality",
        },
        city: {
            name: "city",
            type: "text",
            placeholder: "City",
        },
        state: {
            name: "state",
            type: "text",
            placeholder: "State",
        },
        country: {
            name: "country",
            type: "text",
            placeholder: "Country",
        },
        pincode: {
            name: "pincode",
            type: "number",
            placeholder: "Pincode",
        },
        redeem: {
            name: "redeem",
            type: "checkbox",
            placeholder: "Redeem wallet points",
        },
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
            xs: 3,
            md: 3,
        },
        phone: {
            md: 9,
            xs: 9,
        },
        alt_phone_country: {
            md: 3,
            xs: 3,
        },
        alt_phone: {
            xs: 9,
            md: 9,
        },
    },
    allIds: [
        "name",
        "email",
        "phone_country",
        "phone",
        "same_as",
        "alt_phone_country",
        "alt_phone",
        "street",
        "locality",
        "city",
        "state",
        "country",
        "pincode",
        "redeem",
    ],
};

const CheckoutForm = () => {
    return (
        <FormCon
            form={checkoutForm}
            renderForm={({ fetching }) => (
                <>
                    <FieldArray />
                    <SubmitButton fetching={fetching}>PAY NOW</SubmitButton>
                </>
            )}
        />
    );
};

export default CheckoutForm;
