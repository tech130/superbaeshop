import React from "react";
import Layout from "../components/layout/Layout";
import ThrashIcon from "../components/icons/ThrashIcon";
import Block from "../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { H4 } from "../components/styled/Headings";
import CheckoutForm from "../components/checlout/CheckoutForm";
import CartItem from "../components/checlout/CartItem";

const Checkout = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={7}>
                            {/* <CheckoutSummary /> */}
                            <CartItem />
                        </Col>
                        <Col col={5}>
                            <H4>
                                Checkout Details
                            </H4>
                            <CheckoutForm />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

const CheckoutSummary = () => {
    return (
        <>
            <div className="checkout-summary mb-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Cart Total</h6>
                    <div>₹1536</div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Delivery Charge</h6>
                    <div>+ ₹0</div>
                </div>
                <hr className="checkout-summary-divider mb-1 mt-2" />
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Grand Total</h6>
                    <div className="font-weight-bold">₹1536</div>
                </div>
            </div>
            <style jsx>{`
                .checkout-summary {
                    padding: 10px;
                    border: 2px solid #f5f5f5;
                    border-radius: 10px;
                }
                .checkout-summary-divider {
                    border-top: 1px solid #f5f5f5;
                    height: 0px;
                }
            `}</style>
        </>
    );
};

export default Checkout;
