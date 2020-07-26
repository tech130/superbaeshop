import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import Bundle from "../../components/bundle/Bundle";

const productId = 3;

const Home = () => {
    return (
        <Layout productId={productId}>
            <Bundle />
        </Layout>
    );
};

Home.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("bundle-2021"));
};

export default Home;
