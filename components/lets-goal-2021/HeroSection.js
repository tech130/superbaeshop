import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import AnimateText from "../styled/AnimateText";
import ProPlannerPrice from "../professional-planner/ProPlannerPrice";
import ResponsiveImage from "../common/ResponsiveImage";
import Marquee from "react-fast-marquee";
import CheckIcon from "../icons/CheckIcon";

const MeetTxt = styled.h1`
    font-size:48px;
    font-weight: 700;
    line-height: 1.1;
    color: #000;
    margin-bottom: 18px;
    word-break: break-word;
    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 35px;
    }
`;
const ScrollText = styled.div`
  text-transform: uppercase;
  margin-right: 4rem;
  display: flex;
  width: 7rem;
  font-weight:500;
  align-items: center;
`;
const scrollTexts = [
    "Cute",
    "aesthetic",
    "stunning",
    "original",
    "magical",
    "simple",
    "elegant",
    "practical",
    "Cute",
    "aesthetic",
    "stunning",
    "original",
    "magical",
    "simple",
    "elegant",
    "practical",
    "Cute",
    "aesthetic",
    "stunning",
    "original",
    "magical",
    "simple",
    "elegant",
    "practical",
  ];
const HeroSection = () => {
    return (
        <>
            <Block padding="0px 0px 0px 0px">
                <Container fluid>
                    <div className="bg-gradients">
                        <div className="gradient-content">
                            <Row alignItems="center">
                                <Col lg={6} sm={6} >
                                    <MeetTxt>
                                        Cutest Planner <AnimateText>Ever.</AnimateText><br />
                                        {/* <br /> */}
                                    </MeetTxt>
                                    <p>The Ultimate Journaling Experience is here!
                                    </p>
                                    <ProPlannerPrice slug={"lets-goal-2021-planner"}/>
                                </Col>
                                <Col lg={6} sm={6} className="d-none d-sm-block">
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
            {/* <div className="bg-gradients-tags">
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
                    

                </div>
            </div> */}
        
            <Marquee
          speed={70}
        //   gradientWidth={0}
        gradient={false}
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(255,247,238,.85),#eef5ff)",
            padding: "0.6rem 0",
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {scrollTexts.map((text) => {
            return (
              <ScrollText key={text}>
                <div style={{ marginRight: "8px",    padding: "4px 0px" }}>
                  <CheckIcon />
                </div>
                {text}
              </ScrollText>
            );
          })}
        </Marquee>
        </Container>
        
    );
});
