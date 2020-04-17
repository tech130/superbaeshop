import React from "react";

const ModalContent = ({ children, className, style = {} }) => {
    return (
        <div
            className={className}
            onClick={(e) => e.stopPropagation()}
            style={style}
        >
            {children}
        </div>
    );
};

export default ModalContent;
