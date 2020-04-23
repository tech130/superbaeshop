import React from "react";
import Layout from "../components/layout/Layout";
import Carousel from "nuka-carousel";
import useMedia from "use-media";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Picture from "../components/common/Picture";
import styled from "styled-components";
import Img from "../components/styled/Img";
import { H3 } from "../components/styled/Headings";
import Txt from "../components/styled/Txt";
import ProPlannerPrice from "../components/professional-planner/ProPlannerPrice";
import Block from "../components/styled/Block";
import Flex from "../components/styled/Flex";
import P from "../components/styled/P";

const MeetTxt = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    line-height: 68px;
    margin-bottom: 30px;
    background: linear-gradient(#616161, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Home = (props) => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row alignItems="center">
                        <Col lg={7}>
                            <Picture
                                fluid
                                src="/images/professional-planner/1.png"
                            />
                        </Col>
                        <Col lg={5}>
                            <MeetTxt>
                                Meet the <br />
                                Perfect <br />
                                Professional <br />
                                planner
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
                            margin="10px 25px 10px 0px"
                            lineHeight={1}
                        >
                            Designed by artist
                        </P>
                        <P
                            lineHeight={1}
                            fontSize="2.2rem"
                            margin="10px 0px"
                            weight={500}
                        >
                            Engineered by experts
                        </P>
                    </Flex>
                    <Block margin="0px 0px 25px">
                        <Txt fontSize="4rem" weight={700}>
                            With highest quality print
                        </Txt>
                    </Block>
                    <ProPlannerPrice />
                </Container>
            </Block>

            <Block>
                <Container fluid>
                    <Picture
                        fluid
                        src="/images/professional-planner/2.png"
                        alt=""
                    />
                </Container>
            </Block>

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
                            {/* <img
                                src="/images/professional-planner/2.png"
                                alt=""
                            /> */}
                        </Col>
                        <Col lg={5}>
                            <P fontSize="18px" weight={500}>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ullam harum voluptatem
                                repudiandae est obcaecati tenetur tempore,
                                numquam labore deserunt, officiis possimus,
                                magnam accusantium totam deleniti et! Odit
                                minima consequuntur enim!
                            </P>

                            <P fontSize="18px" weight={500}>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut porro inventore unde. Ad
                                eum similique accusantium dolor veniam nesciunt,
                                magnam, maiores doloribus nihil, ipsa
                                repudiandae possimus. Iusto fuga illum aliquid!
                            </P>
                            <ProPlannerPrice />
                        </Col>
                    </Row>
                </Container>
            </Block>

            <ProfPlannerSlider />

            <Block padding="35px 0px">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Picture
                                fluid
                                margin="0px 0px 15px"
                                source={[
                                    {
                                        media: "(max-width: 475px)",
                                        srcSet:
                                            "/images/professional-planner/3-mobile.png",
                                    },
                                ]}
                                src="/images/professional-planner/3.png"
                            />
                        </Col>
                        <Col lg={6}>
                            <Picture
                                fluid
                                margin="0px 0px 15px"
                                src="/images/professional-planner/4.png"
                                alt=""
                            />
                        </Col>
                        <Col lg={6}>
                            <Picture
                                margin="0px 0px 15px"
                                fluid
                                src="/images/professional-planner/5.png"
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

const ProfPlannerPic = styled(Img)`
    border: 1px solid #f5f5f5;
`;

const ProfPlannerSlider = () => {
    const isMobile = useMedia({ maxWidth: 576 });

    return (
        <Block>
            <Container fluid>
                <Carousel
                    withoutControls
                    wrapAround
                    autoplay
                    cellSpacing={15}
                    slidesToShow={isMobile ? 2 : 8}
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


export default Home;
