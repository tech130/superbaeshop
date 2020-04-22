import React from "react";
import styled from "styled-components";
import Flex from "../styled/Flex";
import Ul from "../styled/Ul";

const ProdNav = styled(Flex)`
    border-bottom: 1px solid #eaeaea;

    .product-nav-item {
        display: inline-block;
    }
    .product-nav-item a {
        display: inline-block;
        padding: 10px 25px;
        color: #000;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
    }
`;

const ProductNav = () => {
    return (
        <ProdNav alignItems="center" justifyContent="center">
            <Ul>
                <ProductNavItem title="Bundle" />
                <ProductNavItem title="Let’s Goal 2021 Planner" />
                <ProductNavItem title="The Ultimate Sticker Book" />
                <ProductNavItem title="The Professional Planner" />
            </Ul>
        </ProdNav>
    );
};

const ProductNavItem = ({ title = "" }) => (
    <li className="product-nav-item text-center">
        <a href="#">{title}</a>
        <style jsx>{`
            .product-nav-item {
                display: inline-block;
            }
            .product-nav-item a {
                display: inline-block;
                padding: 10px 25px;
                color: #000;
                text-decoration: none;
                font-size: 15px;
                font-weight: 500;
            }
        `}</style>
    </li>
);

export default ProductNav;
