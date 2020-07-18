import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";

const UltimateSticker = () => {
    return <Layout></Layout>;
};

UltimateSticker.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("ultimate-sticker-book"));
};

export default UltimateSticker;
