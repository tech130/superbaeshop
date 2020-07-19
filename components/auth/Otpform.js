import React from "react";
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
    const { username, email } = userData || {};

    return (
        <>
            <ModalHeader
                title={"OTP"}
                desc={`Otp has been sent to ${username || ""} ${
                    username && email ? `&` : ""
                } ${email || ""}`}
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
            </Block>
        </>
    );
};

// const ResendOtp = ({ username = "" }) => {
//     const [fetching, submit] = useSubmit();

//     const onClick = () => {
//         if (username) {
//             submit({
//                 url: "auth/resend-otp/",
//                 method: "POST",
//             });
//         }
//     };

//     return (
//         <LinkButton
//             onClick={onClick}
//             disabled={fetching}
//             textDecor="underline"
//             weight={500}
//         >
//             {fetching ? "Resending..." : "Resend Otp"}
//         </LinkButton>
//     );
// };

export default Otpform;
