import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import { phoneValid, emailValid } from "../../utils/validation";

const loginForm = {
    inputs: {
        username: {
            name: "username",
            type: "text",
            placeholder: "Enter your email / phone number",
        },
    },
    uiProps: {
        username: {
            label: "Your Registered Phone Number or Email ID",
        },
    },
    allIds: ["username"],
};

const Login = ({ changeNumber, closeModal }) => {
    return (
        <>
            <ModalHeader
                title={"Sign In"}
                desc="Get access to your Orders, Wishlist and Recommendations"
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    config={{
                        url: "auth/login/",
                        method: "POST",
                    }}
                    form={loginForm}
                    succFunc={(data, formState) => {
                        changeNumber(formState.values);
                    }}
                    customValid={({data, dispatchErr}) => {
                        const phneErr = phoneValid(data.username);
                        const emailErr = emailValid(data.username);
                        if (phneErr && emailErr) {
                            dispatchErr(
                                "username",
                                "Must be valid email or phone number"
                            );
                            return true;
                        }
                        return false;
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

export default Login;
