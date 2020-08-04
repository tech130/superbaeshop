import React, { useRef } from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import Carousel from "nuka-carousel";
import Button from "../styled/Button";
import useOnScreen from "../../hooks/layout/useOnScreen";
import ResponsiveImage from "../common/ResponsiveImage";

const PagesSlider = () => {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);

    return (
        <Block padding="50px 0px">
            <Container fluid>
                <Block>
                    <H2 textAlign="center" mb="0px">
                        Pages
                    </H2>
                    <P textAlign="center">Peek A Boo</P>
                </Block>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <div ref={ref}>
                            <Carousel
                                renderCenterLeftControls={({
                                    previousSlide,
                                }) => <LeftBtn onClick={previousSlide} />}
                                renderCenterRightControls={({ nextSlide }) => (
                                    <RightBtn onClick={nextSlide} />
                                )}
                                slidesToShow={1}
                                autoplay={onScreen}
                                wrapAround
                            >
                                <ResponsiveImage
                                    image={require("./images/slider-pages/0-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/1-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/2-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/3-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/4-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/5-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/6-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/7-min.png?resize")}
                                />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

const LeftBtn = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <svg
                viewBox="0 0 24 24"
                width="34"
                height="34"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </Button>
    );
};

const RightBtn = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <svg
                viewBox="0 0 24 24"
                width="34"
                height="34"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </Button>
    );
};

export default PagesSlider;
