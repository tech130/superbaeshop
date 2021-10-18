import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";

import { InterSec } from "../styled/Hr";
import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";
import ProductLink from "../product/ProductLink";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import AnimateText from "../styled/AnimateText";


const BlackBundle = () => {
    return (
        <>
            <Block padding="10px 0px 40px 0px">
                <Container>
                    <Row>
                        
                        <Col lg={8} lgOffset={2}>
                            <Block padding="10px 0px">
                            <MainHeading className="text-center text-sm-start">
                               black  <AnimateText> Bundle</AnimateText>
                            </MainHeading>
                            <SmallHeading mb="35px" weight={700} className="text-center text-sm-start">
                                Crafted just for you!
                            </SmallHeading>
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <InterSec />
            
        </>
    );
};

export default BlackBundle;
