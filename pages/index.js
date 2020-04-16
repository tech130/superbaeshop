import React from "react";
import Layout from "../components/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <img
                                className="w-100"
                                src="https://letsgoal2020.com/static/media/open--5.9a0cf123.png"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5">
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
                            <button className="buy-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4">
                <div className="container">
                    <div className="d-flex align-items-center flex-wrap mb-3">
                        <span className="desgin-by-artist-txt mr-4">
                            Designed by artist
                        </span>
                        <span className="desgin-by-engineer-txt">
                            Engineered by experts
                        </span>
                    </div>
                    <h2 className="price-text">
                        <span className="text-light-black">
                            Priced just right at
                        </span>{" "}
                        ₹854
                    </h2>
                    <button className="buy-btn">Buy Now</button>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="h2 font-weight-bold">
                                A magical piece of design to fit every aspects
                                of your life
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <img
                                src="https://letsgoal2020.com/static/media/open--4.6ffa231c.png"
                                alt=""
                            />
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
                            <button className="buy-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="h1 font-weight-bold text-center">
                                Comes in two different color options for cover
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 h4 font-weight-bold">
                            <div>Dimensions</div>
                            <div>~Width - 18.5 cm ~Height - 23.5 cm</div>
                            <div>Hardcover with rose gold foil accents.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="true-to-life-txt">
                                Bringing true-to-life
                                <br />
                                colored pages
                                <br />
                                to make your day exciting
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 className="price-text">
                                <span className="text-light-black">
                                    Priced just right at
                                </span>{" "}
                                ₹854
                            </h2>
                            <button className="buy-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className="container-fluid">
                    <img
                        src="https://letsgoal2020.com/static/media/bottom.8ea3651d.png"
                        alt=""
                    />
                </div>
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
                    background: linear-gradient(#aeaeae, #333);
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
                }
                .desgin-by-engineer-txt {
                    font-size: 2.2rem;
                    font-weight: 500;
                }
                .true-to-life-txt {
                    font-size: 3rem;
                    font-weight: 700;
                }
            `}</style>
        </Layout>
    );
};

export default Home;
