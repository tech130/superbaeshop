import React from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import { phoneValid, emailValid } from "../../utils/validation";
import styled from "styled-components";
import LoginModalBtn from "../layout/LoginModalBtn";
import Txt from "../styled/Txt";

const loginForm = {
    inputs: {
        username: {
            name: "username",
            type: "text",
            placeholder: "Enter your Email/Phone number here",
        },
    },
    uiProps: {
        username: {
            label: "Your Registered Phone Number or Email ID",
        },
    },
    allIds: ["username"],
};
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
    max-width: 283px;
    margin: auto;
    line-height: 1.1;
`;
const LoginContent = styled.div`
    max-width: 310px;
    margin: auto;
    padding: 30px 0px;
    label{
        display:none;
    }
    input{
        height: 70px;
        text-align: center;
        border: 1px solid transparent;
    }
    .SignUp{
        text-align:center;
    }
`;
const Login = ({ changeNumber, closeModal }) => {
    return (
        <>
            <ModalHeader
            border="none"
            className="login_model_bg"
                title={<Title>Sign-In to your Account</Title>}
                desc={<TitlDescription>Get access to your Account, Orders, and Profile.</TitlDescription>}
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                <LoginContent>
                <FormCon
                    config={{
                        url: "auth/login/",
                        method: "POST", 
                    }}
                    form={loginForm}
                    succFunc={(data, formState) => {
                        changeNumber({
                            username: formState.values.username,
                            desc: data && data.data ? data.data : "",
                        });
                    }}
                    customValid={({ data, dispatchErr }) => {
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
                                <div className="SignUp">
                            <LoginModalBtn inline isSignUp>
                                    <Txt
                                        fontSize="14px"
                                        weight={500}
                                        textDecor="underline"
                                    >
                                        Sign-Up to your Space now!
                                    </Txt>
                                </LoginModalBtn>
                                    </div>
                        </>
                    )}
                />
                </LoginContent>
            </Block>
        </>
    );
};

export default Login;
