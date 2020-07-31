import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";
import products, { getFirstProduct } from "../../products";
import { useSelector } from "react-redux";

const Home = () => {
    const slug = useSelector(getFirstProduct);
    const { component } = products[slug] || {};

    return <Layout>{component || null}</Layout>;
};

Home.getInitialProps = async (ctx) => {
    await common(ctx);
    const slug = getFirstProduct(ctx.store.getState());
    if (slug) {
        await ctx.store.dispatch(fetchProduct(slug));
    }
};

export default Home;
