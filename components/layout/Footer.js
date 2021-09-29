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
    padding: 100px 0px 70px 0px;
    font-size: 16px;
    background: #fff7f7;
    color: black;

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
        margin-bottom: 12px;
    }
    .footer-list {
        list-style: none;
    }
    .footer-list li {
        font-size: 16px;
        margin-bottom: 8px;
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
        display: flex;
        justify-content: space-around;
    }
    .footer-bottom-txt {
        padding: 15px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #d0d0d0;
    margin: 50px 0px 30px 0px;
    @media (max-width: 576px) {
        display:none;
      }
    }
    
`;

const Footer = () => {
    return (
        <FooterCon>
            <Container>
                <Row>
                    <Col md={3} sm={6} xs={6}>
                        <Block margin="0px 0px 15px">
                            <Block margin="0px 0px 8px">
                                <Logo width="100px" />
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
                            <Block margin="25px 0px 15px">
                                <ul className="footer-list">
                                    <li>
                                        <a href="mailto:hey@spaceandbeauty.com">
                                            Need Help?
                                        </a>
                                    </li>
                                    <li>
                                        <CountryLink href="/terms">
                                            Press Inquiry?
                                        </CountryLink>
                                    </li>
                                </ul>
                            </Block>
                        </Block>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                        <Block margin="0px 0px 15px">
                            <div className="footer-title">Products</div>
                            <ul className="footer-list">
                                <FooterProducts />
                            </ul>
                        </Block>
                    </Col>
                    <Col md={2} sm={6} xs={6}>
                        <Block margin="0px 0px 15px">
                            <div className="footer-title">
                                Also shop on{" "} <br />
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
                    <Col md={4} sm={6} xs={6}>
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
                <div className="footer-bottom-txt ">
                    *The statements on Vibrant's products have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease or illness
                </div>
                <div className="d-none d-md-block d-lg-block d-xl-block" >
                    <div className="footer-bottom" >
                    <span>© 2020 Space and Beauty All Rights Reserved.</span>
                    <span>
                        Terms of Use
                    </span>
                    <span>

                        Privacy Policy
                    </span>
                    <span>


                        Refund Policy
                        Subscription Policy
                    </span>
                    <span>
                        Subscription Policy
                    </span>
                </div>
                </div>
                <div className="footer-bottom d-block d-md-none d-lg-none d-xl-none">
                    <span>© 2020 Space and Beauty All Rights Reserved.</span>
                </div>
            </Container>


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
