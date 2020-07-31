import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import { useRouter } from "next/router";
import products from "../../products";

const ProductSlugPage = () => {
    const router = useRouter();
    const { productSlug } = router.query;
    const { component } = products[productSlug];

    return <Layout productId={productSlug}>{component || null}</Layout>;
};

ProductSlugPage.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(ctx.query.productSlug));
};

export default ProductSlugPage;
