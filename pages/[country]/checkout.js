import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { H4 } from "../../components/styled/Headings";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { fetchMaster } from "../../redux/master";
import Cartlist from "../../components/checkout/Cartlist";
import { useSelector } from "react-redux";
import CartSummary from "../../components/checkout/CartSummary";

const Checkout = () => {
    const cart = useSelector((state) => state.local_cart);

    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <CartSummary cart={cart} />
                            <Cartlist cart={cart} />
                        </Col>
                        <Col lg={5}>
                            <H4>Checkout Details</H4>
                            <CheckoutForm />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

Checkout.getInitialProps = async ({ store }) => {
    await Promise.all([store.dispatch(fetchMaster())]);
    return {
        props: {},
    };
};

export default Checkout;
