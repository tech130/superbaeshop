import React from "react";
import Detail from "../../../../components/earings/Detail";
import Layout from "../../../../components/layout/Layout";
import ProductSeo from "../../../../components/product/ProductSeo";
import { common } from "../../../../redux/handlePages";
import { fetchProduct } from "../../../../redux/product/product";
import { useRouter } from "next/router";

const EaringDetail = () => {
    const router = useRouter();
    const { earingSlug } = router.query;

    return (
        <Layout slug={earingSlug}>
            <ProductSeo slug={earingSlug} />
            <Detail slug={earingSlug} />
        </Layout>
    );
};

EaringDetail.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(ctx.query.earingSlug));
};

export default EaringDetail;
