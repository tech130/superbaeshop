import React from "react";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="d-flex justify-content-center align-items-center header-height">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/logo.png" />
                            </a>
                        </Link>
                    </nav>
                </div>
            </header>
            <section className="working-on-section">
                <h1 className="font-weight-normal">
                    We are working on the website
                </h1>
            </section>
            <section className="instagram-section">
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/meanwhile.jpeg" className="meanwhile-img" alt="" />
                        <h2 className="meanwhile-text text-center">
                            Meanwhile...
                        </h2>
                        <a
                            href="https://www.instagram.com/spaceandbeautyofficial/"
                            target="_blank"
                            className="d-flex align-items-center instagram-btn"
                        >
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                            </svg>
                            Follow us on Instagram
                        </a>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .header {
                    background: #fff;
                    border-bottom: 1px solid var(--theme-border);
                }
                .header-height {
                    min-height: 60px;
                }
                .logo {
                    width: 260px;
                }
                .working-on-section {
                    padding: 20px 25px;
                    text-align: center;
                    background: #f5f5f5;
                }
                .working-on-section h1 {
                    font-size: 20px;
                    font-weight: 600;
                }
                .instagram-section {
                    padding: 75px 0px;
                }
                .meanwhile-img {
                    max-width: 420px;
                }
                .meanwhile-text {
                    font-size: 30px;
                    font-weight: 200;
                    margin-bottom: 5px;
                }
                .instagram-btn {
                    color: #f09433 !important;
                    font-size: 18px;
                    background: linear-gradient(
                        45deg,
                        #f09433 0%,
                        #e6683c 25%,
                        #dc2743 50%,
                        #cc2366 75%,
                        #bc1888 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </>
    );
};

export default Home;
