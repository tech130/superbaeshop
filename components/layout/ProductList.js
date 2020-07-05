import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import CountryLink from "../common/CountryLink";

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
                <ProdItem href="/bundle" title="Bundle" />
                <ProdItem
                    href="/lets-goal-2021"
                    title="Let’s Goal 2021 Planner"
                />
                <ProdItem
                    href="/the-ultimate-sticker-book"
                    title="The Ultimate Sticker Book"
                />
                <ProdItem title="The Professional Planner" />
            </ul>
        </ProdList>
    );
};

const ProdItem = ({ title = "", href = "" }) => {
    return (
        <li>
            <CountryLink href={href}>
                <ProdLink>{title}</ProdLink>
            </CountryLink>
        </li>
    );
};

export default ProductList;
