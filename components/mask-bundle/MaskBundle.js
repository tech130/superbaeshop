import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2, H1 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import { InterSec } from "../styled/Hr";
import Dot from "../styled/Dot";
import { ProductPrices } from "../product/ProductPrice";
import ProductBuy from "../product/ProductBuy";
import Carousel from "nuka-carousel";
import ResponsiveImage from "../common/ResponsiveImage";
import slug from "./slug";

const images = [
    require("./images/slider/1.jpg?resize"),
    require("./images/slider/2.jpg?resize"),
    require("./images/slider/3.jpg?resize"),
    require("./images/slider/4.jpg?resize"),
    require("./images/slider/5.jpg?resize"),
    require("./images/slider/6.jpg?resize"),
    require("./images/slider/7.jpg?resize"),
];

const Point = ({ dotBg, point = "" }) => {
    return (
        <Col col={6}>
            <Flex margin="0px 0px 15px 0px" vertical alignItems="center">
                <Dot bg={dotBg} />
                <P textAlign="center" margin="0px 0px 15px 0px">
                    {point}
                </P>
            </Flex>
        </Col>
    );
};

const MaskBuy = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            flexWrap
            padding="40px 0px 0px 0px"
        >
            <Block margin="0px 10px 0px 0px">
                <ProductPrices fontSize="18px" slug={slug} />
            </Block>
            <ProductBuy slug={slug} />
        </Flex>
    );
};

const imgPadding = { paddingBottom: `50px` };

const MaskBundle = () => {
    return (
        <>
            <Block padding="35px 0px">
                <Container>
                    <H1 mb="0px" textAlign="center">
                        The Mask Bundle
                    </H1>
                    <P textAlign="center">for all 7 days a week</P>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Carousel
                                autoplay
                                renderCenterLeftControls={null}
                                renderCenterRightControls={null}
                                autoplayInterval={7000}
                                wrapAround
                            >
                                {images.map((img, idx) => (
                                    <div key={idx} style={imgPadding}>
                                        <ResponsiveImage
                                            image={img}
                                            alt="The Mask Bundle"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <MaskBuy />
                </Container>
            </Block>
            <InterSec />
            <Block padding="35px 0px">
                <Block padding="0px 10px 30px 10px">
                    <H2 weight={400} textAlign="center">
                        Why should I use these?
                    </H2>
                    <P textAlign="center">
                        CONVENIENT | WASHABLE | REUSABLE | FULL COVERAGE
                    </P>
                </Block>
                <Container>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Row>
                                <Point
                                    dotBg="#FFE7EF"
                                    point="Adjustable Ear loops"
                                />
                                <Point
                                    dotBg="#C6E1F1"
                                    point="Comfortable to use"
                                />
                            </Row>
                        </Col>
                    </Row>
                    <MaskBuy />
                </Container>
            </Block>
        </>
    );
};

export default MaskBundle;
