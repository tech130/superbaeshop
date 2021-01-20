import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Txt from "../styled/Txt";
import Block from "../styled/Block";
import P from "../styled/P";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import { ProductPrices } from "../product/ProductPrice";
import ResponsiveImage from "../common/ResponsiveImage";

const frontSet = require("./images/cover.png?resize");

const HeroStyl = styled.section`
    padding: 40px 0px;
    background-color: #ffeded;
    background-size: cover;
    background-attachment: fixed;
`;

const ContStyl = styled(P)`
    margin-bottom: 0.5rem;
`;

const HeroSection = () => {
    return (
        <HeroStyl>
            <Container>
                <Row alignItems="center">
                    <Col lg={6}>
                        <ResponsiveImage
                            image={frontSet}
                            alt="Let's Goal 2021"
                        />
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={12}>
                                <Flex margin="20px 0px">
                                    <div>
                                        <Txt
                                            weight={600}
                                            lineHeight="64px"
                                            fontSize="64px"
                                        >
                                            All-IN-ONE
                                        </Txt>
                                        <Block textAlign="right">
                                            <Txt
                                                weight={600}
                                                lineHeight="64px"
                                                fontSize="64px"
                                                align="right"
                                            >
                                                PLANNER
                                            </Txt>
                                        </Block>
                                    </div>
                                </Flex>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} lgOffset={3}>
                                <ContStyl>
                                    Organize your Life on the Go!
                                </ContStyl>
                                <ContStyl>
                                    LET&apos;S GOAL 2021 PLANNER is here to save you
                                    from those OH-SO-BORING-PLANNERS AND BRING
                                    ALONG FUN AND PRODUCTIVITY THIS YEAR!
                                </ContStyl>
                                <ContStyl>
                                    This awesome all-in-one Goal Planner helps
                                    you plan and track your everyday stuff
                                    without a Hitch! This planner is Bullet
                                    Journal Inspired, designed keeping in mind a
                                    system that is proven productive and
                                    efficient by a diverse range of people
                                    around the Globe!
                                </ContStyl>
                                <ContStyl>
                                    You can plan your Year ahead, Accomplish
                                    your Goals, not forget Birthdays, doctor
                                    appointments, track your Habits, Food,
                                    Fitness, Physical & Mental Health, Self Care
                                    and what not!
                                </ContStyl>
                                <ProductPrices
                                    fontSize="18px"
                                    slug="lets-goal-2021-planner"
                                />
                                <ProductBuy slug="lets-goal-2021-planner" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </HeroStyl>
    );
};

export default HeroSection;
