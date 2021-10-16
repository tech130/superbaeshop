import React, { useRef } from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Carousel from "nuka-carousel";
import Button from "../styled/Button";
import useOnScreen from "../../hooks/layout/useOnScreen";
import ResponsiveImage from "../common/ResponsiveImage";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";
import MainHeading from "../styled/MainHeading";
import AnimateText from "../styled/AnimateText";
import SmallHeading from "../styled/SmallHeading";

const PagesSlider = () => {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);

    return (
        <Block padding="50px 0px 0px 0px 0px">
            <Container fluid>
                <Block padding="0px 0px 30px 0px">
                    <MainHeading textAlign="center" mb="0px">
                    The Magic <AnimateText>Recipe</AnimateText>
                    </MainHeading>
                    <SmallHeading textAlign="center">Take a look inside</SmallHeading>
                </Block>
                <Row>
                    <Col lg={10} lgOffset={1} xl={8} xlOffset={2}>
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
                                    image={require("./images/slider-pages/1.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/2.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/3.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/4.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/5.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/6.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/7.jpg?resize")}
                                />
                                <ResponsiveImage
                                    image={require("./images/slider-pages/8.jpg?resize")}
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
