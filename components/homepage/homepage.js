import React, { useRef, memo } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { H1, H5, H3, H6 } from "../styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import Flex from "../styled/Flex";

import BannerSection from "./BannerSection";
import BannerSection2 from "./BannerSection2";
import GoodVibes from "../lets-goal-2021/GoodVibes";
import StayTuned from "../lets-goal-2021/StayTuned";
import TestimonialSection from "../lets-goal-2021/TestimonialSection";
import { ProductImage } from "../product/ProductItem";
import P from "../styled/P";
import workplanner from './images/workplanner.png';
import Stickerbook from './images/Stickerbook.jpeg';
import popsocket from './images/popsocket.png';
import Plannerpink from './images/Plannerpink.png';
import Plannerblack from './images/Plannerblack.png';
import laptopskin from './images/laptopskin.png';
import phonecase from './images/phonecase.jpeg';



const HomePage = () => {
    return (
        <Container fluid>
            {/* <Row> */}
            <BannerSection2 dark={false}
                height={"400px"} margin="20px 0px 0px 0px" resHeight="auto"
                slug="/lets-goal-2021-planner"
                title={"My space 2022 "} animateText="Planner" sub_title={"PRE-BOOKING open now!"} desc={""}
                img={Plannerpink}
                // img={"https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large.jpg"}
                img2={"https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_small_2x.jpg"} />

            <BannerSection2 dark={false}
            height={"500px"}margin="40px 0px 0px 0px" resHeight="auto"
            slug="/the-professional-planner"
                title={"Work  "} animateText="Planner" sub_title={"Getting things done was never this easy"} desc={""}
                // img={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"} 
                img={workplanner} 
                img2={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_small_2x.jpg"}/>

            <Block padding="0px" margin="0px -15px" >
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection2 dark={false} width={"1262px"} resHeight="420px" height={"440px"}margin="10px 0px 0px 0px"
                                slug="/ultimate-sticker-book"
                                    title={"The Ultimate Sticker  "} animateText="Book" sub_title={"Now with 1500+ stickers"} desc={""}
                                    // img={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_large.jpg"}
                                    img={Stickerbook}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_small_2x.jpg"} />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <BannerSection2 dark={false} width={"1262px"} resHeight="420px" height={"440px"}margin="10px 0px 0px 0px"
                                slug="?super_category=1"
                                    title={"Phone"} animateText="Cases" sub_title={"One that truly sticks with you"} desc={""}
                                    // img={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_large.jpg"}
                                //     img={Stickerbook}
                                //    img2={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_small_2x.jpg"} />
                                img={phonecase} 
                                    img2={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_small_2x.jpg"}/> 
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
                                <BannerSection2 dark={false} width={"1154px"} resHeight="auto" height={"370px"} margin="10px 0px 0px 0px"
                                   slug="/laptopskin"
                                    title={"Laptop "} animateText="Skins" sub_title={"Soon bringing the essence in you"} desc={""}
                                //    img={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_large.jpg"}
                                   img={laptopskin}
                                   img2={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_small_2x.jpg"} />

                                    {/* img={"https://www.apple.com/v/home/ab/images/promos/apple-fitness-plus/tile__cauwwcyyn9hy_large.jpg"} 
                                    img2={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_small_2x.jpg"}/> */}
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection2 dark={false} width={"1262px"} resHeight="auto" height={"370px"}margin="10px 0px 0px 0px"
                                 slug="/PopSocket"
                                    title={"Pop "} animateText="Sockets" sub_title={"  "} desc={""}
                                    // img={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_large.jpg"}
                                    img={popsocket}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_small_2x.jpg"} />
                            </Block>
                        </Col>
                    </Row>
                </Container>
            </Block>
            <Block padding="15px 0px 0px 0px" margin="0px -15px">
                <TestimonialSection />
            </Block>
            <Block padding="0px">
                <StayTuned />
                {/* <Flex vertical width="100%" alignItems="center" margin="3rem 0">
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
                </Flex> */}


            </Block>
            <Block padding="0px" >
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
