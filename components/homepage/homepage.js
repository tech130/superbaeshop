import React, { useRef, memo } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { H1, H5, H3, H6 } from "../styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import Flex from "../styled/Flex";

import BannerSection from "./BannerSection";
// import TestimonialSection from "./TestimonialSection";
import GoodVibes from "../lets-goal-2021/GoodVibes";
import TestimonialSection from "../lets-goal-2021/TestimonialSection";
import { ProductImage } from "../product/ProductItem";
import P from "../styled/P";

const MainCaption = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const GradientText = styled.h1`
  margin-left: 1rem;
  font-size: 2rem;
  background: linear-gradient(to right, #f4edf4 0%, #eef2fa 51%, #d7bcbd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ImageCon = styled.div`
width: 250px;
height: 250px;
margin-right: 18px;
text-align: center;
background-color: transparent;
position: relative;
overflow: hidden;
border-radius: 12px;
@media only screen and (min-width: 734px) {
    width: 300px;
    height: 300px;
    margin-right: 16px;
}
`;


const HomePage = () => {
    return (
        <Container fluid>
            {/* <Row> */}
            <BannerSection dark={false}
                title={"iPhone 12"} sub_title={"Blast past fast."} desc={"From $29.12/mo. for 24 mo. or $699 before trade‑in"}
                img={"https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large.jpg"}
                img2={"https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_small_2x.jpg"} />

            <BannerSection dark={true}
                title={"iPhone 12 Pro"} sub_title={"It’s a leap year."} desc={"From $41.62/mo. for 24 mo. or $999 before trade‑in"}
                img={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"} 
                img2={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_small_2x.jpg"}/>

            <Block padding="0px" margin="0px -15px" >
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection dark={true} width={"1262px"} height={"580px"}
                                    title={"iPad Pro"} sub_title={"Supercharged by the Apple M1 chip."} desc={""}
                                    img={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_large.jpg"}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_small_2x.jpg"} />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <BannerSection dark={true} width={"1262px"} height={"580px"}
                                    title={"Apple Watch Series 6"} sub_title={"The future of health is on your wrist."} desc={""}
                                    img={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_large.jpg"}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_small_2x.jpg"} />
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <Block padding="0px" >
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection dark={false} width={"1154px"} height={"344px"}
                                    title={"Apple Fitness plus"} sub_title={"The first fitness service powered by Apple Watch. Try it for 1 month free."} desc={""}
                                    img={"https://www.apple.com/v/home/ab/images/promos/apple-fitness-plus/tile__cauwwcyyn9hy_large.jpg"} 
                                    img2={"https://www.apple.com/v/home/ab/images/promos/apple-fitness-plus/tile__cauwwcyyn9hy_small_2x.jpg"}/>
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection dark={false} width={"1262px"} height={"580px"}
                                    title={"Buy a Mac or iPad for college. Get AirPods."} sub_title={""} desc={""}
                                    img={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_large.jpg"}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_small_2x.jpg"} />
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <Block padding="35px 0px" margin="0px -15px">
                <TestimonialSection />
            </Block>
            <Block padding="35px 0px">
                <Flex vertical width="100%" alignItems="center" margin="3rem 0">
                    <Flex alignItems="center">
                        <MainCaption>Stay tuned</MainCaption>
                        <GradientText> @spaceandbeautyofficial </GradientText>
                    </Flex>
                </Flex>

                <Flex>
                    <Marquee
                        speed={70}
                        gradientWidth={10}
                        style={{
                            padding: "0.6rem 0",
                            overflow: "hidden",
                        }}
                    >
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-1_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>

                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-2_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-3_400x.jpg?v=1626276094"}
                            /> </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-4_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-5_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-6_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-7_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>
                        <ImageCon>
                            <ProductImage
                                src={"https://cdn.shopify.com/s/files/1/0535/7273/1054/files/feed-8_400x.jpg?v=1626276094"}
                            />
                        </ImageCon>

                    </Marquee>
                </Flex>


            </Block>
            <Block padding="35px 0px" >
                <GoodVibes />
                {/* <Flex
                    animationDirection="alternate"
                    animation="backgroundfade 12s ease infinite"
                    alignItems="center"
                    width="98%"
                    height="10rem"
                    padding="1.5rem 1rem"
                    borderRadius="10px"
                    bg="linear-gradient(45deg, #fff6f1, #eef7ff, #fff2f1, #fff6f1, #eef7ff, #fff2f1)"
                >
                    <Col lg={4} alignItems="center">
                        <H3 textAlign="center">IF YOU DON’T LOVE I.</H3>
                        <H6 textAlign="center">WE’LL REFUND YOU.</H6>
                    </Col>
                    <Col lg={4}>
                        <MainCaption>Good Vibes guaranteed.</MainCaption>
                    </Col>
                    <Col lg={4}>
                        <H3 textAlign="center">WE’LL TAKE CARE OF IT.</H3>
                        <H6 textAlign="center">NO QUESTIONS ASKED.</H6>
                    </Col>
                </Flex> */}
            </Block>
            {/* </Row> */}
        </Container>
    );
};



export default HomePage;
