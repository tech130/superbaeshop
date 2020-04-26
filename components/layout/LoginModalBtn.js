import React, { useState, useEffect, useCallback } from "react";
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

    .login-header-desc {
        font-size: 14px;
        font-weight: 300;
    }
`;

const ClsBtn = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
`;

const LoginModalBtn = ({ className, isSignUp, children, ...rest }) => {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);


    return (
        <>
            <Button
                {...rest}
                onClick={() => setOpen(true)}
                className={className}
            >
                {children}
            </Button>
            <LoginModal isSignUp={isSignUp} isOpen={open} closeModal={closeModal} />
        </>
    );
};

const LoginModal = ({ isOpen, closeModal, isSignUp = false }) => {

    return (
        <Modal isOpen={isOpen} overlayClick={closeModal} maxWidth="375px">
            <div>
                <LoginHeader>
                    <ClsBtn onClick={closeModal}>
                        <CloseIcon size={20} />
                    </ClsBtn>
                    <H2>{isSignUp ? "Sign Up" : "Sign In"}</H2>
                    <div className="login-header-desc">
                        Get access to your Orders, Wishlist and Recommendations
                    </div>
                </LoginHeader>
                <LoginModalBody closeModal={closeModal} />
            </div>
        </Modal>
    );
};

const LoginModalBody = ({ closeModal }) => {
    const [phone, setPhone] = useState("");

    const changeNumber = useCallback((val) => {
        setPhone(val);
    }, []);

    return (
        <Block padding="25px 15px 30px">
            {phone ? (
                <Otpform
                    username={phone}
                    closeModal={closeModal}
                    changeNumber={changeNumber}
                />
            ) : (
                <Login changeNumber={changeNumber} />
            )}
        </Block>
    );
};

export default LoginModalBtn;
