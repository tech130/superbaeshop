import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";

const loginForm = {
    inputs: {
        username: {
            name: "username",
            type: "tel",
            placeholder: "Enter your mobile number",
        },
    },
    uiProps: {
        username: {
            label: "Mobile number",
        },
    },
    allIds: ["username"],
};

const Login = ({ changeNumber }) => {
    return (
        <>
            <FormCon
                config={{
                    url: "auth/login/",
                    method: "POST",
                }}
                form={loginForm}
                succFunc={(data, formState) => {
                    changeNumber(formState.values.username);
                }}
                renderForm={({ fetching }) => (
                    <>
                        <FieldArray />
                        <SubmitButton fetching={fetching}>
                            Request OTP
                        </SubmitButton>
                    </>
                )}
            />
        </>
    );
};

export default Login;
