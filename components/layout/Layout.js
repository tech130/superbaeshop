import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Subscribe from "./Subscribe";
import TopRollText from "./TopRollText";

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
