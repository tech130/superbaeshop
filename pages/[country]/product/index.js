import React from "react";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";
import ProductList from "../../../components/product/ProductList";
import { fetchFilters } from "../../../redux/product/listing";

const ProductListPage = ({ filters }) => {
  
    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

ProductListPage.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchFilters(ctx.query));
};

export default ProductListPage;
