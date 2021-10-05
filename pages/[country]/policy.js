import React from "react";
import Layout from "../../components/layout/Layout";
import { H4 } from "../../components/styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../../components/styled/Block";

const Policy = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        {/* <Col md={10} mdOffset={1}>
                            <H4 mb="25px">Privacy policy</H4>

                        </Col> */}
                        <Col md={10} mdOffset={1}>
                            <div className="policy-content">
                                <h5>
                                    <span>Privacy policy</span>
                                </h5>
                                <p>
                                    <span>
                                        This privacy policy put out how Spaceandbeauty protects and utilizes your information that is
                                        being provided in &nbsp;
                                    </span>
                                    <a href="https://www.spaceandbeauty.com/">
                                        <span>spaceandbeauty.com</span>
                                    </a>
                                    <span>
                                        &nbsp;We “SpaceandBeauty” ensure in protecting your
                                        information, subject to the “Security terms” provided below. We request you to check our privacy
                                        policies from time to time, as we may update the policies.
                                    </span>

                                </p>
                                <h5>
                                    <span>Information we Collect</span>
                                </h5>
                                <p>
                                    <span>By collecting the required information, we ensure to provide a safe and satisfying shopping with
                                        us. We collect, your name, email address, other contact information, and your Demographic
                                        pieces of information such as a residential address when you purchase from our website.</span>
                                </p>
                                <h5>
                                    <span>What do we do with the collected information?</span>
                                </h5>
                                <p>
                                    <span>Collecting information will help us to understand your need and assist you with our extraordinary
                                        services.</span>
                                </p>
                                <p>
                                    <span>We may use your information for sending periodical emails about our online store, offers,
                                        products, and all the other updates only with your permission and interest.</span>
                                </p>
                                <h5>
                                    <span>Security</span>
                                </h5>
                                <p>
                                    <span>We ensure that your collected information is secure with us. We have triple lock security
                                        procedures to protect your information from being stolen.</span>
                                </p>
                                <p>
                                    <span>If we are getting your personal information to place an order, verify your card, complete the
                                        transaction and make it ready for shipment, we make ensure your consent on collecting your
                                        information and using it for specific reasons.</span>
                                </p>
                                <p>
                                    <span>
                                        If you want to withdraw the consent for us to contact you via email, you can reach us at &nbsp;
                                    </span>
                                    <a href="hey@spaceandbeauty.com">
                                        <span>
                                            hey@spaceandbeauty.com</span>
                                    </a>
                                </p>
                                <h5>
                                    <span>Third-Party Services</span>
                                </h5>
                                <p>
                                    <span>Thirdy-party services used by us for payement gateway and other payment transaction
                                        processes collects information that is necessary for them to perform their services. They has
                                        their own requirements where we provide them informations for your purchases related
                                        transactions.</span>
                                </p>
                                <p>
                                    <span>We recommend you to read their policies to know how your informations are handled buy them.
                                        If you are proceeding with a transaction that involves third-party service provider, then your
                                        information may become subject to the laws of the jurisdiction(s), where the service provider is
                                        located.</span>
                                </p>











                                <style jsx>{`
                .policy-content {
                    padding-bottom: 50px;
                }
                .policy-content a{
                    color: #1e5ece;
    text-decoration: underline;
                }

                .policy-content h5 {
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }

                .policy-content ul {
                    padding-left: 20px;
                    margin-bottom: 15px;
                }

                .policy-content ul li {
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

export default Policy;
