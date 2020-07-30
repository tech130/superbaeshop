import React, { useRef } from "react";
import Carousel from "nuka-carousel";
import useMedia from "use-media";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Img from "../styled/Img";
import { H3 } from "../styled/Headings";
import Txt from "../styled/Txt";
import ProPlannerPrice from "./ProPlannerPrice";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import P from "../styled/P";
import ResponsiveImage from "../common/ResponsiveImage";
import useOnScreen from "../../hooks/layout/useOnScreen";

const MeetTxt = styled.h1`
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 68px;
    margin-bottom: 30px;
    background: linear-gradient(#616161, #333);
    word-break: break-word;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

const ProPlanner = () => {
    return (
        <>
            <Block padding="35px 0px">
                <Container>
                    <Row alignItems="center">
                        <Col lg={7}>
                            <ResponsiveImage
                                image={require("./images/1.png?resize")}
                            />
                        </Col>
                        <Col lg={5}>
                            <MeetTxt>
                                Meet the <br />
                                Perfect <br />
                                Professional planner
                            </MeetTxt>
                            <H3 mb="35px" weight={700}>
                                Crafted just for you!
                            </H3>
                            <ProPlannerPrice />
                        </Col>
                    </Row>
                </Container>
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
                                image={require("./images/free-two-hardcover-books-mockup.png?resize")}
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
                                            srcSet: require("./images/3-mobile.png"),
                                        },
                                    ]}
                                    image={require("./images/3.png?resize")}
                                />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveImage
                                    image={require("./images/4.png?resize")}
                                />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveImage
                                    image={require("./images/5.png?resize")}
                                />
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    );
};

const ProfPlannerPic = styled(Img)`
    border: 1px solid #cecece;
`;

const ProfPlannerSlider = () => {
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
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-1.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-2.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-3.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-4.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-5.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-6.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-7.jpg"
                        alt=""
                    />
                    <ProfPlannerPic
                        src="/images/professional-planner/slides/slide-8.jpg"
                        alt=""
                    />
                </Carousel>
            </Container>
        </Block>
    );
};

export default ProPlanner;
