import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import Dot from "../styled/Dot";
import { ProductPrices } from "../product/ProductPrice";
import ResponsiveImage from "../common/ResponsiveImage";

const WhatsInside = () => {
    return (
        <Block padding="50px 0px">
            <Container>
                <Block padding="0px 0px 15px 0px">
                    <H2 textAlign="center" mb="0px">
                        {/* What&apos;s Inside */}
                        Smart insides too: OMG
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
                                <ProductPrices
                                    slug={"lets-goal-2021-planner"}
                                />
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
                                Classic Hardcover with gold foil accents.
                            </P>
                        </Flex>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <ResponsiveImage
                            image={require("./images/inside.jpg?resize")}
                            alt="Let's Goal 2021"
                        />
                    </Col>
                    <Col lg={7}>
                        <Block margin="15px 0px 0px 0px">
                            <P>
                                Goal tracker, Bookstagram, TV Show lists, Movie lists, My obsessions, Habit Tracker, Meal planner, My loved ones, Places to visit, things to do, Clean schedules, Improvement Plan, Subscriptions, Dream Board, Vision Board, Idea Board, Achievement Board, Gift list, Fitness Tracker, Nail art pages, Outfit Planner, Appointments, Journals, Goal Grid, Mood tracker, Expense Tracker, Playlist, Water tracker, Period Tracker, Level 10 Life

                            </P>
                            <P>
                                <b>YEARLY SPREADS</b>: Year at a glance - 2021 & 2022, Year in Pixels, Vision Board, Level 10 Goals,  Birthdays, Bookstagram, Self Care, Make yourself a Priority, Sacred Rituals, Hygge, Mental Health, Social Stats, Brain Dump, Clean Home, Pack me up, Bucket List, Memories, Subscriptions.4

                            </P>
                            <P>
                                <b>MONTHLY SPREADS</b>: My obsessions, Month at a glance + Notes, Goal Tracker, Events, To Do, Ideas, Quotes, Habit Tracker, Sick Day/Period Tracker, Habits to Kill & Grow, Weekly/Daily spread, Gratitude, Introspections, Expense Tracker, Shopping List, Clean eating, Weight Tracker, Diet Tracker, Exercise Tracker, Water Tracker, Sleep Tracker, Sugar/Junk Tracker, Meal Planner, Movies, Tv shows
                            </P>
                            {/* <P>
                                <b>FREE GOODIES</b>: Pop Socket, Bookmarks(2), Ikigai WorkSheets, Postcards and a Protective Keepsake box
                            </P> */}
                            <ProductBuy slug={"lets-goal-2021-planner"} />
                        </Block>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default WhatsInside;
