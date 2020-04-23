import React from "react";
import Layout from "../../components/layout/Layout";
import { fetchMaster } from "../../redux/master";
import { fetchProduct } from "../../redux/product/product";
import ProPlanner from "../../components/professional-planner/ProPlanner";

const Home = (props) => {
    return (
        <Layout>
            <ProPlanner />
        </Layout>
    );
};

Home.getInitialProps = async ({ store }) => {
    await Promise.all([
        store.dispatch(fetchProduct(1)),
        store.dispatch(fetchMaster()),
    ]);
    return {
        props: {},
    };
};

export default Home;
