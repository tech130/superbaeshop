import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2, H1, H4 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import BundlePrice from "./BundlePrice";
import { InterSec } from "../styled/Hr";
import styled from "styled-components";
import Txt from "../styled/Txt";
import ResponsiveImage from "../common/ResponsiveImage";
import ProductLink from "../product/ProductLink";

const medicalSet = require("./images/medical.png?resize");

const BundleStl = styled.div`
    padding: 40px 0px;
    position: relative;

    &:nth-child(even) {
        background: #fafafa;
    }
`;

const BundleP = styled.p`
    font-size: 18px;
`;

const BundleItem = ({
    title = "",
    children = null,
    mathIcon = "+",
    image = {},
}) => {
    return (
        <BundleStl>
            <Container>
                <Row alignItems="center">
                    <Col md={5}>
                        <H4>{title}</H4>
                        <div>{children}</div>
                        <Txt fontSize="4em">{mathIcon}</Txt>
                    </Col>
                    {image.src && (
                        <Col mdOffset={2} md={5}>
                            <ResponsiveImage image={image} alt={title} />
                        </Col>
                    )}
                </Row>
            </Container>
        </BundleStl>
    );
};

const Bundle = () => {
    return (
        <>
            <Block padding="10px 0px 40px 0px">
                <Container>
                    <Row>
                        <Col lg={6} lgOffset={3}>
                            <ResponsiveImage
                                image={require("./images/1.png?resize")}
                                alt="Bundle 2021"
                            />
                        </Col>
                        <Col lg={8} lgOffset={2}>
                            <Block padding="10px 0px">
                                <H1 mb="0px">A BUNDLE OF JOY FOR A NEW YEAR</H1>
                                <P fontWeight={300}>
                                    The all in one bundle for 2021
                                </P>
                            </Block>
                            <Flex justifyContent="flex-end">
                                <BundlePrice />
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <InterSec />
            <Block padding="35px 0px">
                <Block padding="0px 10px 30px 10px">
                    <H2 weight={400} textAlign="center">
                        So, its all my happiness bundled together?{" "}
                    </H2>
                    <P textAlign="center">
                        Yup, it is!! Check out what comes with the bundle!!
                    </P>
                </Block>
                <Flex justifyContent="center" padding="0px 0px 15px 0px">
                    <BundlePrice />
                </Flex>
            </Block>
            <BundleItem
                title="Let's Goal 2021 + All free Inclusions"
                image={require("./images/lets-goal-2021.jpg?resize")}
            >
                <P color="#00A80B" fontSize="14px">
                    Free Inclusions: Ikkigai Work Sheets, The Ultimate Sticker
                    Book, Protective Wrapper Box, Pop Socket, Bookmarks (2)
                </P>
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
                <Flex justifyContent="flex-end">
                    <ProductLink slug="lets-goal-2021-planner">
                        <Txt textDecor="underline">
                            View Let&apos;s Goal 2021
                        </Txt>
                    </ProductLink>
                </Flex>
            </BundleItem>
            <BundleItem title="A Wall Calendar" image={require("./images/desk-calendar.jpg?resize")}>
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <BundleItem title="A Desk Calendar" image={require("./images/desk-calendar.jpg?resize")}>
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <BundleItem title="A Pocket Planner" image={require("./images/pocket-planner.jpg?resize")}>
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <BundleItem title="A Jot Book/Notebook">
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <BundleItem title="Greeting Cards (6)">
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <BundleItem title="Tote Bag" mathIcon={"="} image={require("./images/tote-bag.jpg?resize")}>
                <BundleP>
                    Plus you can find some exciting BULLET JOURNAL Inspired
                    spreads and amazing planner goodies!
                </BundleP>
            </BundleItem>
            <Block padding="20px 0px">
                <Container>
                    <BundlePrice />
                </Container>
            </Block>
        </>
    );
};

export default Bundle;
