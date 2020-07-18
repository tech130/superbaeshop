import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import ProductList from "./ProductList";
import Subscribe from "./Subscribe";

const TopBar = styled.div`
    background: #000;
    padding: 8px 20px;
    font-size: 13px;
    text-align: center;
    color: #fff;
`;

const Layout = ({ children }) => {
    return (
        <>
            <TopBar>
                <div className="container">Organize your Life on the Go!</div>
            </TopBar>
            <Header />
            <ProductList />
            {children}
            <Subscribe />
            <Footer />
        </>
    );
};

export default Layout;
