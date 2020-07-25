import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import Img from "../styled/Img";
import FreeInclusions from "./FreeInclusions";
import PagesSlider from "./PagesSlider";
import WalkThrough from "./WalkThrough";

const LetsGoal2021 = () => {
    return (
        <>
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
        </>
    );
};

export default LetsGoal2021;
