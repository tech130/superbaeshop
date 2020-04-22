import React from "react";
import styled from "styled-components";

const MdContent = styled.div`
    max-width: ${(props) => props.maxWidth || "650px"};
    width: 90%;
    height: auto;
    background: ${(props) => props.bg || "#fff"};
    margin: auto;
`;

const ModalContent = ({ children, className, maxWidth, bg }) => {
    return (
        <MdContent
            maxWidth={maxWidth}
            className={className}
            bg={bg}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </MdContent>
    );
};

export default ModalContent;
