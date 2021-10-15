import React, { useRef } from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import { Container, Row, Col } from "styled-bootstrap-grid";
import MainHeading from "../styled/MainHeading";
import AnimateText from "../styled/AnimateText";

import ResponsiveImage from "../common/ResponsiveImage";

import styled from "styled-components";

const MainDiv = styled.div`
  height:250px !important;
  border-radius:10px;
  margin: 10px 0px;
  display: flex;
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
    margin: 25px 0px;
}
`;
const MainDiv2 = styled.div`
  height:100% !important;
  display: flex;
  align-items: center;
  margin: 0px 15px;
  border: 1px solid #dbcece;
  box-shadow:  1px 1px 16px 1px #efebff;
  border-radius: 20px;

  img{
    width:250px;
  }
`;



const NewFreeBies = () => {


    return (
        <Block padding="0px 0px 65px 0px" className="overflow-hidden">

            {/* <div className="d-block d-sm-none d-md-none d-lg-none d-xl-none"> */}
            <Container>
                <Flex vertical width="100%" alignItems="center" margin="0">
                    <Flex alignItems="center" margin="0px 0px 30px 0" >
                        <MainHeading textAlign="center" mb="0px">Best things in life are  <AnimateText>free </AnimateText></MainHeading>

                    </Flex>
                </Flex>
                <Row>
                    <Col lg={3}>
                        <MainDiv>
                            <MainDiv2 >

                                <ResponsiveImage
                                    image={require("./images/below-freebee/2.jpeg?resize")}
                                />

                            </MainDiv2>
                        </MainDiv>
                    </Col>
                </Row>
                {/* {scrollTexts.map((name, ind) => {
                        return (

                            <Row key={ind}>
                                {
                                    name.key.map((item, index) => {
                                        return (
                                            <Col key={index} sm={12} xs={12}>
                                                <MainDiv key={ind}>
                                                    <MainDiv2 >


                                                        <img src={item} />
                                                    </MainDiv2>
                                                </MainDiv>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>


                        );
                    })} */}
                <Flex vertical width="100%" alignItems="center" margin="0">
                    <Flex alignItems="center" margin="30px 0px 0px 0px" >
                        <ProductBuy slug={"lets-goal-2021-planner"} addition="bundle-2021" />

                    </Flex>
                </Flex>
            </Container>
            {/* </div> */}
        </Block>

    );
};



export default NewFreeBies;
