import React from "react";
import Block from "../styled/Block";
import { Container } from "styled-bootstrap-grid";
import { H2 } from "../styled/Headings";
import styled from "styled-components";

const ProductVideo = styled.video`
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 100%;
    line-height: 0px;
`;

const WalkThrough = () => {
    return (
        <Block padding="50px 0px">
            <Container>
                <Block padding="0px 0px 25px 0px">
                    <H2 textAlign="center" mb="0px">
                        Walkthrough Video
                    </H2>
                </Block>
                <ProductVideo
                    poster="https://letsgoal2020.com/static/media/poster.5a1e6166.jpg"
                    src="https://letsgoal2020.com/static/media/promo.6fb694b6.mp4"
                    controls
                />
            </Container>
        </Block>
    );
};

export default WalkThrough;
