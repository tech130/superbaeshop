import React, { useState, useCallback } from "react";
import Modal from "../modal/Modal";
import Block from "../styled/Block";
import Button from "../styled/Button";
import Login from "../auth/Login";
import Otpform from "../auth/Otpform";
import SignUp from "../auth/SignUp";
import styled from "styled-components";


const LoginButton = styled(Button)`

   
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
            <LoginModal
                isSignUp={isSignUp}
                isOpen={open}
                closeModal={closeModal}
            />
        </>
    );
};

const LoginModal = ({ isOpen, closeModal, isSignUp }) => {
    return (
        <Modal isOpen={isOpen} overlayClick={closeModal} bg="#f7f7ff" contentClass="login-model" maxWidth="375px">
            <LoginModalBody isSignUp={isSignUp} closeModal={closeModal} />
        </Modal>
    );
};

const LoginModalBody = ({ closeModal, isSignUp = false }) => {
    const [userData, setUserData] = useState(null);

    const changeNumber = useCallback((val) => {
        setUserData(val);
    }, []);

    return (
        <Block>
            {userData ? (
                <Otpform
                    userData={userData}
                    closeModal={closeModal}
                    changeNumber={changeNumber}
                />
            ) : isSignUp ? (
                <SignUp closeModal={closeModal} changeNumber={changeNumber} />
            ) : (
                <Login closeModal={closeModal} changeNumber={changeNumber} />
            )}
        </Block>
    );
};

export default LoginModalBtn;
