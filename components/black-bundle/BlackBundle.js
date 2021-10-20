import React from "react";
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

const images=[
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    './images/free-inclusions/Scrunchy.jpg',
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
    './images/ultimate-bundle/Desk.jpg',
            './images/ultimate-bundle/Wall.jpg',
            './images/ultimate-bundle/weekly.jpg',
            './images/ultimate-bundle/Newlaptop.jpg',
            './images/ultimate-bundle/Slam.jpg'
]
const slug="ultimate-bundle-2022-black";

const BlackBundle = () => {
    return (
        <>
            <Block padding="10px 0px 20px 0px">
                <Container>
                    <Row>
                        <Col lg={8} lgOffset={2} className="pb-5">
                            <Block padding="10px 0px">
                            <Block padding="10px 0px">
                                <MainHeading>A BLACK BUNDLE OF JOY FOR A NEW <AnimateText> YEAR</AnimateText></MainHeading>
                                <SmallHeading fontWeight={300}>
                                    The all in one bundle for 2022
                                </SmallHeading>
                            </Block>
                            </Block>
                            <Flex justifyContent="flex-end">
                                <BundlePrice slug="ultimate-bundle-2022-black"/>
                            </Flex>
                        </Col>
                        <Col lg={6} lgOffset={3}>
                            <ResponsiveImage
                                image={require("../bundle/images/cover-pic.png?resize")}
                                alt="Bundle 2021"
                            />
                        </Col>
                        
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
