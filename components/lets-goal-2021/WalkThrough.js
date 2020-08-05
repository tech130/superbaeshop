import React from "react";
import Block from "../styled/Block";
import { Container } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import ResponsiveImage from "../common/ResponsiveImage";

const WalkThrough = () => {
    return (
        <Block padding="50px 0px">
            <Container>
                <Block padding="0px 0px 25px 0px">
                    <H2 textAlign="center" mb="0px">
                        Walkthrough
                    </H2>
                </Block>
                <ResponsiveImage
                    image={require("./images/walkthrough.png?resize")}
                    alt="Lets Goal 2021 - Walkthrough"
                />
            </Container>
        </Block>
    );
};

export default WalkThrough;
