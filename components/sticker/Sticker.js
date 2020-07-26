import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Picture from "../common/Picture";
import { H2, H1, H4 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import { InterSec } from "../styled/Hr";
import StickerPrice from "./StickerPrice";
import Dot from "../styled/Dot";
import Txt from "../styled/Txt";
import ProductPrice from "../product/ProductPrice";

const notepadSet = require("./images/notepad.jpg?resize&sizes[]=350&sizes[]=720&sizes[]=1080");
const twoSet = require("./images/2.jpg?resize&sizes[]=350&sizes[]=720&sizes[]=1080");
const medicalSet = require("./images/medical.png?resize&sizes[]=350&sizes[]=720&sizes[]=1080");

const productId = 4;

const Sticker = () => {
    return (
        <>
            <Block padding="35px 0px">
                <Container>
                    <H1 mb="0px" textAlign="center">
                        THE ULTIMATE STICKER BOOK
                    </H1>
                    <P textAlign="center">is here.</P>
                    <Row>
                        <Col lg={4}>
                            <Picture
                                fluid
                                src={twoSet.src}
                                srcSet={twoSet.srcSet}
                            />
                        </Col>
                        <Col lg={4}>
                            <Picture
                                fluid
                                src={notepadSet.src}
                                srcSet={notepadSet.srcSet}
                            />
                        </Col>
                        <Col lg={4}>
                            <Picture
                                fluid
                                src={twoSet.src}
                                srcSet={twoSet.srcSet}
                            />
                        </Col>
                    </Row>
                </Container>
                <Flex vertical alignItems="center" padding="40px 0px 0px 0px">
                    <H2 mb="15px">A THOUSAND STICKERS TO CHERISH</H2>
                    <StickerPrice />
                </Flex>
            </Block>
            <InterSec />
            <Block padding="35px 0px">
                <Block padding="0px 10px 30px 10px">
                    <H2 weight={400} textAlign="center">
                        Is it true that this book has 1000 stickers?
                    </H2>
                    <P textAlign="center">
                        Yes. The first sticker book to have a thousand stickers
                        in it.
                    </P>
                </Block>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Picture
                                src={medicalSet.src}
                                srcSet={medicalSet.srcSet}
                            />
                        </Col>
                        <Col md={4}>
                            <Flex
                                margin="0px 0px 15px 0px"
                                vertical
                                alignItem="stretch"
                            >
                                <Dot />
                                <P fontSize="18px" margin="0px 0px 5px 0px">
                                    Book Type
                                </P>
                                <P>
                                    Classic Hardcover with rose gold foil
                                    accents.
                                </P>
                            </Flex>
                            <Flex
                                bg="#C6E1F1"
                                vertical
                                margin="0px 0px 15px 0px"
                                alignItem="stretch"
                            >
                                <Dot bg="#FFE7EF" />
                                <P fontSize="18px" margin="0px 0px 5px 0px">
                                    Product Price
                                </P>
                                <P>
                                    <div>
                                        <ProductPrice id={productId} />
                                    </div>
                                    <div>
                                        <ProductPrice
                                            id={productId}
                                            type="original_price"
                                        />
                                    </div>
                                </P>
                            </Flex>
                            <Flex
                                vertical
                                margin="0px 0px 15px 0px"
                                alignItem="stretch"
                            >
                                <Dot bg="#C6E1F1" />
                                <P fontSize="18px" margin="0px 0px 5px 0px">
                                    Dimensions
                                </P>
                                <P>
                                    Width-18.5 cm
                                    <br /> Height - 23.5 cm
                                </P>
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    );
};

export default Sticker;
