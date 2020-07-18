import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import CountryLink from "../common/CountryLink";
import { useSelector } from "react-redux";

const ProdList = styled(Flex)`
    border-bottom: 1px solid #eaeaea;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }

    ul li a {
        display: inline-block;
        padding: 10px 25px;
        color: #000;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
    }
`;

const ProductList = () => {
    const state = useSelector((state) => state.headerProducts);

    return (
        <ProdList justifyContent="center" alignItems="stretch">
            <ul>
                {state.map((id) => (
                    <ProdItem id={id} key={id} />
                ))}
            </ul>
        </ProdList>
    );
};

const ProdItem = ({ id }) => {
    const product = useSelector((state) => state.product[id] || {});

    if (product.slug) {
        return (
            <li>
                <CountryLink href={`/${product.slug}`}>
                    {product.title}
                </CountryLink>
            </li>
        );
    }

    return null;
};

export default ProductList;
