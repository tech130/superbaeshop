import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
import PagesSlider from "./PagesSlider";
import WalkThrough from "./WalkThrough";
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
            <FreeInclusions />
            <Block padding="15px 0">
                <Container>
                    <ResponsiveImage
                        image={require("./images/below-freebee/1.jpg?resize")}
                    />
                </Container>
            </Block>
            <PagesSlider />
            <WalkThrough />
        </>
    );
};

export default LetsGoal2021;
