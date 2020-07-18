import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";

const Bundle = () => {
    return <Layout></Layout>;
};

Bundle.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("bundle-2021"));
};

export default Bundle;
