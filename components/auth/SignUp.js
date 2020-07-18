import React, { useEffect } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import { useActiveCountry } from "../common/CountryLink";
import { setValue } from "../../hooks/form/formReducer";

const signupForm = (countries = []) => ({
    inputs: {
        country: {
            name: "country",
            type: "select",
            placeholder: "Select Country",
            options: countries,
        },
        username: {
            name: "username",
            type: "tel",
            placeholder: "Enter your phone number",
        },
        email: {
            name: "email",
            type: "email",
            placeholder: "Enter your email id",
        },
    },
    uiProps: {
        country: {
            label: "Country",
        },
        username: {
            label: "Your Phone Number",
        },
        email: {
            label: "Your Email Id",
        },
    },
    allIds: ["country", "username", "email"],
});

const SignUp = ({ changeNumber, closeModal }) => {
    const { countries, activeCountry } = useActiveCountry();

    return (
        <>
            <ModalHeader
                title={"Sign Up"}
                desc="Create your account with us. We will make sure you and your data is safe. "
                closeModal={closeModal}
            />

            <Block padding="25px 15px 30px">
                {countries.length > 1 && (
                    <FormCon
                        config={{
                            url: "auth/signup/",
                            method: "POST",
                        }}
                        form={signupForm(countries)}
                        succFunc={(data, formState) => {
                            changeNumber(formState.values);
                        }}
                        renderForm={RenderForm}
                    />
                )}
            </Block>
        </>
    );
};

const RenderForm = ({ fetching, formDispatch }) => {
    const { activeCountry } = useActiveCountry();

    useEffect(() => {
        if (activeCountry.code) {
            formDispatch(setValue("country", activeCountry.code));
        }
    }, [activeCountry]);

    return (
        <>
            <FieldArray />
            <SubmitButton fetching={fetching}>CONTINUE</SubmitButton>
        </>
    );
};

export default SignUp;
