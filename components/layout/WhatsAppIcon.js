import React from "react";
import Portal from "../common/Portal";
import styled from "styled-components";

const WhatsAppLink = styled.a`
    position: fixed;
    right: 20pt;
    bottom: 18pt;
    z-index: 9998;
    top: auto;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.21);

    img {
        height: 45pt;
        width: 45pt;
    }
`;

const WhatsAppIcon = () => {
    return (
        <Portal id="whatsapp-icon">
            <WhatsAppLink
                className="whatsIcon"
                href="https://wa.me/919787054444"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/images/whatsapp.svg" alt="whatsapp logo black" />
            </WhatsAppLink>
        </Portal>
    );
};

export default WhatsAppIcon;
