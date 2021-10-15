import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Flex from "../styled/Flex";
import AnimateText from "../styled/AnimateText";
import ResponsiveImage from "../common/ResponsiveImage";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";

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
    width: ${(props) => props.width || '100px'};
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    position: absolute;
    top: ${(props) => props.top || '0'};
    left:  ${(props) => props.left || '0'};
    @media (max-width: 576px) {
        width: 70px;
        height: auto;
        left: 10px;
        top: ${(props) => props.restop || props.top};
      }
`;
const NewFreeRight = styled.div`
    width: ${(props) => props.width || '100px'};
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    position: absolute;
    top: ${(props) => props.top || '0'};
    right:  ${(props) => props.right || '0'};
    @media (max-width: 576px) {
        width: 70px;
        height: auto;
        right: 10px;
        top: ${(props) => props.restop || props.top};
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
                    {/* <OutLine>

                            <Row alignItems="center">
                                <Col lg={3} xs={3} sm={3} md={3}>
                                    <AlignItems mb="40" justify="end">
                                        // <div
                                        //     data-aos="fade-right"
                                        //     data-aos-delay="700"
                                        //     data-aos-duration="500"
                                        // > 
                                        <LeftDiv>
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/2.jpeg?resize")}
                                            />
                                        </LeftDiv>
                                        // </div> 
                                    </AlignItems>
                                </Col>
                                <Col lg={6} xs={6} sm={6} md={6} className="">
                                    <OuterSpace>
                                        <NewFreetop width="100px" top="40px" left="15%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/8.jpeg?resize")}
                                            />
                                        </NewFreetop>
                                        <NewFreeRight width="170px" top="20px" right="12%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/19.png?resize")}
                                            />
                                        </NewFreeRight>
                                    </OuterSpace>
                                </Col>
                                <Col lg={3} xs={3} sm={3} md={3} className="">
                                    <AlignItems justify="start" mb="40">
                                       
                                        <LeftDiv>
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/NOTES.png?resize")}
                                            />
                                        </LeftDiv>
                                    </AlignItems>

                                </Col>
                            </Row>
                            <Row alignItems="center">
                                <Col lg={2} xs={2} sm={2} md={2}  >
                                  
                                    <OuterSpace>

                                        <NewFreeRight width="200px" top="-12px" right="5%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/9.png?resize")}
                                            />
                                        </NewFreeRight>
                                    </OuterSpace>
                                </Col>
                                <Col lg={8} xs={8} sm={8} md={8} className="">
                                    <Flex vertical alignItems="center" margin="1rem 0">
                                        
                                        <MainHeading textAlign="center">The Freebies are so <AnimateText> cool!</AnimateText></MainHeading>

                                        <SmallHeading textAlign="center" >
                                            And they are all yours
                                        </SmallHeading>

                                    </Flex>
                                </Col>
                                <Col lg={2} xs={2} md={2} sm={2} className="">
                                   
                                    <NewFreetop width="140px" top="0px" left="1%">
                                        <ResponsiveImage
                                            image={require("./images/below-freebee/21.png?resize")}
                                        />
                                    </NewFreetop>
                                </Col>
                            </Row>
                            <Row alignItems="start">
                                <Col lg={4} xs={3} sm={2} md={3} >
                                   
                                    <OuterSpace>
                                        <NewFreeRight restop="0px" width="160px" top="30px" right="25%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/11.png?resize")}
                                            />
                                        </NewFreeRight>

                                    </OuterSpace>
                                </Col>
                                <Col lg={4} xs={6} sm={7} md={6} className="">
                                    <OuterSpace>
                                        <NewFreetop width="230px" top="25px" left="-10%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/17.jpeg?resize")}
                                            />
                                        </NewFreetop>
                                        <NewFreeRight restop="-10px" width="140px" top="-10px" right="10px">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/22.png?resize")}
                                            />
                                        </NewFreeRight>
                                    </OuterSpace>
                                    <AlignItems mb="40" justify="center">

                                        <LeftDiv>
                                            
                                        </LeftDiv>
                                    </AlignItems>
                                </Col>
                                <Col lg={4} xs={3} sm={3} md={3} className="">
                                    <AlignItems justify="start" mb="40">
                                      
                                        <LeftDiv>
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/NOTEBOOK.png?resize")}
                                            />
                                        </LeftDiv>
                                    </AlignItems>
                                    <OuterSpace>
                                        <NewFreeRight restop="15px" width="160px" top="-40px" right="10%">
                                            <ResponsiveImage
                                                image={require("./images/below-freebee/GREETING CARD.png?resize")}
                                            />
                                        </NewFreeRight>

                                    </OuterSpace>
                                </Col>
                            </Row>


                        </OutLine>
                        */}
                    </Row>
                </Container>
            </Row>
        </Block>
    );
};

export default Freebies;
