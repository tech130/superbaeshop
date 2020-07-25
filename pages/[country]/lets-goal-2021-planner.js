import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import LetsGoal2021 from "../../components/lets-goal-2021/LetsGoal2021";

const productId = 2;

const LetsGoal2021Page = () => {
    return (
        <Layout productId={productId}>
            <LetsGoal2021 />
        </Layout>
    );
};

LetsGoal2021Page.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct("lets-goal-2021-planner"));
};

export default LetsGoal2021Page;
