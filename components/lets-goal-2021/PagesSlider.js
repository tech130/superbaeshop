import React, { useRef } from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import Carousel from "nuka-carousel";
import Button from "../styled/Button";
import useOnScreen from "../../hooks/layout/useOnScreen";
import ResponsiveImage from "../common/ResponsiveImage";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";

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
                    <P textAlign="center">Take a look inside</P>
                </Block>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <div ref={ref}>
                            <Carousel
                                renderCenterLeftControls={LeftBtn}
                                renderCenterRightControls={RightBtn}
                                slidesToShow={1}
                                autoplay={onScreen}
                                wrapAround
                                disableEdgeSwiping
                                renderBottomCenterControls={null}
                            >
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
                                    image={require("./images/slider-pages/7-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/8-min.png?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/9-min.png?resize")}
                                />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

const LeftBtn = ({ previousSlide }) => {
    return (
        <Button onClick={previousSlide}>
            <LeftIcon size={34} />
        </Button>
    );
};

const RightBtn = ({ nextSlide }) => {
    return (
        <Button onClick={nextSlide}>
            <RightIcon size={34} />
        </Button>
    );
};

export default PagesSlider;
