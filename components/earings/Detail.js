import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import { H3 } from "../styled/Headings";
import Img from "../styled/Img";
import P from "../styled/P";
import Txt from "../styled/Txt";

const Detail = () => {
    return (
        <Block padding="35px 0px">
            <Container>
                <Row>
                    <Col md={5}>
                        <Img
                            src="https://cdn.shopify.com/s/files/1/2203/0177/products/OG_optimised_0013_Layer129-Copy_590x.jpg?v=1594303830"
                            alt=""
                        />
                    </Col>
                    <Col md={7}>
                        <H3 as="h1">The Goldie Earrings</H3>
                        <P fontSize="0.85rem">
                            The Goldie are the short, chunky earrings with
                            golden finish to shine bright with every outfit.
                        </P>
                        <Block>
                            <Txt weight={600}>Features</Txt>
                        </Block>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default Detail;
