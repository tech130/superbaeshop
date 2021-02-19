import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import P from "../styled/P";
import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";

const ColorBoxStyl = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    background-color: ${(props) => props.bg || "#fddecb"};
    margin-bottom: 25px;
    margin-top: 75px;
    min-height: 200px;
`;

const ColorBoxImg = styled.div`
    margin-top: -75px;
`;

const ColorBoxContent = styled.div`
    margin-top: auto;
    padding: 15px;
`;

const ColorBox = ({ bg, children, image = {} }) => {
    return (
        <Col md={4}>
            <ColorBoxStyl bg={bg}>
                {image.src && (
                    <ColorBoxImg>
                        <ResponsiveImage image={image} />
                    </ColorBoxImg>
                )}
                <ColorBoxContent>{children}</ColorBoxContent>
            </ColorBoxStyl>
        </Col>
    );
};

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
                    <ColorBox
                        image={require("./images/free-inclusions/ikkigai-min.png?resize")}
                    >
                        <b>Ikigai work sheets</b> that helps you to find your
                        true purpose.
                    </ColorBox>
                    {/* <ColorBox
                        bg="#FFE7EF"
                        image={require("./images/free-inclusions/sticker-book-min.png?resize")}
                    >
                        <b>A Sticker Book</b> With a &quot;1000&quot;, a.k.a
                        THOUSAND, Stickers in it.
                    </ColorBox> */}
                    <ColorBox
                        bg="#C6E1F1"
                        image={require("./images/free-inclusions/post-card-min.png?resize")}
                    >
                        Share your love through a happy mail with this fun{" "}
                        <b>Post Card</b>
                    </ColorBox>
                    <ColorBox
                        bg="#D9E7EB"
                        image={require("./images/free-inclusions/pop-socket-min.png?resize")}
                    >
                        A <b>Pop socket</b> to stick your phone to your fingers.
                    </ColorBox>
                    <ColorBox
                        bg="#FDDEDF"
                        image={require("./images/free-inclusions/bookmarks-min.png?resize")}
                    >
                        <b>Bookmarks.</b> You need this. I am bored of writing
                        more fancy content.
                    </ColorBox>
                </Row>
            </Container>
        </Block>
    );
};

export default FreeInclusions;
