import React, { useState } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/user";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import { setTokenOnBrowser } from "../../utils/handleToken";
import urls from "../../apiService/urls";
import { uploadLocalCart } from "../../redux/user/cart";
import { clearLocalCart } from "../../redux/user/local_cart";
import canUseDom from "../../utils/canUseDom";
import { LinkButton } from "../styled/Button";
import useSubmit from "../../hooks/http/useSubmit";
import useInterval from "../../hooks/useInterval";
import P from "../styled/P";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";

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

const Otpform = ({ userData = {}, closeModal }) => {
    const dispatch = useDispatch();
    const { desc, username } = userData || {};

    return (
        <>
            <ModalHeader
                title={"OTP"}
                desc={desc || ""}
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    config={{
                        url: urls.verifyOtp,
                        method: "POST",
                    }}
                    succFunc={(data) => {
                        dispatch(updateUser(data));
                        setTokenOnBrowser(data.token);
                        dispatch(uploadLocalCart());
                        dispatch(clearLocalCart());
                        if (canUseDom) {
                            window.location.reload();
                        }
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
                <Flex justifyContent="center" alignItems="center">
                    {username && <ResendOtp username={username} />}
                </Flex>
            </Block>
        </>
    );
};

const ResendOtp = ({ username = "" }) => {
    const [count, setCount] = useState(0);
    const [fetching, submit] = useSubmit(() => {
        setCount(30);
    });

    useInterval(
        () => {
            setCount((x) => (x ? x - 1 : 0));
        },
        count ? 1000 : null
    );

    const onClick = () => {
        if (username) {
            submit({
                url: "auth/login/",
                method: "POST",
                data: {
                    username,
                },
            });
        }
    };

    if (count) {
        return <Counter count={count} />;
    }
    return (
        <LinkButton
            block
            onClick={onClick}
            disabled={fetching}
            textDecor="underline"
            fontSize="14px"
        >
            {fetching ? "Resending..." : "Not received it yet? Resend OTP"}
        </LinkButton>
    );
};

const Counter = ({ count }) => {
    return (
        <Txt fontSize="14px" textAlign="center">
            Wait for {count}s
        </Txt>
    );
};

export default Otpform;
