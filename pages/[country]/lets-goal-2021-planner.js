import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/lets-goal-2021/HeroSection";
import WhatsInside from "../../components/lets-goal-2021/WhatsInside";
import Img from "../../components/styled/Img";
import FreeInclusions from "../../components/lets-goal-2021/FreeInclusions";
import PagesSlider from "../../components/lets-goal-2021/PagesSlider";
import WalkThrough from "../../components/lets-goal-2021/WalkThrough";
import { common } from "../../redux/handlePages";
import { fetchProduct } from "../../redux/product/product";

const productId = 2;

const LetsGoal2021 = () => {
    return (
        <Layout productId={productId}>
            <HeroSection />
            <WhatsInside />
            <Img
                fullWidth
                src="/images/lets-goal-2021/intersection.jpg"
                alt=""
            />
            <FreeInclusions />
            <PagesSlider />
            <WalkThrough />
        </Layout>
    );
};

LetsGoal2021.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchProduct(productId));
};

export default LetsGoal2021;
