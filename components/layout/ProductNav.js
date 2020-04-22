import React from "react";
import styled from "styled-components";

const Productnav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--theme-border);

    .product-nav-list {
        list-style: none;
        white-space: nowrap;
        overflow-x: auto;
    }
    .product-nav-list li {
        display: inline-block;
    }

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
        <Productnav>
            <ul className="product-nav-list">
                <ProductNavItem title="Bundle" />
                <ProductNavItem title="Let’s Goal 2021 Planner" />
                <ProductNavItem title="The Ultimate Sticker Book" />
                <ProductNavItem title="The Professional Planner" />
            </ul>
            <style jsx>{`
                .product-nav {
                    border-bottom: 1px solid var(--theme-border);
                }
            `}</style>
        </Productnav>
    );
};

const ProductNavItem = ({ title = "" }) => (
    <li className="product-nav-item text-center">
        <a href="#">{title}</a>
        <style jsx>{``}</style>
    </li>
);

export default ProductNav;
