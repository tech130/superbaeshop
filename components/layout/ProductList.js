import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import CountryLink, { DEFAULT_COUNTRY } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";

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

const ProductList = () => {
    const state = useSelector((state) => state.headerProducts);

    return (
        <header>
            <ProdList as="nav" justifyContent="center" alignItems="stretch">
                <ul>
                    <li>
                        <CountryLink passHref href="/product/earings">
                            <ProdLink>Earings</ProdLink>
                        </CountryLink>
                    </li>
                    {state.map((id) => (
                        <ProdItem id={id} key={id} />
                    ))}
                </ul>
            </ProdList>
        </header>
    );
};

const ProdLink = styled.a`
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-bottom: ${(props) => (props.isActive ? "2px solid #000" : "none")};
`;

const ProdItem = ({ id }) => {
    const { asPath, query } = useRouter();
    const { country } = query;
    const { slug, title } = useProduct(id);

    if (slug && title) {
        const as = `/${country || DEFAULT_COUNTRY}/product/${slug}`;
        return (
            <li>
                <Link passHref href={`/[country]/product/${slug}`} as={as}>
                    <ProdLink isActive={as === asPath}>{title}</ProdLink>
                </Link>
            </li>
        );
    }

    return null;
};

export default ProductList;
