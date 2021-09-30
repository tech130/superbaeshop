import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container } from "styled-bootstrap-grid";
import { common } from "../../redux/handlePages";
import Cartlist from "../../components/checkout/Cartlist";
import { fetchProfile } from "../../redux/user/user";

const Checkout = () => {
    return (
        <Layout>
            <Block className="checkout-bg" padding="35px 0px">
                <Container>
                    <Cartlist />
                </Container>
            </Block>
        </Layout>
    );
};

Checkout.getInitialProps = async (ctx) => {
    const { token } = await common(ctx);
    if (token && !ctx.isServer) {
        await ctx.store.dispatch(fetchProfile());
    }
};

export default Checkout;
