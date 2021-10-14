import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Flex from "../styled/Flex";
import AnimateText from "../styled/AnimateText";
import BgImage from './images/below-freebee/1.jpg';

import ResponsiveImage from "../common/ResponsiveImage";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
const MainCaption = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
`;
// background-image: url(${BgImage});
const OutLine = styled.div`
    background-position:center;
  background-position: center;
  background-size: 90% auto;
  width: 100%;
  padding:60px 15px 40px 15px;
  height:100%;
  background:white;
  overflow: hidden;
`;

// const SmallHeading = styled.div`
//   font-size: 24px;
//   line-height: 1.1;
//   font-weight: ${(props) => props.fontWeight || 500};
//   margin-top: ${(props) => props.marginTop || 0};
//   margin-bottom: ${(props) => props.marginBottom || 0};
// `;
const LeftDiv = styled.div`
    width: 160px;
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 576px) {
        width: 75px;
    height: 75px;
      }
`;
const LeftDivSmall = styled.div`
    width: 100px;
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 576px) {
        width: 45px;
    height: 45px;
      }
`;
const NewFreetop = styled.div`
    width: ${(props)=>props.width||'100px'};
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    position: absolute;
    top: ${(props)=>props.top||'0'};
    left:  ${(props)=>props.left|| '0'};
    @media (max-width: 576px) {
        width: 70px;
        height: auto;
        left: 10px;
        top: ${(props)=>props.restop||props.top};
      }
`;
const NewFreeRight = styled.div`
    width: ${(props)=>props.width||'100px'};
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    position: absolute;
    top: ${(props)=>props.top||'0'};
    right:  ${(props)=>props.right|| '0'};
    @media (max-width: 576px) {
        width: 70px;
        height: auto;
        right: 10px;
        top: ${(props)=>props.restop||props.top};
      }
`;
const AlignItems = styled.div`
    justify-content: ${(props) => props.justify || 'center'};
    display: flex;
    
    // margin-bottom: ${(props) => props.mb}px;

`;
const OuterSpace = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 100px;

`;


const Freebies = () => {
    return (
        <Block padding="0px 15px" margin="65px 0px 0px 0px" className="overflow-hiden">
            <Row>
                <Container fluid>
                    <Row>
                        <OutLine>

                            <Row alignItems="center">
                                <Col lg={3} xs={3} sm={3} md={3}>
                                    <AlignItems mb="40" justify="end">
                                        {/* <div
                                            data-aos="fade-right"
                                            data-aos-delay="700"
                                            data-aos-duration="500"
                                        > */}
                                            <LeftDiv>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/2.jpeg?resize")}
                                                />
                                            </LeftDiv>
                                        {/* </div> */}
                                    </AlignItems>
                                </Col>
                                <Col lg={6} xs={6} sm={6} md={6} className="">
                                <OuterSpace>
                                    <NewFreetop width="130px" top="40px" left="15%">
                                        <ResponsiveImage
                                                    image={require("./images/below-freebee/8.jpeg?resize")}
                                                />
                                    </NewFreetop>
                                    <NewFreeRight width="140px" top="0px" right="12%">
                                        <ResponsiveImage
                                                    image={require("./images/below-freebee/19.png?resize")}
                                                />
                                    </NewFreeRight>
                                </OuterSpace>
                                </Col>
                                <Col lg={3} xs={3} sm={3} md={3} className="">
                                    <AlignItems justify="center" mb="40">
                                        {/* <div
                                            data-aos="fade-left"
                                            data-aos-delay="2000"
                                            data-aos-duration="500"
                                        > */}
                                            <LeftDiv>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/10.png?resize")}
                                                />
                                            </LeftDiv>
                                        {/* </div> */}
                                    </AlignItems>
                                    
                                </Col>
                            </Row>
                            <Row alignItems="center">
                                <Col lg={2} xs={2} sm={2} md={2}  >
                                    {/* <AlignItems justify="end" mb="40">
                                       
                                            <LeftDivSmall>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/17.jpeg?resize")}
                                                />
                                            </LeftDivSmall>
                                    </AlignItems> */}
                                    <OuterSpace>
                                    
                                    <NewFreeRight width="140px" top="0px" right="1%">
                                        <ResponsiveImage
                                                    image={require("./images/below-freebee/17.jpeg?resize")}
                                                />
                                    </NewFreeRight>
                                </OuterSpace>
                                </Col>
                                <Col lg={8} xs={8} sm={8} md={8} className="">
                                    <Flex vertical alignItems="center" margin="1rem 0">
                                        {/* <div data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="500"
                                            data-aos-delay="100"
                                        > */}
                                            <MainHeading textAlign="center">The Freebies are so <AnimateText> cool!</AnimateText></MainHeading>

                                        {/* </div> */}
                                        {/* <div data-aos="fade-zoom-in"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay="300"
                                            data-aos-duration="500"
                                            data-aos-offset="0"
                                        > */}
                                            <SmallHeading textAlign="center" >
                                                And they are all yours
                                            </SmallHeading>

                                        {/* </div> */}
                                    </Flex>
                                </Col>
                                <Col lg={2} xs={2} md={2} sm={2} className="">
                                    {/* <AlignItems justify="start" mb="40">
                                      
                                            <LeftDivSmall>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/15.jpeg?resize")}
                                                />
                                            </LeftDivSmall>
                                    </AlignItems> */}
                                    <NewFreetop width="140px" top="0px" left="1%">
                                        <ResponsiveImage
                                                    image={require("./images/below-freebee/21.png?resize")}
                                                />
                                    </NewFreetop>
                                </Col>
                            </Row>
                            <Row alignItems="center">
                                <Col lg={4} xs={3} sm={3} md={3} >
                                    {/* <AlignItems justify="end" mb="40">
                                        
                                            <LeftDiv>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/11.png?resize")}
                                                />
                                            </LeftDiv>
                                    </AlignItems> */}
                                    <OuterSpace>
                                        <NewFreeRight restop="0px"  width="160px" top="30px" right="25%">
                                            <ResponsiveImage
                                                        image={require("./images/below-freebee/11.png?resize")}
                                                    />
                                        </NewFreeRight>
                                        
                                    </OuterSpace>
                                </Col>
                                <Col lg={4} xs={6} sm={6} md={6} className="">
                                    <OuterSpace>
                                        <NewFreetop width="160px" top="0px" left="-10%">
                                            <ResponsiveImage
                                                        image={require("./images/below-freebee/9.png?resize")}
                                                    />
                                        </NewFreetop>
                                        <NewFreeRight width="125px" top="-20px" right="10px">
                                            <ResponsiveImage
                                                        image={require("./images/below-freebee/16.jpeg?resize")}
                                                    />
                                        </NewFreeRight>
                                    </OuterSpace>
                                    <AlignItems mb="40" justify="center">
                                        
                                            <LeftDiv>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/22.png?resize")}
                                                />
                                            </LeftDiv>
                                    </AlignItems>
                                </Col>
                                <Col lg={4} xs={3} sm={3} md={3} className="">
                                    <AlignItems justify="start" mb="40">
                                        {/* <div
                                            data-aos="fade-left"
                                            data-aos-delay="1000"
                                            data-aos-duration="500"
                                        > */}
                                            <LeftDiv>
                                                <ResponsiveImage
                                                    image={require("./images/below-freebee/13.jpeg?resize")}
                                                />
                                            </LeftDiv>
                                        {/* </div> */}
                                    </AlignItems>
                                    <OuterSpace>
                                        <NewFreeRight restop="15px"  width="160px" top="-40px" right="10%">
                                            <ResponsiveImage
                                                        image={require("./images/below-freebee/23.jpeg?resize")}
                                                    />
                                        </NewFreeRight>
                                        
                                    </OuterSpace>
                                </Col>
                            </Row>


                        </OutLine>
                    </Row>
                </Container>
            </Row>
        </Block>
    );
};

export default Freebies;
