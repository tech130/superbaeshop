import React from "react";
import Layout from "../../components/layout/Layout";
import { H4 } from "../../components/styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../../components/styled/Block";

const Refund = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        {/* <Col md={10} mdOffset={1}>
                            <H4 mb="25px">Privacy policy</H4>

                        </Col> */}
                        <Col md={10} mdOffset={1}>
                            <div className="refund-content">
                                <h5>
                                    <span>Shipping & Cancellation</span>
                                </h5>
                                {/* <p>
                                    <span>Space and beauty open for free shipping in India for all orders above<b> Rs. 799.</b> The
                                        shipping charges of <b>Rs.100</b> for the below orders of <b>Rs.799.</b></span>
                                </p> */}
                                <p>
                                    <span>Once your order is shipped, there will be a tracking link to your order to your given inbox
                                        or the given contact number. SuperBae usually deliver mode with only post
                                        services.</span>
                                </p>
                                <h5>
                                    <span>Domestic transit time</span>
                                </h5>
                                <p>
                                    <span>Generally, Domestic shipments take only 3-4 business days to deliver. This may vary
                                        accordingly with the courier services in your area.</span>
                                </p>
                                <h5>
                                    <span>International transit time</span>
                                </h5>
                                <p>
                                    <span>International shipments take only 10-15 business days to deliver. The delivery time may
                                        vary depending on the courier service you prefer. But we will provide you the estimated
                                        delivery time when you choose one of the courier services.</span>
                                </p>
                                <h5>
                                    <span>Change of Delivery Address</span>
                                </h5>
                                <p>
                                    <span>We can assist you with changing the delivery address at any time before the order has been
                                        dispatched.</span>
                                </p>
                                <h5>
                                    <span>Items out of stock</span>
                                </h5>
                                <p>
                                    <span>If any item you order has been out of stock, we will wait for the item to get restocked before
                                        dispatching it. Existing items will be reserved for delivery while we wait for other items.</span>
                                </p>
                                <h5>
                                    <span>Tracking</span>
                                </h5>
                                <p>
                                    <span className="small-gray">After the dispatch, you will receive a tracking link from which you will be able to track your order based on
                                        the updates done by the shipping provider. We request you to wait for 24hrs for the status of your
                                        shipment to get updated.</span>
                                </p>
                                <h5>
                                    <span>Cancellation:</span>
                                </h5>
                                <p>
                                    <span>If you plan for cancellation, it is advisable to do so before the order is out for dispatch
                                        and shipment.</span>
                                </p>
                                <p>
                                    <span>In case a cancellation request comes up on a later date when the order is already
                                        out for delivery; the order will not be deemed as canceled.</span>
                                </p>
                                <h5>
                                    <span>Cancellation Fee</span>
                                </h5>
                                <p>
                                    <span>We don’t charge any extra amount for cancellation. However, it is highly advisable to
                                        only cancel the order within the above-mentioned ‘cancellation duration’. If multiple
                                        instances of cancellation on a later date are recorded by an account, there are chances
                                        that your account will be marked as unserviceable for any future references.</span>
                                </p>






                                <h5>
                                    <span className="mb-2">Refund policies:</span>
                                </h5>

                                <h5>
                                    <span>Damaged Products and Replacement:</span>
                                </h5>
                                <p>
                                    <span>
                                        If there are issues over damaged product, don't worry,
                                        Drop your mail @ &nbsp;
                                    </span>
                                    <a href="http://heysuperbaeshop.com/">
                                        <span>hey@superbaeshop.com</span>
                                    </a>
                                    <span>
                                        &nbsp;or be in touch with our support team to
                                        place a replacement request or a refund request. For all pre-paid orders, you can expect
                                        a refund of the canceled order to be processed within 3-15 bank days.
                                    </span>

                                </p>
                                <p className="mb-0">
                                    <span>Also, please make sure that the returned product is well packed to avoid any damages
                                        in transit. The product should be returned in its original state for the refund/code to get
                                        processed within one day.</span>
                                </p>
                                <h5>
                                    <span>PAYMENT:</span>
                                </h5>
                                <p>
                                    <span>We prefer an online delivery payment method option usual, with razor pay, amazon pay,
                                        google pay, and Paytm.</span>
                                </p>

                                <style jsx>{`
                .refund-content {
                    padding-bottom: 50px;
                }
                .refund-content a{
                    color: #1e5ece;
    text-decoration: underline;
                }
                .refund-content .small-gray{
                    font-weight: 400;
                    color: gray;
                    font-size: 16px;
                }
                .refund-content h5 {
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }

                .refund-content ul {
                    padding-left: 20px;
                    margin-bottom: 15px;
                }

                .refund-content ul li {
                    margin-bottom: 5px;
                }
            `}</style>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

// Terms.getInitialProps = async (ctx) => {
//     await common(ctx);
//     await ctx.store.dispatch(fetchTerms());
// };

export default Refund;
