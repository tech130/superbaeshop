import React from "react";

const ProductNav = () => {
    return (
        <nav className="product-nav flex-center">
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
                .product-nav-list {
                    list-style: none;
                    white-space: nowrap;
                    overflow-x: auto;
                }
                .product-nav-list li {
                    display: inline-block;
                }
            `}</style>
        </nav>
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
