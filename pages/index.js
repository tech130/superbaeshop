import React from "react";
import Layout from "../components/layout/Layout";
import Carousel from "nuka-carousel";
import useMedia from "use-media";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { CartButton } from "../components/styled/Button";
import Picture from "../components/common/Picture";
import styled from "styled-components";
import Img from "../components/styled/Img";

const Home = () => {
    return (
        <Layout>
            <section className="hero-section">
                <Container>
                    <Row alignItems="center">
                        <Col lg={7}>
                            <Picture
                                fluid
                                src="/images/professional-planner/1.png"
                            />
                        </Col>
                        <Col lg={5}>
                            <h1>
                                Meet the <br />
                                Perfect <br />
                                Professional <br />
                                planner
                            </h1>
                            <h3>Crafted just for you!</h3>
                            <h2 className="price-text">
                                <span className="text-light-black">
                                    Priced just right at
                                </span>{" "}
                                ₹854
                            </h2>
                            <CartButton>Add to cart</CartButton>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-4 pb-4">
                <Container>
                    <div className="d-flex align-items-center flex-wrap mb-3">
                        <span className="desgin-by-artist-txt mr-4">
                            Designed by artist
                        </span>
                        <span className="desgin-by-engineer-txt">
                            Engineered by experts
                        </span>
                    </div>
                    <div className="desgin-by-artist-txt mb-5">
                        With highest quality print
                    </div>
                    <h2 className="price-text">
                        <span className="text-light-black">
                            Priced just right at
                        </span>{" "}
                        ₹854
                    </h2>
                    <CartButton>Add to cart</CartButton>
                </Container>
            </section>

            <section>
                <Container fluid>
                    <Picture
                        fluid
                        src="/images/professional-planner/2.png"
                        alt=""
                    />
                </Container>
            </section>

            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="col-12 mb-5">
                            <div className="magical-piece-txt font-weight-bold">
                                A magical piece of design to fit every aspects
                                of your life
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-7">
                            {/* <img
                                src="/images/professional-planner/2.png"
                                alt=""
                            /> */}
                        </div>
                        <div className="col-md-5">
                            <p className="font-weight-bold f-18">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ullam harum voluptatem
                                repudiandae est obcaecati tenetur tempore,
                                numquam labore deserunt, officiis possimus,
                                magnam accusantium totam deleniti et! Odit
                                minima consequuntur enim!
                            </p>
                            <p className="font-weight-bold f-18 mb-5">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut porro inventore unde. Ad
                                eum similique accusantium dolor veniam nesciunt,
                                magnam, maiores doloribus nihil, ipsa
                                repudiandae possimus. Iusto fuga illum aliquid!
                            </p>
                            <h2 className="price-text">
                                <span className="text-light-black">
                                    Priced just right at
                                </span>{" "}
                                ₹854
                            </h2>
                            <CartButton>Add to cart</CartButton>
                        </div>
                    </Row>
                </Container>
            </section>

            <ProfPlannerSlider />

            <section className="pt-5 pb-5">
                <Container fluid>
                    <Row>
                        <div className="col-md-12 mb-3">
                            <Picture
                                fluid
                                source={[
                                    {
                                        media: "(max-width: 475px)",
                                        srcSet:
                                            "/images/professional-planner/3-mobile.png",
                                    },
                                ]}
                                src="/images/professional-planner/3.png"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Picture
                                fluid
                                src="/images/professional-planner/4.png"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Picture
                                src="/images/professional-planner/5.png"
                                alt=""
                            />
                        </div>
                    </Row>
                </Container>
            </section>

            <style jsx>{`
                .hero-section {
                    padding: 35px 0px;
                }
                .hero-section h1 {
                    font-size: 4rem;
                    font-weight: 700;
                    line-height: 68px;
                    margin-bottom: 30px;
                    background: linear-gradient(#616161, #333);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-section h3 {
                    font-weight: 700;
                    font-size: 1.8rem;
                    margin-bottom: 35px;
                }
                .price-text {
                    font-weight: 700;
                    font-size: 2rem;
                    margin-bottom: 15px;
                }
                .text-light-black {
                    color: #777777;
                }
                .desgin-by-artist-txt {
                    font-size: 4rem;
                    font-weight: 700;
                    line-height: 1;
                }
                .desgin-by-engineer-txt {
                    font-size: 2.2rem;
                    font-weight: 500;
                }
                .true-to-life-txt {
                    font-size: 3rem;
                    font-weight: 700;
                }
                .magical-piece-txt {
                    text-align: center;
                    font-size: 5rem;
                    line-height: 1.2;
                }
            `}</style>
        </Layout>
    );
};

const ProfPlannerPic = styled(Img)`
    border: 1px solid #f5f5f5;
`;

const ProfPlannerSlider = () => {
    const isMobile = useMedia({ maxWidth: 576 });

    return (
        <>
            <section>
                <div className="container-fluid planner-carousel-con">
                    <Carousel
                        withoutControls
                        wrapAround
                        autoplay
                        cellSpacing={15}
                        slidesToShow={isMobile ? 2 : 8}
                    >
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-1.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-2.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-3.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-4.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-5.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-6.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-7.jpg"
                            alt=""
                        />
                        <ProfPlannerPic
                            src="/images/professional-planner/slides/slide-8.jpg"
                            alt=""
                        />
                    </Carousel>
                </div>
            </section>
            <style jsx>{`
                .planner-carousel-con img {
                    border: 1px solid #f5f5f5;
                }
            `}</style>
        </>
    );
};

export default Home;
