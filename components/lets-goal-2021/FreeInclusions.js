import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import styled from "styled-components";

const ColorBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    flex-direction: column;
    padding: 15px;
    background-color: ${(props) => props.bg || "#fddecb"};
    margin-bottom: 25px;
    min-height: 200px;
`;

const FreeInclusions = () => {
    return (
        <Block padding="50px 0px">
            <Container>
                <Block padding="0px 0px 15px 0px">
                    <H2 textAlign="center" mb="0px">
                        Free Inclusions
                    </H2>
                    <P textAlign="center">
                        What makes Let&apos;s Goal 2021, Extra Special
                    </P>
                </Block>
                <Row justifyContent="center">
                    <Col md={4}>
                        <ColorBox>
                            <div>
                                <b>Ikigai work sheets</b> that helps you to find
                                your true purpose.
                            </div>
                        </ColorBox>
                    </Col>
                    <Col md={4}>
                        <ColorBox bg="#FFE7EF">
                            <div>
                                <b>A Sticker Book</b> With a &quot;1000&quot;,
                                a.k.a THOUSAND, Stickers in it.
                            </div>
                        </ColorBox>
                    </Col>
                    <Col md={4}>
                        <ColorBox bg="#C6E1F1">
                            <div>
                                A <b>Protective Wrapper Box</b> to keep your
                                stuffs safe and warm.
                            </div>
                        </ColorBox>
                    </Col>
                    <Col md={4}>
                        <ColorBox bg="#D9E7EB">
                            <div>
                                <b>Washitapes (2)</b> to make your planner more
                                beautiful and to make you smile.
                            </div>
                        </ColorBox>
                    </Col>
                    <Col md={4}>
                        <ColorBox bg="#FDDEDF">
                            <div>
                                <b>Bookmarks.</b> You need this. I am bored of writing
                                more fancy content.
                            </div>
                        </ColorBox>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default FreeInclusions;
