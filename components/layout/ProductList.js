import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { DEFAULT_COUNTRY } from "../common/CountryLink";

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
        <ProdList justifyContent="center" alignItems="stretch">
            <ul>
                {state.map((id) => (
                    <ProdItem id={id} key={id} />
                ))}
            </ul>
        </ProdList>
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
    const router = useRouter();
    const { country, productSlug } = router.query;
    const { slug, title } = useSelector((state) => state.product[id] || {});

    if (slug && title) {
        const href = `/[country]/[productSlug]`;
        return (
            <li>
                <Link href={href} as={`/${country || DEFAULT_COUNTRY}/${slug}`}>
                    <ProdLink isActive={productSlug === slug}>{title}</ProdLink>
                </Link>
            </li>
        );
    }

    return null;
};

export default ProductList;
