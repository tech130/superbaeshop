import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container } from "styled-bootstrap-grid";
import { common } from "../../redux/handlePages";
import Cartlist from "../../components/checkout/Cartlist";

const Checkout = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Cartlist />
                </Container>
            </Block>
        </Layout>
    );
};

Checkout.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Checkout;
