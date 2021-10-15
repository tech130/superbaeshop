import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
import Freebies from "./Freebies";
import OptionsSection from "./OptionsSection";
import WalkThrough from "./WalkThrough";
import ColorPicker from "./ColorPicker";
import GoodVibes from "./GoodVibes";
import TestimonialSection from "./TestimonialSection";
import StayTuned from "./StayTuned";
import SmartDigitalPlanner from "./SmartDigitalPlanner";
import UltimateBundle from "./UltimateBundle";
import { InterSec } from "../styled/Hr";
import Block from "../styled/Block";

const LetsGoal2021 = () => {
    return (
        <>
            <HeroSection />
            <WhatsInside />
            {/* <InterSec /> */}
            {/* <div className="d-none d-md-block d-lg-block d-xl-block">
                <Freebies />
            </div> */}
            {/* <div className="d-block d-md-none d-lg-none d-xl-none">
                <FreeInclusions />
            </div> */}
                <FreeInclusions />
            <UltimateBundle />
            {/* <Freebies /> */}
            {/* <InterSec /> */}
            {/* <SmartDigitalPlanner /> */}
            {/* <OptionsSection /> */}
            <ColorPicker />
            <Block padding="65px 0px 0px 0px">

                <TestimonialSection />
            </Block>
            <StayTuned />
            <GoodVibes />
            
        </>
    );
};

export default LetsGoal2021;
