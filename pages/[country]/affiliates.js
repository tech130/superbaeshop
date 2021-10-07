import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { common } from "../../redux/handlePages";
import GoodVibes from "../../components/lets-goal-2021/GoodVibes"
import AffiliatesComponent from "../../components/affiliates/AffiliatesPage";
const Affiliates = () => {
    return (
        <Layout>
            
            <Block padding="0px 0px">
                <AffiliatesComponent />
            </Block>
                <GoodVibes />
            
        </Layout>
    );
};

// Affiliates.getInitialProps = async (ctx) => {
//     await common(ctx, true);
// };

export default Affiliates;
