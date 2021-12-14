import React, { useEffect } from "react";
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
import FreeInclusions from "../lets-goal-2021/FreeInclusions";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import AnimateText from "../styled/AnimateText";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry } from "../common/CountryLink";
import { eventOnProductDetailPage } from "../../utils/analytics";
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
const ResponsiveHeight = styled.div`
    max-width: 500px;
    margin: auto;
`;
const images = [
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
    './images/ultimate-bundle/pink/DeskCalendar.jpg',
    './images/ultimate-bundle/pink/WallCalendar.jpg',
    './images/ultimate-bundle/pink/weeklyPlanner.jpg',
    './images/ultimate-bundle/pink/laptopSkin.jpg',
    './images/ultimate-bundle/pink/SlamBookcover.jpg',
]

const slug = "bundle-2021";
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

    const product = useProduct(slug);

    const productCountry = useProdCountry(product.product_country)

    useEffect(() => {
        eventOnProductDetailPage([product.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
   
    return (
        <>
            <Block padding="10px 0px 20px 0px">
                <Container>
                    <Row alignItems="center">
                        <Col xl={6} lg={6} sm={6} xs={12} className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            <ResponsiveHeight>
                                <ResponsiveImage
                                    image={require("../lets-goal-2021/images/cover.png?resize")}
                                />
                            </ResponsiveHeight>
                        </Col>
                        <Col xl={6} lg={6} sm={6} xs={12}>
                            <MainHeading className="text-center text-sm-start">
                                + 18 exciting <AnimateText>Freebies.</AnimateText> <br />Pink Edition
                                {/* <br /> */}
                            </MainHeading>

                            <SmallHeading className="text-center text-sm-start">The all in one bundle for 2022
                            </SmallHeading>
                            <Block padding="10px 0px 0px 0px">
                                <Flex justifyContent="start" className="justify-content-center justify-content-sm-start"  >
                                    <BundlePrice slug={slug} />
                                </Flex>
                            </Block>
                        </Col>
                        <Col lg={6} sm={6} xs={12} className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
                            <ResponsiveImage
                                image={require("../lets-goal-2021/images/cover.png?resize")}
                            />
                        </Col>
                        {/* <Col lg={10} lgOffset={1} className="pb-4">
                            <Block padding="10px 0px">
                                <MainHeading textAlign="center">A BUNDLE OF JOY FOR A NEW <AnimateText> YEAR</AnimateText><br />Pink Edition</MainHeading>
                                <SmallHeading textAlign="center" fontWeight={300}>
                                    The all in one bundle for 2022
                                </SmallHeading>
                            </Block>
                            <Block padding="10px 0px 0px 0px">
                                <Flex justifyContent="center" >
                                    <BundlePrice slug={slug} />
                                </Flex>
                            </Block>
                        </Col>
                        <Col lg={8} lgOffset={2}>
                            <ResponsiveImage
                                image={require("./images/pinkbundle.png?resize")}
                                alt="Bundle 2021"
                            />
                        </Col> */}
                    </Row>
                </Container>
            </Block>
            <FreeInclusions images={images} slug={slug} />
            <Flex justifyContent="center" padding="0px 0px 45px 0px">
                <BundlePrice slug={slug} />
            </Flex>
            <InterSec />
            {/* <Block padding="35px 0px">
                <Container>
                    <Block padding="0px 10px 30px 10px">
                        <H2 weight={400} textAlign="center">
                            So, is it true that all my happy goodies are bundled together?{" "}
                        </H2>
                        <P textAlign="center">
                            Yup, it is!! Check out what comes with the bundle!!
                        </P>
                    </Block>
                    <Flex justifyContent="center" padding="0px 0px 15px 0px">
                        <BundlePrice slug="bundle-2021"/>
                    </Flex>
                </Container>
            </Block>
            <BundleItem
                title="Let's Goal 2021 + All free Inclusions"
                image={require("./images/lets-goal.jpg?resize")}
            >
                <P color="#00A80B" fontSize="14px">
                    Free Inclusions: The Ultimate Sticker Book, Pop Socket,
                    Bookmarks(2), Ikigai WorkSheets, Postcards and a
                    Protective Keepsake box
                </P>
                <BundleP>
                    This awesome all-in-one Goal Planner helps you plan and
                    track your everyday stuff without a Hitch!
                </BundleP>
                <Flex justifyContent="flex-end">
                    <ProductLink slug="lets-goal-2021-planner">
                        <Txt textDecor="underline">
                            View Let&apos;s Goal 2021
                        </Txt>
                    </ProductLink>
                </Flex>
            </BundleItem>
            <BundleItem
                title="A Wall Calendar"
                image={require("./images/wall-calendar.jpg?resize")}
            >
                <BundleP>
                    This Pretty Wall Calendar &apos;Senorita&apos; is designed
                    with beautiful Illustrated quotes! You can plan your dates
                    and appointments too! Have a great Year ahead Chicas!
                </BundleP>
            </BundleItem>
            <BundleItem
                title="A Desk Calendar"
                image={require("./images/desk-calendar.jpg?resize")}
            >
                <BundleP>
                    A cute Desk accessory + fun Illustrations for 12 months!
                </BundleP>
            </BundleItem>
            <BundleItem
                title="A Pocket Planner"
                image={require("./images/pocket-planner.jpg?resize")}
            >
                <BundleP>
                    A mini Planner to fit anywhere! Carry this uber-cool pocket
                    planner on the go! A peek into your events, appointments and
                    to do&apos;s and cross em&apos; all!
                </BundleP>
            </BundleItem>
            <BundleItem
                title="A Jot Book/Notebook"
                image={require("./images/jot-book.jpg?resize")}
            >
                <BundleP>
                    A dotted notebook for your creativity overflow! Brainstorm
                    your brains out!
                </BundleP>
            </BundleItem>
            <BundleItem
                title="Greeting Cards (6)"
                image={require("./images/greeting-cards.jpg?resize")}
            >
                <BundleP>
                    6 fun illustrated greetings for your constants!
                </BundleP>
            </BundleItem>
            <BundleItem
                title="Tote Bag"
                mathIcon={"="}
                image={require("./images/tote-bag.jpg?resize")}
            >
                <BundleP>
                    Who doesn&apos;t need a cool tote?
                    <br />
                    from groceries to laptops, carry em&apos; all and go
                    plastic-free!
                </BundleP>
            </BundleItem> */}
            {/* <Block padding="20px 0px">
                <Container>
                    <BundlePrice slug="bundle-2021"/>
                </Container>
            </Block> */}
        </>
    );
};

export default Bundle;
