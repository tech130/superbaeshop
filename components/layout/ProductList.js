import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CountryLink from "../common/CountryLink";

const ProdList = styled(Flex)`
    border-bottom: 1px solid #eaeaea;
    position: relative;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }
`;

const ProdLinkStl = styled.li`
    cursor: pointer;
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
`;

const CategoryLink = ({ id, title }) => {
    return (
        <ProdLinkStl>
            <CountryLink
                href="/category/[categoryId]"
                query={{ categoryId: id }}
            >
                {title}
            </CountryLink>
        </ProdLinkStl>
    );
};

const ProductList = () => {
    const data = useSelector((state) => ({
        products: state.headerProducts,
        categories: state.master.category || [],
    }));

    return (
        <ProdList as="nav" justifyContent="center" alignItems="stretch">
            <ul>
                {data.categories.map((cat) => (
                    <CategoryLink {...cat} key={`${cat.id}`} />
                ))}
            </ul>
        </ProdList>
    );
};

export default ProductList;
