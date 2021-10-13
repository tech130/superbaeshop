import React, { useEffect } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import { useActiveCountry } from "../common/CountryLink";
import { setValue } from "../../hooks/form/formReducer";
import styled from "styled-components";

const Title = styled.div`
    color:#000;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-top: 40px;
`;
const TitlDescription = styled.div`
    text-align: center;
    color: #000;
    opacity: 1;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1.3px;
    max-width: 350px;
    margin: auto;
    line-height: 1.1;
`;
const signupForm = (countries = []) => ({
    inputs: {
        country: {
            name: "country",
            type: "select",
            placeholder: "Select dial code",
            options: countries.map((x) => ({
                label: `+${x.dial_code} (${x.title})`,
                value: x.id,
                image: x.image,
            })),
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
            label: "Dial Code",
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
            border="none"
            className="login_model_bg"
            title={<Title>Sign Up</Title>}
            desc={<TitlDescription>Create your account with us. We will make sure you and your data is safe.</TitlDescription>}
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                {countries.length > 0 && (
                    <FormCon
                        config={{
                            url: "auth/signup/",
                            method: "POST",
                        }}
                        form={signupForm(countries, activeCountry)}
                        succFunc={(data, formState) => {
                            changeNumber({
                                username: formState.values.username,
                                desc: data && data.data ? data.data : "",
                            });
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
            <SubmitButton fetching={fetching}>Continue</SubmitButton>
        </>
    );
};

export default SignUp;
