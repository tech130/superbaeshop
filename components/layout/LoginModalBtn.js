import React, { useState, useCallback } from "react";
import Modal from "../modal/Modal";
import CloseIcon from "../icons/CloseIcon";
import styled from "styled-components";
import { H2 } from "../styled/Headings";
import Block from "../styled/Block";
import Button from "../styled/Button";
import Login from "../auth/Login";
import Otpform from "../auth/Otpform";

const LoginHeader = styled.div`
    padding: 25px 15px;
    background: #fff;
    color: #000;
    position: relative;
    border-bottom: solid 4px #f5f5f5;

    .btn-login-close {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #000;
    }
    .login-header-desc {
        font-size: 14px;
        font-weight: 300;
    }
`;

const LoginButton = styled(Button)`
    border: 1px solid #000;
    padding: 5px 20px;
    border-radius: 20px;
    color: #000;
    font-size: 14px;
`;

const LoginModalBtn = ({ className }) => {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <LoginButton onClick={() => setOpen(true)} className={className}>
                Login/Sign up
            </LoginButton>
            <LoginModal isOpen={open} close={closeModal} />
        </>
    );
};

const LoginModal = ({ isOpen, close }) => {
    const [phone, setPhone] = useState("");

    const changeNumber = useCallback((val) => {
        setPhone(val);
    }, []);

    return (
        <Modal isOpen={isOpen} overlayClick={close} maxWidth="375px">
            <div>
                <LoginHeader>
                    <button className="btn btn-login-close" onClick={close}>
                        <CloseIcon size={20} />
                    </button>
                    <H2>Login</H2>
                    <div className="login-header-desc">
                        Get access to your Orders, Wishlist and Recommendations
                    </div>
                </LoginHeader>
                <Block padding="25px 15px 30px">
                    {phone ? <Otpform username={phone} changeNumber={changeNumber} /> : <Login changeNumber={changeNumber} />}
                </Block>
            </div>
        </Modal>
    );
};

export default LoginModalBtn;
