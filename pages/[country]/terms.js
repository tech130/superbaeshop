import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";

const Terms = () => {
    return <Layout></Layout>;
};

Terms.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Terms;
