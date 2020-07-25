import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import LetsGoal2021 from "../../components/lets-goal-2021/LetsGoal2021";

const productId = 2;

const Home = () => {
    return (
        <Layout productId={productId}>
            <LetsGoal2021 />
        </Layout>
    );
};

Home.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("lets-goal-2021-planner"));
};

export default Home;
