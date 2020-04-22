import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import Button from "../styled/Button";
// import Txt from "../styled/Txt";

const otpForm = {
    inputs: {
        otp: {
            name: "otp",
            type: "number",
            placeholder: "Enter your OTP",
        },
    },
    uiProps: {
        otp: {
            label: "OTP",
        },
    },
    allIds: ["otp"],
};

const Otpform = ({ changeNumber, username = "" }) => {
    return (
        <>
            <FormCon
                config={{
                    url: "auth/verify-otp/",
                    method: "POST",
                }}
                formatData={(data) => {
                    return {
                        ...data,
                        username,
                        client: Math.random() * 100000
                    }
                }}
                form={otpForm}
                renderForm={({ fetching }) => (
                    <>
                        <FieldArray />
                        <SubmitButton fetching={fetching}>Login</SubmitButton>
                    </>
                )}
            />
            <Button block onClick={() => changeNumber("")}>
                Change mobile number
            </Button>
        </>
    );
};

export default Otpform;
