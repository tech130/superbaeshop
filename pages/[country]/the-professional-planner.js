import React from "react";
import Layout from "../../components/layout/Layout";
import ProPlanner from "../../components/professional-planner/ProPlanner";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";

const productId = 1;

const Home = () => {
    return (
        <Layout productId={productId}>
            <ProPlanner />
        </Layout>
    );
};

Home.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(productId));
};

export default Home;
