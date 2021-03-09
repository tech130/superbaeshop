import React from "react";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";

const CategoryPage = () => {
    return (
        <Layout>
            
        </Layout>
    );
};

CategoryPage.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default CategoryPage;