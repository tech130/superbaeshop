import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { H4 } from "../../components/styled/Headings";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { common } from "../../redux/handlePages";
import Cartlist from "../../components/checkout/Cartlist";

const Checkout = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <Cartlist />
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

Checkout.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Checkout;
