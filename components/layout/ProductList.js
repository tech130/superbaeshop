import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { DEFAULT_COUNTRY } from "../common/CountryLink";
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

const ProdLinkStl = styled.a`
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-bottom: ${(props) => (props.isActive ? "2px solid #000" : "none")};
`;

const ProdLink = ({ slug, title }) => {
    const { asPath, query } = useRouter();
    const { country } = query;
    const as = `/${country || DEFAULT_COUNTRY}/product/${slug}`;

    return (
        <li>
            <Link passHref href={`/[country]/product/${slug}`} as={as}>
                <ProdLinkStl isActive={as === asPath}>{title}</ProdLinkStl>
            </Link>
        </li>
    );
};

const ProdItem = ({ slug }) => {
    const { title } = useProduct(slug);

    if (slug && title) {
        return <ProdLink slug={title} title={title} />;
    }

    return null;
};

const ProductList = () => {
    const state = useSelector((state) => state.headerProducts);

    return (
        <ProdList as="nav" justifyContent="center" alignItems="stretch">
            <ul>
                <ProdLink slug="earings" title="Earings" />
                {state.map((slug) => (
                    <ProdItem slug={slug} key={slug} />
                ))}
            </ul>
        </ProdList>
    );
};

export default ProductList;
