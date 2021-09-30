import React from "react";
import Block from "../styled/Block";
import { Container } from "styled-bootstrap-grid";
import styled from "styled-components";
import Flex from "../styled/Flex";
import ResponsiveImage from "../common/ResponsiveImage";

const MainCaption = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
`;

const SmallHeading = styled.div`
  font-size: 28px;
  line-height: 1.1;
  font-weight: ${(props) => props.fontWeight || 500};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

const Freebies = () => {
    return (
        <Block padding="45px 0">
            <Container>
            <Flex vertical alignItems="center" margin="2rem 0">
                <MainCaption>The Freebies are so cool!</MainCaption>
                <SmallHeading>And they are all yours
</SmallHeading>
                </Flex>
                <ResponsiveImage
                    image={require("./images/below-freebee/1.jpg?resize")}
                />
            </Container>
        </Block>
    );
};

export default Freebies;
