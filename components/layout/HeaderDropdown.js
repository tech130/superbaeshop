import React from "react";
import styled from "styled-components";
import NullComp from "../common/NullComp";
import useDropDown from "../../hooks/layout/useDropDown";

const HeaderDropCon = styled.div`
    position: relative;
`;

const HeaderDrop = styled.div`
    display: ${(props) => (props.open ? "block" : "none")};
    position: absolute;
    top: 36px;
    right: 0px;
    z-index: 10;
    box-shadow: 0px 11px 12px 8px rgba(0, 0, 0, 0.03);
    width: max-content;
    max-width: 230px;
    background: #fff;

    ul {
        list-style: none;
    }

    li {
        padding: 8px 15px;
        font-size: 14px;
        margin: 0px !important;
    }

    li a {
        color: #000 !important;
        text-decoration: none !important;
        display: flex;
        align-items: center;
    }
`;

const HeaderDropdown = ({ className = "", Btn = NullComp, children }) => {
    const [el, open, toggle] = useDropDown();

    return (
        <HeaderDropCon ref={el} className={className}>
            <Btn onClick={toggle} />
            <HeaderDrop open={open}>{children}</HeaderDrop>
        </HeaderDropCon>
    );
};

export default HeaderDropdown;
