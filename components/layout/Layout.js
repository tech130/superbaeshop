import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Subscribe from "./Subscribe";
import TopRollText from "./TopRollText";
import styled from "styled-components";

const StickyTop = styled.div`
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.67);
`;

const Layout = ({ children, productId }) => {
    return (
        <>
            <TopRollText productId={productId} />
            <StickyTop>
                <Header />
                <ProductList />
            </StickyTop>
            {children}
            <Subscribe />
            <Footer />
        </>
    );
};

export default Layout;
