import React from "react";
import Layout from "../../components/layout/Layout";
import OrderIcon from "../../components/icons/OrderIcon";
import CalenderIcon from "../../components/icons/CalenderIcon";
import Block from "../../components/styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Flex from "../../components/styled/Flex";
import Txt from "../../components/styled/Txt";
import { H6 } from "../../components/styled/Headings";
import Button from "../../components/styled/Button";

const Orders = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

const OrderItem = () => {
    return (
        <>
            <Block
                padding="10px"
                border="solid 2px #f5f5f5"
                borderRadius="10px"
                margin="0px 0px 15px 0px"
            >
                <Row>
                    <Col md={12}>
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            margin="0px 0px 15px"
                        >
                            <Flex alignItems="center">
                                <OrderIcon size={14} strokeWidth={1} />
                                <Txt fontSize={14} margin="0px 5px">
                                    Order ID: #1265868686
                                </Txt>
                            </Flex>
                            <Flex alignItems="center">
                                <CalenderIcon size={14} strokeWidth={1} />
                                <Txt fontSize={14} margin="0px 5px">
                                    12 Feb 2020, 1:00 PM
                                </Txt>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-4">
                        <Flex alignItems="center" margin="0px 0px 15px 0px">
                            <img
                                className="order-img"
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                            <div className="flex-grow-1">
                                <h5 className="order-product-title mb-1">
                                    Let's Goal 2021
                                </h5>
                                <div className="mb-1">
                                    <span className="order-offer-price">
                                        1 x ₹600 = ₹600
                                    </span>
                                </div>
                            </div>
                        </Flex>
                        <Flex alignItems="center" margin="0px 0px 15px 0px">
                            <img
                                className="order-img"
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                            <div className="flex-grow-1">
                                <h5 className="order-product-title mb-1">
                                    Let's Goal 2021
                                </h5>
                                <div className="mb-1">
                                    <span className="order-offer-price">
                                        1 x ₹600 = ₹600
                                    </span>
                                </div>
                            </div>
                        </Flex>
                    </Col>
                    <Col md={4}>
                        <H6>Delivery Details</H6>
                        <p className="mb-1">Dilip Ashokkumar</p>
                        <p className="mb-1">dilip@billiontags.com</p>
                        <p className="mb-1">8610074983, 9715868154</p>
                        <p className="mb-1">
                            123, test street, test city, test country, 123456
                        </p>
                    </Col>
                    <Col md={4}>
                        <H6>Order Summary</H6>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Sub Total: </span>
                            <span className="ml-2">₹1,010</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Other Charges: </span>
                            <span className="ml-2">₹10</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Coupon Applied: </span>
                            <span className="ml-2">COUPON10</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Coupon Amount: </span>
                            <span className="ml-2">₹100</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Payment mode: </span>
                            <span className="ml-2">COD</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Grand Total: </span>
                            <span className="ml-2 font-weight-bold">
                                ₹10,000
                            </span>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-0 mb-3 order-divider" />
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Button
                            margin="0px 10px 0px 0px"
                            border="1px solid #000"
                            padding="5px 20px"
                        >
                            Order Placed
                        </Button>
                        <div>Estd Delivery Date: 14 Jan 2020</div>
                    </Flex>
                    <Button border="1px solid #000" padding="5px 20px">
                        Need help
                    </Button>
                </Flex>
            </Block>
            <style jsx>{`
                .order-item {
                    padding: 10px;
                    border: solid 2px #f5f5f5;
                    border-radius: 10px;
                    font-size: 14px;
                }
                .order-divider {
                    border-top: 1px solid #f5f5f5;
                    height: 0px;
                }
                .order-img {
                    width: 80px;
                    margin-right: 15px;
                    height: auto;
                }
                .order-product-title {
                    font-size: 16px;
                    font-weight: 500;
                }
                .order-offer-price {
                    font-weight: 400;
                    font-size: 16px;
                }
                .btn-track {
                    border: 1px solid #000;
                    padding: 5px 20px;
                }
            `}</style>
        </>
    );
};

export default Orders;
