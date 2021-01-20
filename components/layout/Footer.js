import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { Container, Col, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import CountryLink from "../common/CountryLink";
import { useSelector } from "react-redux";
import Txt from "../styled/Txt";
import ProductLink from "../product/ProductLink";

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
                    <Col md={3}>
                        <Block margin="0px 0px 15px">
                            <Block margin="0px 0px 8px">
                                <Logo width="220px" />
                            </Block>
                            <Block margin="0px 0px 15px">
                                <ul className="footer-list">
                                    <li>
                                        <a href="mailto:hey@spaceandbeauty.com">
                                            hey@spaceandbeauty.com
                                        </a>
                                    </li>
                                    <li>
                                        <CountryLink href="/terms">
                                            Terms & Conditions
                                        </CountryLink>
                                    </li>
                                </ul>
                            </Block>
                            <Flex
                                className="social-icons"
                                alignItems="center"
                                flexWrap
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/spaceandbeauty.official/"
                                >
                                    <img
                                        src="/images/icons/social-icons/facebook.svg"
                                        alt="Facebook logo"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/spaceandbeautyofficial/"
                                >
                                    <img
                                        src="/images/icons/social-icons/instagram.svg"
                                        alt="instagram logo"
                                    />
                                </a>
                            </Flex>
                        </Block>
                    </Col>
                    <Col md={3}>
                        <Block margin="0px 0px 15px">
                            <div className="footer-title">Products</div>
                            <ul className="footer-list">
                                <FooterProducts />
                            </ul>
                        </Block>
                    </Col>
                    <Col md={2}>
                        <Block margin="0px 0px 15px">
                            <div className="footer-title">
                                Also shop on{" "}
                                <Txt fontSize="14px" weight={300}>
                                    (coming soon)
                                </Txt>{" "}
                            </div>
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
                    <Col md={4}>
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

const FooterProducts = () => {
    const state = useSelector((state) => state.headerProducts);
    return state.map((slug) => <FooterProductLink slug={slug} key={slug} />);
};

const FooterProductLink = ({ slug }) => {
    return (
        <li>
            <ProductLink slug={slug} />
        </li>
    );
};

export default Footer;
