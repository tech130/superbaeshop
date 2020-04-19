import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  mb-3">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </p>
                        <div className="social-icons d-flex flex-wrap">
                            <a href="https://facebook.com">
                                <img
                                    src="/images/icons/social-icons/facebook.svg"
                                    alt="Facebook logo"
                                />
                            </a>
                            <a href="https://twitter.com">
                                <img
                                    src="/images/icons/social-icons/twitter.svg"
                                    alt="twitter logo"
                                />
                            </a>
                            <a href="https://instagram.com">
                                <img
                                    src="/images/icons/social-icons/instagram.svg"
                                    alt="instagram logo"
                                />
                            </a>
                            <a href="https://linkedin.com">
                                <img
                                    src="/images/icons/social-icons/linkedin.svg"
                                    alt="linkedin logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3  mb-3">
                        <div className="footer-title">Products</div>
                        <ul className="footer-list">
                            <li>
                                <a>Bundle</a>
                            </li>
                            <li>
                                <a>Let’s Goal 2021 Planner</a>
                            </li>
                            <li>
                                <a>The Ultimate Sticker Book</a>
                            </li>
                            <li>
                                <a>The Professional Planner</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <div className="footer-title">Also shop on</div>
                        <ul className="footer-list">
                            <li>
                                <a>Amazon</a>
                            </li>
                            <li>
                                <a>Etsy</a>
                            </li>
                            <li>
                                <a>Wish</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-title">Payment partner</div>
                        <div className="d-flex align-items-center payment-icons flex-wrap">
                            <img
                                src="/images/icons/payment/paypal.svg"
                                alt="paypal payment logo"
                            />
                            <img
                                src="/images/icons/payment/amazon.svg"
                                alt="amazon pay logo"
                            />
                            <img
                                src="/images/icons/payment/razorpay.svg"
                                alt="razorpay logo"
                            />
                            <img
                                src="/images/icons/payment/googlepay.svg"
                                alt="googlepay logo"
                            />
                            <img
                                src="/images/icons/payment/paytm.jpg"
                                alt="paytm logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center pt-2">
                © 2020 Space and Beauty All Rights Reserved.
            </div>
            <style jsx>{`
                .footer {
                    border-top: 4px solid #f5f5f5;
                    padding: 30px 0px;
                    font-size: 16px;
                    margin-top: 15px;
                }
                .social-icons a {
                    margin-right: 10px;
                    margin-bottom: 5px;
                }
                .social-icons img {
                    width: 25px;
                }
                .footer-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .footer-list {
                    list-style: none;
                }
                .footer-list li {
                    font-size: 16px;
                    margin-bottom: 5px;
                }
                .payment-icons img {
                    height: 26px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    padding: 2px;
                }
                .footer-bottom {
                    font-size: 14px;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
