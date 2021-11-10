import React, { useEffect } from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2, H1 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import { InterSec } from "../styled/Hr";
import StickerPrice from "./StickerPrice";
import Dot from "../styled/Dot";
import { ProductPrices } from "../product/ProductPrice";
import ResponsiveImage from "../common/ResponsiveImage";
import slug from "./slug";
import AnimateText from "../styled/AnimateText";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry } from "../common/CountryLink";
import { eventOnProductDetailPage } from "../../utils/analytics";


const Sticker = () => {
    const product = useProduct(slug);

    const productCountry = useProdCountry(product.product_country)
    useEffect(() => {
        eventOnProductDetailPage([product.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
    return (
        <>
            <Block padding="35px 0px">
                <Container>
                    <MainHeading mb="0px" textAlign="center">
                        THE ULTIMATE STICKER <AnimateText> BOOK</AnimateText>
                    </MainHeading>
                    <SmallHeading textAlign="center">is here.</SmallHeading>
                    <Row>
                        <Col className="mt-5" md={8} mdOffset={2}>
                            <ResponsiveImage
                                image={require("./images/5.jpg?resize")}
                            />
                        </Col>
                    </Row>
                    <Flex
                        vertical
                        alignItems="center"
                        padding="40px 0px 0px 0px"
                    >
                        <H2 mb="15px">A THOUSAND STICKERS TO CHERISH</H2>
                        <StickerPrice />
                    </Flex>
                </Container>
            </Block>
            {/* <InterSec /> */}
            <Block padding="35px 0px">
                <Block padding="0px 10px 30px 10px">
                    <MainHeading textAlign="center">
                        Is it true that this book has 1000 <AnimateText> stickers?</AnimateText>
                    </MainHeading>
                    <SmallHeading textAlign="center">
                        Yes. The first sticker book to have a thousand stickers
                        in it.
                    </SmallHeading>
                </Block>
                <Container>
                    <Row alignItems="center">
                        <Col md={8}>
                            <Block margin="0px 0px 25px 0px">
                                <ResponsiveImage
                                    image={require("./images/sticker-book.jpg?resize")}
                                />
                            </Block>
                        </Col>
                        <Col md={4} >
                            <Flex
                                className=" d-sm-flex align-items-center d-md-block "
                                margin="0px 0px 15px 0px"
                                vertical
                                alignItem="stretch"
                            >
                                <Dot />
                                <P fontSize="18px" margin="0px 0px 5px 0px">
                                    Book Type
                                </P>
                                <P>Classic Softcover</P>
                            </Flex>
                            <Flex
                            className=" d-sm-flex align-items-center d-md-block "
                                bg="#C6E1F1"
                                vertical
                                margin="0px 0px 15px 0px"
                                alignItem="stretch"
                            >
                                <Dot bg="#FFE7EF" />
                                <P fontSize="18px" margin="0px 0px 5px 0px">
                                    Product Price
                                </P>
                                <ProductPrices slug={slug} />
                            </Flex>
                            <Flex
                            className=" d-sm-flex align-items-center d-md-block "
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
