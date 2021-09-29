import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import ProPlannerPrice from "../professional-planner/ProPlannerPrice";

import ResponsiveImage from "../common/ResponsiveImage";

const frontSet = require("./images/cover.png?resize");


const MeetTxt = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 56px;
    color: #000;
    margin-bottom: 18px;
    word-break: break-word;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const HeroSection = () => {
    return (
        <>
        <Block padding="0px 0px 0px 0px">
            <Container fluid>
                <div className="bg-gradients">
                    <div className="gradient-content">
                        <Row alignItems="center">
                            <Col lg={6}>
                                <MeetTxt>
                                Cutest  
 <br />
 Planner Ever.<br />
                                </MeetTxt>
                                <p>The Ultimate Journaling Experience is here
Preorder now!
</p>
                                <ProPlannerPrice />
                            </Col>
                            <Col lg={6}>
                                <ResponsiveImage
                                    image={require("./images/cover.png?resize")}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Block>
        <Block padding="20px 0px">
            <ListAnimation />
        </Block>
        </>
    );
};

export default HeroSection;
const ListAnimation = (() => {
    return (
        <Container fluid>
        <div className="bg-gradients-tags">
        <div className="d-flex flex-row newww">
        <div className="animation-row">
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                CUTE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 AESTHETIC
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 STUNNING
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    ORIGINAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 MAGICAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 SIMPLE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 ELEGANT
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                  PRACTICAL
                </span>
            </div>
        </div>
        <div className="animation-row">
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                CUTE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 AESTHETIC
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 STUNNING
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    ORIGINAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 MAGICAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 SIMPLE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 ELEGANT
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                  PRACTICAL
                </span>
            </div>
        </div>
        <div className="animation-row">
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                CUTE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 AESTHETIC
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 STUNNING
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    ORIGINAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 MAGICAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 SIMPLE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 ELEGANT
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                  PRACTICAL
                </span>
            </div>
        </div>
        <div className="animation-row">
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                CUTE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 AESTHETIC
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 STUNNING
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    ORIGINAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 MAGICAL
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 SIMPLE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                 ELEGANT
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                  PRACTICAL
                </span>
            </div>
        </div>
        
        </div>
        </div>
        </Container>
    );
});
