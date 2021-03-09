import React from "react";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";
import ProductList from "../../../components/product/ProductList";

const ProductListPage = ({ filters }) => {
    console.log(filters);
    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

ProductListPage.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default ProductListPage;
