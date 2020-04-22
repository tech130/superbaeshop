import React from "react";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import Portal from "../common/Portal";

const Modal = ({
    id = "portal-modal",
    isOpen = false,
    children,
    maxWidth,
    bg,
    overlayClick = null,
    overlayClass = "",
    contentClass = "",
}) => {
    if (isOpen) {
        return (
            <Portal id={id}>
                <ModalOverlay onClick={overlayClick} className={overlayClass}>
                    <ModalContent
                        maxWidth={maxWidth}
                        bg={bg}
                        className={contentClass}
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
