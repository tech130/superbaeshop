import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Picture from "../common/Picture";
import { H2, H1, H6, H5, H4 } from "../styled/Headings";
import P from "../styled/P";
import Flex from "../styled/Flex";
import BundlePrice from "./BundlePrice";

const notepadSet = require("./images/notepad.png?resize&sizes[]=350&sizes[]=720&sizes[]=1080");
const medicalSet = require("./images/medical.png?resize&sizes[]=350&sizes[]=720&sizes[]=1080");

const Bundle = () => {
    return (
        <>
            <Block padding="10px 0px 40px 0px">
                <Container>
                    <Row>
                        <Col lg={6} lgOffset={3}>
                            <Picture
                                fluid
                                src={notepadSet.src}
                                srcSet={notepadSet.srcSet}
                            />
                        </Col>
                        <Col lg={8} lgOffset={2}>
                            <Block padding="10px 0px">
                                <H1 mb="0px">A BUNDLE OF JOY FOR A NEW YEAR</H1>
                                <P fontWeight={300}>
                                    The all in one bundle for 2021
                                </P>
                            </Block>
                            <Flex justifyContent="flex-end">
                                <BundlePrice />
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <Block padding="35px 0px">
                <Block padding="0px 0px 30px 0px">
                    <H2 textAlign="center">
                        So, its all my happiness bundled together?{" "}
                    </H2>
                    <P textAlign="center">
                        Yup, it is!! Check out what comes with the bundle!!
                    </P>
                </Block>
                <Flex justifyContent="center" padding="0px 0px 15px 0px">
                    <BundlePrice />
                </Flex>
            </Block>
            <Block padding="35px 0px" bgColor="#FAFAFA">
                <Container>
                    <Row alignItems="center">
                        <Col lg={5}>
                            <H4>A Wall Calendar</H4>
                            <P fontSize="18px">
                                Plus you can find some exciting BULLET JOURNAL
                                Inspired spreads and amazing planner goodies!
                            </P>
                        </Col>
                        <Col lgOffset={2} lg={5}>
                            <Picture
                                fluid
                                src={medicalSet.src}
                                srcSet={medicalSet.srcSet}
                            />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    );
};

export default Bundle;
