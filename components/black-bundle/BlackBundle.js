import React, { useEffect } from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2, H1, H4 } from "../styled/Headings";
import P from "../styled/P";
import { InterSec } from "../styled/Hr";
import Flex from "../styled/Flex";

import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";
import ProductLink from "../product/ProductLink";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import AnimateText from "../styled/AnimateText";
import BundlePrice from "../bundle/BundlePrice";
import FreeInclusions from "../lets-goal-2021/FreeInclusions";
import { useProdCountry } from "../common/CountryLink";
import { eventOnProductDetailPage } from "../../utils/analytics";
import useProduct from "../../hooks/redux/product/useProduct";

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
const slug = "ultimate-bundle-2022-black";

const BlackBundle = () => {
    const product = useProduct(slug);

    const productCountry = useProdCountry(product?.product_country)

    useEffect(() => {
        if (productCountry && productCountry.country) eventOnProductDetailPage([product?.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
    return (
        <>
            <Block padding="10px 0px 20px 0px">
                <Container>
                    <Row alignItems="center">
                        <Col xl={6} lg={6} sm={6} xs={12} className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            <ResponsiveHeight>
                                <ResponsiveImage
                                    image={require("../black-planner/images/Plannerblack.png?resize")}
                                />
                            </ResponsiveHeight>
                        </Col>
                        <Col xl={6} lg={6} sm={6} xs={12}>
                            <MainHeading className="text-center text-sm-start">
                            + 18 exciting <AnimateText>Freebies.</AnimateText> <br />Black Edition
                                {/* <br /> */}
                            </MainHeading>

                            <SmallHeading className="text-center text-sm-start">The all in one bundle for 2027
                            </SmallHeading>
                            <Block padding="10px 0px 0px 0px">
                                <Flex justifyContent="start" className="justify-content-center justify-content-sm-start" >
                                    <BundlePrice slug="ultimate-bundle-2022-black" />
                                </Flex>
                            </Block>
                        </Col>
                        <Col lg={6} sm={6} xs={12} className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
                            <ResponsiveImage
                                image={require("../black-planner/images/Plannerblack.png?resize")}
                            />
                        </Col>

                        {/* <Col lg={10} lgOffset={1} className="pb-4">
                            <Block padding="10px 0px">
                                <MainHeading textAlign="center" >A BUNDLE OF JOY FOR A NEW <AnimateText> YEAR</AnimateText><br />Black Edition</MainHeading>
                                <SmallHeading textAlign="center" fontWeight={300}>
                                    The all in one bundle for 2022
                                </SmallHeading>
                            </Block>

                            <Block padding="10px 0px 0px 0px">
                                <Flex justifyContent="center" >
                                    <BundlePrice slug="ultimate-bundle-2022-black" />
                                </Flex>
                            </Block>
                        </Col>
                        <Col lg={8} lgOffset={2}>
                            <ResponsiveImage
                                image={require("./images/Blackbundle.png?resize")}
                                alt="Bundle 2021"
                            />
                        </Col> */}

                    </Row>
                </Container>
            </Block>
            <FreeInclusions images={images} slug={slug} />
            <Flex justifyContent="center" padding="0px 0px 45px 0px">
                <BundlePrice slug="ultimate-bundle-2022-black" />
            </Flex>
            <InterSec />

        </>
    );
};

export default BlackBundle;
