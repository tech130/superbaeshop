import React from "react";
import styled from "styled-components";

const HeaderDropCon = styled.div`
    position: relative;

    .header-drop {
        display: none;
        position: absolute;
        top: 100%;
        right: 0px;
        z-index: 999999;
        box-shadow: 1px 7px 20px 8px rgb(0 0 0 / 11%);
        width: max-content;
        max-width: 230px;
        background: #fff;
        max-height: 300px;
        overflow-y: auto;
        padding: 10px 5px;
    }

    .header-drop ul {
        list-style: none;
    }

    .header-drop li a {
        padding: 5px 15px;
        font-size: 14px;
        margin: 0px !important;
        color: #000 !important;
        text-decoration: none !important;
        display: flex;
        align-items: center;
    }

    .header-drop li a:hover {
        background: #f5f5f5;
    }

    &:hover .header-drop {
        display: block;
    }
`;

const HeaderDropdown = ({ className = "", btn = null, children,toggle=false }) => {
    return (
        <HeaderDropCon className={className }>
            {btn}
            <div className={`header-drop ${toggle === null ?'':toggle ? 'd-block':'d-none'}`}>{children}</div>
        </HeaderDropCon>
    );
};

export default HeaderDropdown;
