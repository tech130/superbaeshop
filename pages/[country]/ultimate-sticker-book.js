import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import Sticker from "../../components/sticker/Sticker";

const productId = 4;

const UltimateSticker = () => {
    return (
        <Layout productId={productId}>
            <Sticker />
        </Layout>
    );
};

UltimateSticker.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("ultimate-sticker-book"));
};

export default UltimateSticker;
