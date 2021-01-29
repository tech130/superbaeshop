import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import Block from "../styled/Block";
import Button from "../styled/Button";
import { H3 } from "../styled/Headings";
import P from "../styled/P";
import Txt from "../styled/Txt";

const FeatureList = styled.ul`
    list-style: none;
    padding: 5px 0px;
    margin-left: 15px;
    margin-bottom: 5px;

    li {
        margin-bottom: 8px;
        font-size: 0.95rem;
        position: relative;
        padding-left: 20px;
    }

    li::before {
        content: "";
        position: absolute;
        top: 10px;
        left: 0;
        width: 10px;
        height: 3px;
        background-color: rgb(0 0 0 / 50%);
    }
`;

const THUMB_SIZE = 80;

const MainImgCon = styled.div`
    position: relative;
    padding-left: ${THUMB_SIZE + 15}px;
    margin-bottom: 1rem;
`;

const MainImg = styled.img`
    width: 100%;
`;

const ThumbCon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${THUMB_SIZE}px;
    height: 100%;
    overflow-y: auto;
`;

const ThumbImg = styled.img`
    display: block;
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    margin-bottom: 15px;
    border: 1px solid #eaeaea;
    line-height: 0;
`;

const Detail = () => {
    return (
        <Block padding="35px 0px">
            <Container>
                <Row>
                    <Col md={6}>
                        <MainImgCon>
                            <ThumbCon>
                                <ThumbImg src="/images/earings/3.jpeg" />
                                <ThumbImg src="/images/earings/2.jpeg" />
                                <ThumbImg src="/images/earings/5.jpeg" />
                                <ThumbImg src="/images/earings/1.jpeg" />
                            </ThumbCon>
                            <MainImg src="/images/earings/3.jpeg" alt="" />
                        </MainImgCon>
                    </Col>
                    <Col md={6}>
                        <H3 mb="5px" as="h1">
                            Squash Red Apple Earrings
                        </H3>
                        <P margin="0px 0px 10px 0px" weight={300}>
                            Feel the pleasure of hanging the real blossoming red
                            on your ear lobes
                        </P>
                        <Block margin="0px 0px 10px 0px">
                            <Txt
                                fontSize="1.7rem"
                                margin="0px 8px 0px 0px"
                                weight={600}
                            >
                                ₹100
                            </Txt>
                            <Txt
                                margin="0px 8px 0px 0px"
                                textDecor="line-through"
                                fontSize="1.2rem"
                                color="#878787"
                            >
                                ₹200
                            </Txt>
                            <Txt color="#00A80B" weight={300}>
                                (60% off)
                            </Txt>
                        </Block>
                        <P>
                            Carefully crafted and precisely sculpted
                            apple-shaped jewel perfectly aligned with shopping
                            and day-to-day outfits
                        </P>
                        <Block>
                            <Txt fontSize="1.1rem" weight={600}>
                                Features:
                            </Txt>
                        </Block>
                        <FeatureList>
                            <li>
                                A touch of color, fun and joy for your every day
                                look.
                            </li>
                            <li>The prettiest earrings got comfy as well.</li>
                        </FeatureList>

                        <Button
                            fontSize="14px"
                            padding="5px 15px"
                            block
                            border="1px solid #000"
                        >
                            ADD TO CART
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default Detail;
