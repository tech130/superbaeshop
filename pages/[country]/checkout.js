import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { H4 } from "../../components/styled/Headings";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import Cartlist from "../../components/checkout/Cartlist";
import { useSelector } from "react-redux";
import CartSummary from "../../components/checkout/CartSummary";
import { fetchMaster } from "../../redux/master";
import getToken from "../../utils/getToken";
import { loadCartList } from "../../redux/user/cart";

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

Checkout.getInitialProps = async (ctx) => {
    await ctx.store.dispatch(fetchMaster());
    const { token, Api } = await getToken(ctx);
    if (token && Api) {
        try {
            const res = await Api({
                url: `cart/`,
            });
            ctx.store.dispatch(loadCartList(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export default Checkout;
