import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { LinkButton } from "../styled/Button";
import P from "../styled/P";
import useSubmit from "../../hooks/http/useSubmit";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/user";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";

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

const Otpform = ({ changeNumber, userData, closeModal }) => {
    const dispatch = useDispatch();

    return (
        <>
            <ModalHeader
                title={"OTP"}
                desc={
                    <>
                        An Otp has been set to your Mobile number {userData && userData.username} & Email ID {userData && userData.email}.
                        <LinkButton
                            textDecor="underline"
                            weight={500}
                            onClick={() => changeNumber("")}
                        >
                            Change Login details
                        </LinkButton>
                    </>
                }
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    config={{
                        url: "auth/verify-otp/",
                        method: "POST",
                    }}
                    succFunc={(data) => {
                        if (typeof closeModal === "function") {
                            closeModal();
                        }
                        dispatch(updateUser(data));
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
                            <SubmitButton fetching={fetching}>
                                Submit
                            </SubmitButton>
                        </>
                    )}
                />
                <P textAlign="center" fontSize="14px" margin="0px 0px 5px">
                    Didn&apos;t recieve OTP ? <ResendOtp username={username} />
                </P>
            </Block>
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
