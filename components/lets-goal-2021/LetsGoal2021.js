import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
import PagesSlider from "./PagesSlider";
import WalkThrough from "./WalkThrough";
import { InterSec } from "../styled/Hr";

const LetsGoal2021 = () => {
    return (
        <>
            <HeroSection />
            <WhatsInside />
            <InterSec />
            <FreeInclusions />
            <PagesSlider />
            <WalkThrough />
        </>
    );
};

export default LetsGoal2021;
