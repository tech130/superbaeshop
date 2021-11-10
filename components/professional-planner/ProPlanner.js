import React, { useRef, memo, useEffect } from "react";
import Carousel from "nuka-carousel";
import useMedia from "use-media";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import ProPlannerPrice from "./ProPlannerPrice";
import Block from "../styled/Block";
import P from "../styled/P";
import ResponsiveImage from "../common/ResponsiveImage";
import useOnScreen from "../../hooks/layout/useOnScreen";
import AnimateText from "../styled/AnimateText";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry } from "../common/CountryLink";
import { eventOnProductDetailPage } from "../../utils/analytics";

const ResponsiveSet = styled.div`
    width:100%;
    height:100%;
    @media (max-width: 576px) {
        height:645px;
        div{
            height:100%;
        }
    }
`;
const ResponsiveHeight = styled.div`
    max-width: 570px;
    margin: auto;
`;

const slug = "the-professional-planner";

const ProPlanner = () => {
    const product = useProduct(slug);

    const productCountry = useProdCountry(product.product_country)
    
    useEffect(() => {
        eventOnProductDetailPage([product.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
    return (
        <>
            <Block padding="0px 0px 35px 0px">
                <Container>
                    <Row alignItems="center">
                        <Col lg={7} className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            <ResponsiveHeight>
                                <ResponsiveImage
                                    image={require("./images/1.png?resize")}
                                />
                            </ResponsiveHeight>
                        </Col>
                        <Col lg={5} className="responsemarginTop">
                            <MainHeading className="text-center text-sm-start">
                                Meet the <br />
                                Perfect <br />
                                Professional  <AnimateText> planner</AnimateText>
                            </MainHeading>
                            <SmallHeading mb="35px" weight={700} className="text-center text-sm-start">
                                Crafted just for you!
                            </SmallHeading>
                            <div className="text-center text-sm-start">
                                <ProPlannerPrice slug={"the-professional-planner"} />
                            </div>
                        </Col>
                        <Col lg={6} sm={6} xs={12} className="d-block d-sm-none d-md-none d-lg-none d-xl-none pt-1">
                            <ResponsiveImage
                                image={require("./images/1.png?resize")}
                            />
                        </Col>
                    </Row>
                </Container>
            </Block>
            <Block padding="35px 0px">
                <Container>
                    {/* <Flex alignItems="center" flexWrap> */}
                        <MainHeading className="text-center text-sm-start"
                            fontSize="4rem"
                            weight={700}
                            margin="10px 25px 15px 0px"
                            lineHeight={1}
                        >
                            Designed by <AnimateText> artist</AnimateText>
                        </MainHeading>

                    {/* </Flex> */}
                    <Block margin="0px 0px 25px">
                        <SmallHeading className="text-center text-sm-start" lineHeight={1} fontSize="3rem" weight={700}>
                            With highest quality print
                        </SmallHeading>
                        <SmallHeading
                            lineHeight={1}
                            fontSize="2rem"
                            margin="0px 0px 15px 0px"
                            weight={500}
                            className="text-center text-sm-start" 
                        >
                            Engineered by experts
                        </SmallHeading>
                    </Block>
                    <div className="text-center text-sm-start">
                        <ProPlannerPrice slug={"the-professional-planner"} />
                    </div>
                </Container>
            </Block>

            <ProfPlannerSlider />

            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col>
                            <Block textAlign="center" margin="0px 0px 48px 0px">
                                <MainHeading className="text-center text-sm-center"
                                    fontSize="4rem"
                                    weight={700}
                                    align="center"
                                    lineHeight={1.2}
                                >
                                    A magical piece of design to fit every
                                    aspects of your <AnimateText> life</AnimateText>
                                </MainHeading>
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
                            <div className="text-center text-sm-start">
                                <ProPlannerPrice slug={"the-professional-planner"} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Block>

            <Block padding="35px 0px">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Block margin="0px 0px 15px 0px">
                                <ResponsiveSet>
                                    <ResponsiveImage
                                        source={[
                                            {
                                                media: "(max-width: 475px)",
                                                srcSet: require("./images/3-mobile.jpg"),
                                            },
                                        ]}
                                        image={require("./images/3.jpg?resize")}
                                    />
                                </ResponsiveSet>
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
