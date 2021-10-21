import React from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
// import Freebies from "./Freebies";
// import OptionsSection from "./OptionsSection";
// import WalkThrough from "./WalkThrough";
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


const images=[
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    './images/free-inclusions/Scrunchy.jpg',
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
]
const slug="lets-goal-2021-planner";
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
            <FreeInclusions images={images} slug={slug} />
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
