import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { common } from "../../redux/handlePages";
import OrderList from "../../components/checkout/OrderList";

const Orders = () => {
    return (
        <Layout isAuthRoute>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <OrderList />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

Orders.getInitialProps = async (ctx) => {
    await common(ctx, true);
};

export default Orders;
