import React from "react";
import Layout from "../../components/layout/Layout";
import { H4 } from "../../components/styled/Headings";
import { Container, Row, Col ,Img} from "styled-bootstrap-grid";
import Block from "../../components/styled/Block";
import styled from "styled-components";
import CalenderIcon from "../icons/CalenderIcon";
import HamIcon from "../icons/HamIcon";
import OrderIcon from "../icons/OrderIcon";
import ThrashIcon from "../icons/ThrashIcon";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";
const AffiliatesComponent = () => {
   
    const GoodVibes = styled.div`
    width: 100%;
    height: 650px;
    margin-bottom: 10px;
    padding: 75px 30px 0px 30px;
    background-color: white;
    border-radius: 8px;
    .outlineVibe{
        display: flex;
        align-items: center;
        flex-direction: column;
        span{
            width: 60px;
            display: inline-block;
        }
    }
    @media (max-width: 1200px) {
        height:560px;
    }
    @media (max-width: 975px) {
        height:460px;
        padding: 35px 15px 0px 15px;
    }
    @media (max-width: 750px) {
        height: 350px;
        padding: 35px 15px 0px 15px;
        margin-bottom: 30px;
    }
    
`;
const StandardHeight = styled.div`
    width: 100%;
    height: 650px;
    @media (max-width: 1200px) {
        height:560px;
    }
    @media (max-width: 975px) {
        height:460px;
    }
`;
    const OutLine = styled.div`
    border-radius: 8px;
    width: 100%;
    height: ${(props)=> props.height || '100%'}; 
    margin: ${(props)=> props.margin || '0px'}; 
    
    overflow: hidden;
`;
    const imageSection = styled.div`
    border-radius: 8px;
    width: 100%;
    
`;
    const PerksSection = styled.div`
    border-radius: 8px;
    width: 100%;
    background-color: white;
    padding : 30px 30px;
    height: 100%;
    ul{
        list-style: none;
        li{
            margin-bottom: 5px;
            span{
                margin-right:10px;
            }
        }
    }
    @media (max-width: 975px) {
        padding : 15px 15px;
        li{
            font-size:16px;
            margin-bottom: 3px;
        }
    }
`;
    const Heading = styled.div`
    font-size: 24px;
    font-weight: 700;
    padding: ${(props)=>props.padding||"0px"};
    @media (max-width: 975px) {
        font-size: 20px;
    }
    
`;
    const SmallHeading = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: gray;
    margin-bottom: 30px;
    @media (max-width: 975px) {
        font-size: 16px;
    }
`;
    const GetStartd = styled.button`
    font-size:20px;
    color: white;
    font-weight: 700;
    background-color: black;
    padding: 10px 55px;
    border-radius: 30px;
    @media (max-width: 975px) {
        font-size: 18px;
        padding: 8px 45px;
    }
`;
    

    return (
        // <Layout>
        <Block bgColor="#f5f6f9" padding="65px 0px">
            <Container>
                <Row>
                    <Col sm={12} md={5}  lg={5}>
                       <GoodVibes>
                            <div className="outlineVibe">
                                <span>
                                <img
                                    src={`/images/logo-small.png`}
                                    alt="space and beauty logo"
                                />
                                </span>
                                <Heading padding="40px 30px">
                                Good Vibes Tribe
                                </Heading>
                                <SmallHeading>
                                 Youve been invited to receive free products, exclusive discounts,  and join our Vibrants community. 
                                </SmallHeading>
                                <GetStartd>
                                    Get Started
                                </GetStartd>
                            </div>
                       </GoodVibes>
                    </Col>
                    <Col xs={7} sm={6} md={4} lg={4}>
                        <StandardHeight>
                        <OutLine height="calc(60% - 30px)" margin="0px 0px 30px 0px">
                            <imageSection>
                                <img src={Image1} />
                            </imageSection>
                        </OutLine>
                        <OutLine height="40%" margin="0px">

                            <PerksSection >
                                <Heading padding="0px 0px 20px 0px">
                                    The Perks:
                                </Heading>
                                <ul>
                                    <li>
                                        <span>
                                            <CalenderIcon size={18}/>
                                        </span>
                                        Free Products
                                    </li>
                                    <li>
                                        <span>
                                            <HamIcon size={18} />
                                        </span>
                                        Exclusive Discounts
                                    </li>
                                    <li>
                                        <span>
                                            <OrderIcon size={18} />
                                        </span>
                                        Express Shipping
                                    </li>
                                    <li>
                                        <span>
                                            <ThrashIcon size={18}/>
                                        </span>
                                        Referral Program
                                    </li>
                                </ul>
                            </PerksSection>
                        </OutLine>
                        </StandardHeight>
                    </Col>
                    <Col xs={5} sm={6} md={3}  lg={3}>
                    <StandardHeight>
                        <OutLine height="calc(50% - 60px)" margin="30px 0px 30px 0px">
                            <imageSection>
                                <img src={Image2} />
                            </imageSection>
                        </OutLine>
                        <OutLine height="calc(50% - 30px)" margin="0px 0px 30px 0px">
                            <imageSection>
                                <img src={Image3} />
                            </imageSection>
                        </OutLine>
                       
                        </StandardHeight>
                    </Col>
                </Row>
            </Container>
        </Block>
    // </Layout>
    );
};

export default AffiliatesComponent;