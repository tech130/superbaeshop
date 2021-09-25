import React from "react";
import Block from "../styled/Block";
import { Container } from "styled-bootstrap-grid";

import ResponsiveImage from "../common/ResponsiveImage";


const Freebies = () => {
    return (
        <Block padding="45px 0">
            <Container>
                <ResponsiveImage
                    image={require("./images/below-freebee/1.jpg?resize")}
                />
            </Container>
        </Block>
    );
};

export default Freebies;
