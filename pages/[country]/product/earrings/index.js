import React from "react";
import EaringList from "../../../../components/earings/EaringList";
import Layout from "../../../../components/layout/Layout";
import { common } from "../../../../redux/handlePages";

const Earings = () => {
    return (
        <Layout>
            <EaringList />
        </Layout>
    );
};

Earings.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Earings;
