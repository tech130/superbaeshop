import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import Block from "../styled/Block";
import P from "../styled/P";
import { CartButton } from "../styled/Button";
import Flex from "../styled/Flex";

const HeroStyl = styled.section`
    padding: 40px 0px;
    background-image: url("/images/lets-goal-2021/herobg.jpg");
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
                        <Img
                            src="/images/lets-goal-2021/front.png"
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
                                    LET&apos;S GOAL 2020 PLANNER is here to save
                                    you from those OH-SO-BORING-PLANNERS AND
                                    BRING ALONG FUN AND PRODUCTIVITY THIS YEAR!
                                </ContStyl>
                                <ContStyl>
                                    This FAB planner is all that you need to get
                                    your hands on this 2020 NEW YEAR.
                                </ContStyl>
                                <ContStyl>
                                    Take a big leap in sorting all your priority
                                    everyday stuffs this LEAP YEAR!
                                </ContStyl>
                                <ContStyl>
                                    Plus you can find some exciting BULLET
                                    JOURNAL Inspired spreads and amazing planner
                                    goodies!
                                </ContStyl>
                                <ContStyl>
                                    CAN&apos;T WAIT FOR YOU GUYS TO GET HOLD OF
                                    THEM!
                                </ContStyl>
                                <P fontSize="18px" textAlign="right">
                                    -DRITI
                                </P>
                                <CartButton>Buy Now</CartButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </HeroStyl>
    );
};

export default HeroSection;
