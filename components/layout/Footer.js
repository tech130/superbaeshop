import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { Container, Col, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import Flex from "../styled/Flex";

const FooterCon = styled.footer`
    border-top: 4px solid #f5f5f5;
    padding: 30px 0px;
    font-size: 16px;

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
        padding-top: 15px;
        font-size: 14px;
        text-align: center;
    }
`;

const Footer = () => {
    return (
        <FooterCon>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Block margin="0px 0px 15px">
                            <Block margin="0px 0px 8px">
                                <Logo />
                            </Block>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Flex
                                className="social-icons"
                                alignItems="center"
                                flexWrap
                            >
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
                            </Flex>
                        </Block>
                    </Col>
                    <Col lg={3}>
                        <Block margin="0px 0px 15px">
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
                        </Block>
                    </Col>
                    <Col lg={2}>
                        <Block margin="0px 0px 15px">
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
                        </Block>
                    </Col>
                    <Col lg={4}>
                        <Block margin="0px 0px 15px">
                            <div className="footer-title">Payment partner</div>
                            <Flex className="payment-icons" flexWrap>
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
                            </Flex>
                        </Block>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                © 2020 Space and Beauty All Rights Reserved.
            </div>
        </FooterCon>
    );
};

export default Footer;
