import React from "react";
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll";
import styled from "styled-components";

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
`;

const ModalOverlay = ({ children, className, style = {}, onClick }) => {
    useLockBodyScroll(true);
    return (
        <Overlay
            className={className}
            style={style}
            onClick={onClick}
        >
            {children}
        </Overlay>
    );
};

export default ModalOverlay;
