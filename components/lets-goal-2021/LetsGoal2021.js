import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
import PagesSlider from "./PagesSlider";
import Freebies from "./Freebies";
import OptionsSection from "./OptionsSection";
import WalkThrough from "./WalkThrough";
import ColorPicker from "./ColorPicker";
import GoodVibes from "./GoodVibes";
import TestimonialSection from "./TestimonialSection";
import StayTuned from "./StayTuned";
import { InterSec } from "../styled/Hr";
import Block from "../styled/Block";
import { Container } from "styled-bootstrap-grid";
import ResponsiveImage from "../common/ResponsiveImage";

const LetsGoal2021 = () => {
    return (
        <>
            <HeroSection />
            <WhatsInside />
            <InterSec />
            <Freebies />
            <OptionsSection />
            <ColorPicker />
            <TestimonialSection />
            <StayTuned />
            <GoodVibes />
            {/* <FreeInclusions />
            <Block padding="15px 0">
                <Container>
                    <ResponsiveImage
                        image={require("./images/below-freebee/1.jpg?resize")}
                    />
                </Container>
            </Block>
            <PagesSlider />
            <WalkThrough /> */}
        </>
    );
};

export default LetsGoal2021;
