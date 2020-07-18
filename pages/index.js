import React from "react";
import Layout from "../components/layout/Layout";
import ProPlanner from "../components/professional-planner/ProPlanner";
import { fetchProduct } from "../redux/product/product";
import { common } from "../redux/handlePages";

const Home = () => {
    return (
        <Layout>
            <ProPlanner />
        </Layout>
    );
};

Home.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("the-professional-planner"));
};

export default Home;
