import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { H4 } from "../../components/styled/Headings";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import CartItem from "../../components/checkout/CartItem";
import CartSummary from "../../components/checkout/CartSummary";
import { fetchMaster } from "../../redux/master";


const Checkout = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <CartSummary />
                            <CartItem />
                            <CartItem />
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
    await Promise.all([
        store.dispatch(fetchMaster()),
    ]);
    return {
        props: {},
    };
};

export default Checkout;
