import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";

const productId = 4;

const UltimateSticker = () => {
    return <Layout productId={productId}></Layout>;
};

UltimateSticker.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(productId));
};

export default UltimateSticker;
