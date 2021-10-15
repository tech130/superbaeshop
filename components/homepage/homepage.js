import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../styled/Block";

import BannerSection2 from "./BannerSection2";
import GoodVibes from "../lets-goal-2021/GoodVibes";
import StayTuned from "../lets-goal-2021/StayTuned";
import TestimonialSection from "../lets-goal-2021/TestimonialSection";
import workplanner from './images/workplanner.png';
import Stickerbook from './images/Stickerbook.png';
import popsocket from './images/popsocket.png';
import Plannerpink from './images/Plannerpink.png';
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
                height={"500px"} margin="40px 0px 0px 0px" resHeight="auto"
                slug="/the-professional-planner"
                title={"Work  "} animateText="Planner" sub_title={"Getting things done was never this easy"} desc={""}
                // img={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"} 
                img={workplanner}
                img2={"https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_small_2x.jpg"} />

            <Block padding="0px" margin="0px -15px" >
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <Block margin="0px 0px 0px 0px">
                                <BannerSection2 dark={false} width={"1262px"} resHeight="420px" height={"440px"} margin="10px 0px 0px 0px"
                                    slug="/ultimate-sticker-book"
                                    title={"The Sticker  "} animateText="Book" sub_title={"Now with 1500+ stickers"} desc={""}
                                    // img={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_large.jpg"}
                                    img={Stickerbook}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/ipad-pro/promo_ipad_pro_non_avail__c6f02v7gnwgi_small_2x.jpg"} />
                            </Block>
                        </Col>
                        <Col lg={6}>
                            <Block margin="0px 0px 15px 0px">
                                <BannerSection2 dark={false} width={"1262px"} resHeight="420px" height={"440px"} margin="10px 0px 0px 0px"
                                    slug="?super_category=1"
                                    title={"Phone"} animateText="Cases" sub_title={"One that truly sticks with you"} desc={""}
                                    // img={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_large.jpg"}
                                    //     img={Stickerbook}
                                    //    img2={"https://www.apple.com/v/home/ab/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_small_2x.jpg"} />
                                    img={phonecase}
                                    img2={"https://www.apple.com/v/home/ab/images/promos/back-to-school-2021/promo_bts__bg3cb4kaoqoi_small_2x.jpg"} />
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
                                <BannerSection2 dark={false} width={"1262px"} resHeight="auto" height={"370px"} margin="10px 0px 0px 0px"
                                    slug="/PopSocket"
                                    title={"Pop "} animateText="Sockets" sub_title={"A bit of grip with a dash of pop "} desc={""}
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



            </Block>
            <Block padding="0px" >
                <GoodVibes />
            </Block>
        </Container>
    );
};



export default HomePage;
