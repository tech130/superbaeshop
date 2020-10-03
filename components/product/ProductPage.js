import React from "react";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import Layout from "../layout/Layout";
import ProductSeo from "./ProductSeo";

const ProductPage = (slug, Component) => {
    const ProductSlugPage = () => {
        return (
            <Layout slug={slug}>
                <ProductSeo slug={slug} />
                <Component />
            </Layout>
        );
    };

    ProductSlugPage.getInitialProps = async (ctx) => {
        await common(ctx);
        await ctx.store.dispatch(fetchProduct(slug));
    };

    return ProductSlugPage;
};

export default ProductPage;
