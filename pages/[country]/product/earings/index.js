import React from "react";
import EaringList from "../../../../components/earings/EaringList";
import Layout from "../../../../components/layout/Layout";
import ProductSeo from "../../../../components/product/ProductSeo";
import { common } from "../../../../redux/handlePages";

const slug = "earings";

const Earings = () => {
    return (
        <Layout slug={slug}>
            <ProductSeo slug={slug} />
            <EaringList />
        </Layout>
    );
};

Earings.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Earings;
