import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";

const ProdList = styled(Flex)`
    border-bottom: 1px solid #eaeaea;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }
`;

const ProdLink = styled.a`
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
`;

const ProductList = () => {
    return (
        <ProdList justifyContent="center" alignItems="stretch">
            <ul>
                <ProdItem title="Bundle" />
                <ProdItem title="Let’s Goal 2021 Planner" />
                <ProdItem title="The Ultimate Sticker Book" />
                <ProdItem title="The Professional Planner" />
            </ul>
        </ProdList>
    );
};

const ProdItem = ({ title = "" }) => {
    return (
        <li>
            <ProdLink>{title}</ProdLink>
        </li>
    );
};

export default ProductList;
