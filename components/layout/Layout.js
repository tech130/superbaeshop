import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled, { keyframes } from "styled-components";
import ProductList from "./ProductList";
import Subscribe from "./Subscribe";
import TopRollText from "./TopRollText";

const marquee = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

const TopBar = styled.div`
    background: #000;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
    height: 35px;

    div {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(100%, 0, 0);
        overflow: hidden;
        animation: ${marquee} 30s linear infinite;
        font-size: 14px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

const Layout = ({ children, productId }) => {
    return (
        <>
            <TopRollText productId={productId} />
            <Header />
            <ProductList />
            {children}
            <Subscribe />
            <Footer />
        </>
    );
};

export default Layout;
