import React from "react";
import Detail from "../../../../components/earings/Detail";
import Layout from "../../../../components/layout/Layout";
import ProductSeo from "../../../../components/product/ProductSeo";
import { common } from "../../../../redux/handlePages";

const slug = "earings";

const EaringDetail = () => {
    return (
        <Layout slug={slug}>
            <ProductSeo slug={slug} />
            <Detail />
        </Layout>
    );
};

EaringDetail.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default EaringDetail;
