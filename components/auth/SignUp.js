import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";

const loginForm = {
    inputs: {
        username: {
            name: "username",
            type: "tel",
            placeholder: "Enter your phone number",
        },
        email: {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
        },
    },
    uiProps: {
        username: {
            label: "Your Phone Number",
        },
        email: {
            label: "Email",
        },
    },
    allIds: ["username", "email"],
};

const SignUp = ({ changeNumber, closeModal }) => {
    return (
        <>
            <ModalHeader
                title={"Sign Up"}
                desc="Create your account with us. We will make sure you and your data is safe."
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    config={{
                        url: "auth/signup/",
                        method: "POST",
                    }}
                    form={loginForm}
                    succFunc={(data, formState) => {
                        changeNumber(formState.values);
                    }}
                    renderForm={({ fetching }) => (
                        <>
                            <FieldArray />
                            <SubmitButton fetching={fetching}>
                                CONTINUE
                            </SubmitButton>
                        </>
                    )}
                />
            </Block>
        </>
    );
};

export default SignUp;
