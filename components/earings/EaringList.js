import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import { H3 } from "../styled/Headings";
import P from "../styled/P";
import EaringItem from "./EaringItem";

const EaringList = () => {
    return (
        <Block padding="35px 0px">
            <Container>
                <H3>Earings</H3>
                <P fontSize="14px">
                    Cheerful and bright just like your vibes.
                </P>
                <Row>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3}>
                        <EaringItem />
                    </Col>
                    <Col md={3} sm={6}>
                        <EaringItem />
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default EaringList;
