import React from "react";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";

const CategoryListPage = () => {
    return (
        <Layout>
            
        </Layout>
    );
};

CategoryListPage.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default CategoryListPage;