import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import Picture from "../common/Picture";
import Dot from "../styled/Dot";
import ProductPrice from "../product/ProductPrice";

const slantSet = require("./images/slant.png?resize&sizes[]=350&sizes[]=720&sizes[]=1080");

const WhatsInside = () => {
    return (
        <Block padding="50px 0px">
            <Container>
                <Block padding="0px 0px 15px 0px">
                    <H2 textAlign="center" mb="0px">
                        What&apos;s Inside
                    </H2>
                    <P textAlign="center">
                        Check out what makes let&apos;s goal 2021 so special
                    </P>
                </Block>
                <Row>
                    <Col md={4}>
                        <Flex
                            vertical
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Dot />
                            <P margin="0px 0px 5px 0px" textAlign="center">
                                PRODUCT PRICE
                            </P>
                            <P textAlign="center">
                                <ProductPrice id={2} />
                                <ProductPrice type="original_price" id={2} />
                            </P>
                        </Flex>
                    </Col>
                    <Col md={4}>
                        <Flex
                            vertical
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Dot bg="#FFE7EF" />
                            <P margin="0px 0px 5px 0px" textAlign="center">
                                DIMENSIONS
                            </P>
                            <P textAlign="center">
                                Width: 18.5 cm, Height: 23.5 cm
                            </P>
                        </Flex>
                    </Col>
                    <Col md={4}>
                        <Flex
                            vertical
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Dot bg="#C6E1F1" />
                            <P margin="0px 0px 5px 0px" textAlign="center">
                                BOOK TYPE
                            </P>
                            <P textAlign="center">
                                Classic Hardcover with rose gold foil accents.
                            </P>
                        </Flex>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <Picture src={slantSet.src} srcSet={slantSet.srcSet} />
                    </Col>
                    <Col lg={7}>
                        <Block margin="15px 0px 0px 0px">
                            <P>
                                <b>YEARLY SPREADS</b>: Year at a glance - 2020 &
                                2021, Year in Pixels, My Best 20 in 2020, Level
                                10 Goals, Level 10 Life, Birthdays, Bookstagram,
                                Self Care, Affirmations, Art Therapy, Self
                                Notes, Clean eating, New in town, Dishes to try,
                                Food festivals, Cravings, Social Stats, Brain
                                Dump, Movies, Tv shows, Clean Home, Pack me up,
                                Bucket List, Memories, Subscriptions.
                            </P>
                            <P>
                                <b>MONTHLY SPREADS</b>: My obsessions, Month at
                                a glance + Notes, Goal Tracker, Events, To Do,
                                Ideas, Quotes, Habit Tracker, Sick Day/Period
                                Tracker, Habits to Kill & Grow, Weekly/Daily
                                spread, Gratitude, Introspections, Expense
                                Tracker, Cosmic Savings, Shopping List, Weight
                                Tracker, Diet Tracker, Exercise Tracker, Water
                                Tracker, Sleep Tracker, Sugar/Junk Tracker, Meal
                                Planner.
                            </P>
                            <P>
                                <b>FREE GOODIES</b>: Pen with Stylus(1),
                                Stickers (5 Sheets), Bookmarks/Dividers(12),
                                Posters(12) & Washi tapes (5), A Wrapped
                                Protective Box.
                            </P>
                            <ProductBuy productId={2} />
                        </Block>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default WhatsInside;
