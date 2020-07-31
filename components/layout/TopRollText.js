import React from "react";
import styled from "styled-components";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";

const TopBar = styled.div`
    background: #000;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
    height: 35px;
    padding: 0px 15px;
    line-height: 35px;
    font-size: 14px;
`;

const TopRollText = ({ productId }) => {
    if (productId) {
        return <ProdRollText id={productId} />;
    }
    return (
        <TopBar>
            <marquee>Organize your Life on the Go!</marquee>
        </TopBar>
    );
};

const ProdRollText = ({ id }) => {
    const { product_country } = useProduct(id);
    const prod = useProdCountry(product_country);

    if (prod && prod.promotion_text) {
        return (
            <TopBar>
                <marquee>{prod.promotion_text}</marquee>
            </TopBar>
        );
    }
    return (
        <TopBar>
            <marquee>Currently Unavailable for your Country</marquee>
        </TopBar>
    );
};

export default TopRollText;
