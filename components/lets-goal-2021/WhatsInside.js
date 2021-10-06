import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import AnimateText from "../styled/AnimateText";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import Dot from "../styled/Dot";
import { ProductPrices } from "../product/ProductPrice";
import ResponsiveImage from "../common/ResponsiveImage";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
const WhatsInside = () => {
    return (
        <Block margin="50px 0px" padding="0px 0px" height="100%">
            <Container>
                <Block padding="0px 0px 15px 0px">
                    {/* <H2 weight="700" fontSize="48px" textAlign="center" mb="0px"> */}
                        {/* What&apos;s Inside */}
                        {/* <div className="animateText ">
                            <span>S</span>
                            <span>m</span>
                            <span>a</span>
                            <span>r</span>
                            <span>t</span>&nbsp;
                            <span>i</span>
                            <span>n</span>
                            <span>s</span>
                            <span>i</span>
                            <span>d</span>
                            <span>e</span>
                            <span>s</span>&nbsp;
                            <span>t</span>
                            <span>o</span>
                            <span>o</span>
                            <span>:</span>
                            &nbsp;
                            <span>O</span>
                            <span>M</span>
                            <span>G</span>
                        </div> */}
                        
                    {/* </H2> */}
                    <MainHeading textAlign="center">Smart insides too: <AnimateText> OMG</AnimateText></MainHeading>
                    <SmallHeading textAlign="center" >
                        Check out what makes my space 2022 so special
                    </SmallHeading>
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
                                Width: 22 cm, Height: 17 cm
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
                            image={require("./images/inside.png?resize")}
                            alt="Let's Goal 2021"
                        />
                    </Col>
                    <Col lg={7}>
                        <Block margin="15px 0px 0px 0px">
                            {/* <P>
                                Goal tracker, Bookstagram, TV Show lists, Movie lists, My obsessions, Habit Tracker, Meal planner, My loved ones, Places to visit, things to do, Clean schedules, Improvement Plan, Subscriptions, Dream Board, Vision Board, Idea Board, Achievement Board, Gift list, Fitness Tracker, Nail art pages, Outfit Planner, Appointments, Journals, Goal Grid, Mood tracker, Expense Tracker, Playlist, Water tracker, Period Tracker, Level 10 Life

                            </P> */}
                            <P>
                                <b>YEARLY SPREADS:</b> <b>Year at a glance - 2022 &amp; 2023, Year in pixels,</b> 
                                All About Me, The
real me, Year resolutions, Year affirmations, Birthdays, Memory board, Dream Journal, My deep
secrets, Dream board, Vision board, Level 10 Goals, Level 10 Life, Idea board,
Achievement board, Wish list (Things to buy, Things to do and Travel goals), My circle -
My world, People who add sunshine to my life ( Partner, Mum, Dad, Sibling, Bff, Gang),
My priorities, Bookstagram, Wall of movies, Tv show lists, Favourite quotes, Budget
plan, Mental health, My period days, My Sick days, My fitness journey, Improvement
plan, Sacred rituals, Products I Use, Clean home, Social stats, Social media passwords,
Subscriptions, Who borrowed what? Gifts page, Best days, Therapy pages (Mandala,
nail art), Self Portrait, Pen it down.

                            </P>
                            <P>
                                <b>MONTHLY SPREADS:</b>
                                My obsessions, Playlist of the Month, Month at a glimpse+ Goal Grid, Mood Tracker, Journal pages, Goal Tracker, Events, To Do, Habit Tracker, Sick Day/Period Tracker, Weekly/Daily spread, Mandala Coloring, Outfit designing, Nail art designing, Meal Planner, Expense Tracker Weight Tracker, Diet Tracker, Exercise Tracker, Water Tracker.
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
