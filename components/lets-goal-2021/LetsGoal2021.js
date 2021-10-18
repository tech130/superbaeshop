import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
// import Freebies from "./Freebies";
// import OptionsSection from "./OptionsSection";
// import WalkThrough from "./WalkThrough";
import ColorPicker from "./ColorPicker";
import GoodVibes from "./GoodVibes";
import TestimonialSection from "./TestimonialSection";
import StayTuned from "./StayTuned";
// import SmartDigitalPlanner from "./SmartDigitalPlanner";
import UltimateBundle from "./UltimateBundle";
import PagesSlider from "./PageSlider";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import MainHeading from "../styled/MainHeading";
import AnimateText from "../styled/AnimateText";
import Flex from "../styled/Flex";
import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";

const FlexBox = styled(Flex)`
    align-items: center;
    justify-content: center;
`;
const ImageBox = styled(Flex)`
    
    
    border-radius: 50%;
    overflow: hidden;
    background: gray;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props)=>props.borderColor};
    margin: 0px 15px;
    padding:4px;

`;
const ImageInside = styled(Flex)`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: gray;
    align-items: center;
    justify-content: center;

`;
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
            <PagesSlider />
            <FreeInclusions />
            <UltimateBundle />
            {/* <Freebies /> */}
            {/* <InterSec /> */}
            {/* <SmartDigitalPlanner /> */}
            {/* <OptionsSection /> */}
            {/* <ColorPicker /> */}
            <Block padding="65px 0px 0px 0px">

                <TestimonialSection />
            </Block>
            <StayTuned />
            <GoodVibes />
       
            
        </>
    );
};

export default LetsGoal2021;
