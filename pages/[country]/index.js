import React from "react";
import Layout from "../../components/layout/Layout";
import { fetchMaster } from "../../redux/master";
import getToken from "../../utils/getToken";
import { updateProduct, fetchProduct } from "../../redux/product/product";
import ProPlanner from "../../components/professional-planner/ProPlanner";

const Home = () => {
    return (
        <Layout>
            <ProPlanner />
        </Layout>
    );
};

Home.getInitialProps = async (ctx) => {
    await ctx.store.dispatch(fetchMaster());
    const { token, Api } = await getToken(ctx);
    if (token && Api) {
        try {
            const res = await Api({
                url: `products/1/`,
            });
            ctx.store.dispatch(updateProduct(res.data));
        } catch (err) {
            console.log(err);
        }
    } else {
        await ctx.store.dispatch(fetchProduct(1));
    }
};

export default Home;
