import React from "react";
import Block from "../styled/Block";
import { Container,Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import Flex from "../styled/Flex";
import AnimateText from "../styled/AnimateText";
import BgImage from './images/below-freebee/1.jpg';

const MainCaption = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.1;
`;
const OutLine = styled.div`
    background-image: url(${BgImage});
    background-position:center;
  background-position: center;
  background-size: 90% auto;
  width: 100%;
  padding:20px 0px;
  height:680px;
`;

const SmallHeading = styled.div`
  font-size: 24px;
  line-height: 1.1;
  font-weight: ${(props) => props.fontWeight || 500};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

const Freebies = () => {
    return (
        <Block  padding="0px 15px" margin="0px 0px ">
            <Row>
            <Container fluid>
            <Row>
                <OutLine>
                <Flex vertical alignItems="center" margin="1rem 0">
                    <MainCaption>The Freebies are so <AnimateText> cool!</AnimateText></MainCaption>
                    <SmallHeading>And they are all yours
                    </SmallHeading>
                </Flex>
                {/* <ResponsiveImage
                    image={require("./images/below-freebee/1.jpg?resize")}
                /> */}
                </OutLine>
          </Row>
            </Container>
          </Row>
        </Block>
    );
};

export default Freebies;
