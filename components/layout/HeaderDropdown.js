import React from "react";
import styled from "styled-components";

const HeaderDropCon = styled.div`
    position: relative;

    .header-drop {
        display: none;
        position: absolute;
        top: 100%;
        right: 0px;
        z-index: 10;
        box-shadow: 0px 11px 12px 8px rgba(0, 0, 0, 0.03);
        width: max-content;
        max-width: 230px;
        background: #fff;
        max-height: 300px;
        overflow-y: auto;
    }

    .header-drop ul {
        list-style: none;
    }

    .header-drop li {
        padding: 6px 15px;
        font-size: 14px;
        margin: 0px !important;
    }

    .header-drop li a {
        color: #000 !important;
        text-decoration: none !important;
        display: flex;
        align-items: center;
    }

    &:hover .header-drop {
        display: block;
    }
`;

const HeaderDropdown = ({ className = "", btn = null, children }) => {
    return (
        <HeaderDropCon className={className}>
            {btn}
            <div className="header-drop">{children}</div>
        </HeaderDropCon>
    );
};

export default HeaderDropdown;
