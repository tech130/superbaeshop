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
    z-index: 99;
    background: linear-gradient(113.87deg,rgba(205,228,255,.686275),rgba(214,196,255,.690196));
    overflow-y: auto;
    border-radius: 8px;
    overflow: hidden;
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
