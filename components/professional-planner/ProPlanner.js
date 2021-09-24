import React, { useRef, memo } from "react";
import Carousel from "nuka-carousel";
import useMedia from "use-media";
import {Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import { H3 } from "../styled/Headings";
import Txt from "../styled/Txt";
import ProPlannerPrice from "./ProPlannerPrice";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import P from "../styled/P";
import ResponsiveImage from "../common/ResponsiveImage";
import useOnScreen from "../../hooks/layout/useOnScreen";

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

const ProPlanner = () => {
    return (
        <>
            <Block padding="35px 0px 0px 0px">
                <Container fluid>
                    <div className="bg-gradients">
                        <div className="gradient-content">
                    <Row alignItems="center">
                        <Col lg={6}>
                            <MeetTxt>
                                Take back <br />
                                your best self. <br />
                            </MeetTxt>
                                <p>Vibrants™ patches empower you to safely restore  <br />
                                your body’s unique & optimal balance with nature.</p>
                                <ProPlannerPrice />
                            {/* <ResponsiveImage
                                image={require("./images/1.png?resize")}
                            /> */}
                            
                        </Col>
                        <Col lg={6}>
                            {/* <MeetTxt>
                                Meet the <br />
                                Perfect <br />
                                Professional planner
                            </MeetTxt>
                            <H3 mb="35px" weight={700}>
                                Crafted just for you!
                            </H3>
                            <ProPlannerPrice /> */}
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
            <Block padding="35px 0px">
                <Container>
                    <Flex alignItems="center" flexWrap>
                        <P
                            fontSize="4rem"
                            weight={700}
                            margin="10px 25px 15px 0px"
                            lineHeight={1}
                        >
                            Designed by artist
                        </P>
                        <P
                            lineHeight={1}
                            fontSize="2.2rem"
                            margin="0px 0px 15px 0px"
                            weight={500}
                        >
                            Engineered by experts
                        </P>
                    </Flex>
                    <Block margin="0px 0px 25px">
                        <Txt lineHeight={1} fontSize="3rem" weight={700}>
                            With highest quality print
                        </Txt>
                    </Block>
                    <ProPlannerPrice />
                </Container>
            </Block>

            <ProfPlannerSlider />

            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col>
                            <Block textAlign="center" margin="0px 0px 48px 0px">
                                <Txt
                                    fontSize="4rem"
                                    weight={700}
                                    align="center"
                                    lineHeight={1.2}
                                >
                                    A magical piece of design to fit every
                                    aspects of your life
                                </Txt>
                            </Block>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <ResponsiveImage
                                image={require("./images/2.png?resize")}
                            />
                        </Col>
                        <Col lg={5}>
                            <P fontSize="18px" weight={500}>
                                Year In Pixels. Year Goals. Year Vision Board.
                                Bookstagram. Professional Development Tracker.
                                SWOT. Future Logs. Brain Dump.
                            </P>
                            <P fontSize="18px" weight={500}>
                                Monthly Appointment Tracker. Schedule. Daily
                                Planner. Project Tracker. Finance Tracker. Habit
                                Tracker. Fitness Tracker. Meal, Water, Coffee
                                Tracker. Movies/TV Show Tracker.
                            </P>
                            <ProPlannerPrice />
                        </Col>
                    </Row>
                </Container>
            </Block>

            <Block padding="35px 0px">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveImage
                                    source={[
                                        {
                                            media: "(max-width: 475px)",
                                            srcSet: require("./images/3-mobile.jpg"),
                                        },
                                    ]}
                                    image={require("./images/3.jpg?resize")}
                                />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveImage
                                    image={require("./images/4.jpg?resize")}
                                />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveImage
                                    image={require("./images/5.jpg?resize")}
                                />
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    );
};

// const ListAnimation = memo(() => {

//     return (
//         <div className="">
//             fdg
//             {/* <img src="./images/svg/tick.svg?resize" /> */}
//             <ResponsiveImage 
//                         image={require("./images/svg/tick.svg?resize")}
//                     />
//         </div>
//     );
// });
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
                    DRUG FREE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO SIDE EFFECTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO INGREDIENTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    SAFE  ON ALL AGES
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    MONEY-BACK GUARANTEE
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
                    DRUG FREE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO SIDE EFFECTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO INGREDIENTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    SAFE  ON ALL AGES
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    MONEY-BACK GUARANTEE
                </span>
            </div>
        </div>
        <div className=" animation-row">
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    DRUG FREE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO SIDE EFFECTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO INGREDIENTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    SAFE  ON ALL AGES
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    MONEY-BACK GUARANTEE
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
                    DRUG FREE
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO SIDE EFFECTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img" >
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    NO INGREDIENTS
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    SAFE  ON ALL AGES
                </span>
            </div>
            <div className="sampleTags">
                <span className="svg-img">
                    <ResponsiveImage 
                        image={require("./images/tick.png?resize")}
                    />
                </span>
                <span className="text-black font-weight-bold">
                    MONEY-BACK GUARANTEE
                </span>
            </div>
        </div>
        </div>
        </div>
        </Container>
    );
});
const ProfPlannerSlider = memo(() => {
    const ref = useRef(null);
    const isMobile = useMedia({ maxWidth: 576 });
    const onScreen = useOnScreen(ref);
    const props = isMobile ? { slideWidth: "200px" } : { slidesToShow: 4 };

    return (
        <Block padding="50px 0px" ref={ref}>
            <Container fluid>
                <Carousel
                    withoutControls
                    wrapAround
                    autoplay={onScreen}
                    cellSpacing={15}
                    {...props}
                >
                    <ResponsiveImage 
                        image={require("./images/slides/1.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/2.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/4.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/5.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/6.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/7.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/8.jpg?resize")}
                    />
                    <ResponsiveImage 
                        image={require("./images/slides/9.jpg?resize")}
                    />
                </Carousel>
            </Container>
        </Block>
    );
});

export default ProPlanner;
