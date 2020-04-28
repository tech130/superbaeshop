import React, { useState, useCallback } from "react";
import Modal from "../modal/Modal";
import Block from "../styled/Block";
import Button from "../styled/Button";
import Login from "../auth/Login";
import Otpform from "../auth/Otpform";
import ModalHeader from "../modal/ModalHeader";

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

const LoginModal = ({ isOpen, closeModal, isSignUp = false }) => {
    return (
        <Modal isOpen={isOpen} overlayClick={closeModal} maxWidth="375px">
            <div>
                <ModalHeader
                    closeModal={closeModal}
                    title={isSignUp ? "Sign Up" : "Sign In"}
                    desc="Get access to your Orders, Wishlist and Recommendations"
                />
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
