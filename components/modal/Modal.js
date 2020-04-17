import React from "react";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import Portal from "../common/Portal";

const Modal = ({
    id = "portal-modal",
    isOpen = false,
    children,
    contentStyle = {},
    overlayStyle = {},
    overlayClass = "modal-wrapper",
    contentClass = "modal-container",
    overlayClick = null,
    anim = "fadeIn",
}) => {
    if (isOpen) {
        return (
            <Portal id={id}>
                <ModalOverlay
                    onClick={overlayClick}
                    className={overlayClass}
                    style={overlayStyle}
                >
                    <ModalContent
                        className={contentClass}
                        style={contentStyle}
                        anim={anim}
                    >
                        {children}
                    </ModalContent>
                </ModalOverlay>
            </Portal>
        );
    }
    return null;
};

export default Modal;
