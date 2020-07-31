import React from "react";
import styled, { keyframes } from "styled-components";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";

const marquee = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

const TopBar = styled.div`
    background: #000;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
    height: 35px;

    div {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(100%, 0, 0);
        animation: ${marquee} 30s linear infinite;
        font-size: 14px;
        min-width: 100%;
        overflow: hidden;
        height: 100%;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`;

const TopRollText = ({ productId }) => {
    if (productId) {
        return <ProdRollText id={productId} />;
    }
    return (
        <TopBar>
            <div>Organize your Life on the Go!</div>
        </TopBar>
    );
};

const ProdRollText = ({ id }) => {
    const { product_country } = useProduct(id);
    const prod = useProdCountry(product_country);

    if (prod && prod.promotion_text) {
        return (
            <TopBar>
                <div>{prod.promotion_text}</div>
            </TopBar>
        );
    }
    return (
        <TopBar>
            <div>Currently Unavailable for your Country</div>
        </TopBar>
    );
};

export default TopRollText;