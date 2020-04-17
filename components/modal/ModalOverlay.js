import React from "react";
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll";

const ModalOverlay = ({ children, className, style = {}, onClick }) => {
    useLockBodyScroll(true);
    return (
        <div
            className={className}
            style={style}
            role="dialog"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ModalOverlay;
