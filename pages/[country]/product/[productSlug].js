import React from "react";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";
import { fetchProduct } from "../../../redux/product/product";
import Detail from "../../../components/product/Detail";
import { useRouter } from "next/router";

const ProductDetailPage = () => {
    const { query } = useRouter();

    return (
        <Layout>
            <Detail slug={query.productSlug} />
        </Layout>
    );
};

ProductDetailPage.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(ctx.query.productSlug));
};

export default ProductDetailPage;
