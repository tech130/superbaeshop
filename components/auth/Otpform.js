import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { LinkButton } from "../styled/Button";
import P from "../styled/P";
import useSubmit from "../../hooks/http/useSubmit";
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
            <P textAlign="left" fontSize="14px">
                An Otp has been set to your mobile number {username}. Wrong
                mobile number ?{" "}
                <LinkButton
                    textDecor="underline"
                    weight={500}
                    onClick={() => changeNumber("")}
                >
                    Change mobile number
                </LinkButton>
            </P>
            <FormCon
                config={{
                    url: "auth/verify-otp/",
                    method: "POST",
                }}
                formatData={(data) => {
                    return {
                        ...data,
                        username,
                        client: Math.random() * 100000,
                    };
                }}
                form={otpForm}
                renderForm={({ fetching }) => (
                    <>
                        <FieldArray />
                        <SubmitButton fetching={fetching}>Login</SubmitButton>
                    </>
                )}
            />
            <P textAlign="center" fontSize="14px" margin="0px 0px 5px">
                Didn't recieve OTP ? <ResendOtp username={username} />
            </P>
        </>
    );
};

const ResendOtp = ({ username = "" }) => {
    const [fetching, submit] = useSubmit();

    const onClick = () => {
        if (username) {
            submit({
                url: "auth/resend-otp/",
                method: "POST",
            });
        }
    };

    return (
        <LinkButton
            onClick={onClick}
            disabled={fetching}
            textDecor="underline"
            weight={500}
        >
            {fetching ? "Resending..." : "Resend Otp"}
        </LinkButton>
    );
};

export default Otpform;
