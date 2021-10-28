import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { common } from "../../redux/handlePages";
import { H3 } from "../../components/styled/Headings";
import P from "../../components/styled/P";
import Flex from "../../components/styled/Flex";
import CountryLink from "../../components/common/CountryLink";
import Txt from "../../components/styled/Txt";
import { useRouter } from "next/router";
import { Purchase} from "../../utils/analytics";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/user/cart";

const Thankyou = () => {
    const {query} = useRouter();
    const dispatch = useDispatch();
    let{id,code,pay_amount,payment_type,status}=query;
    Purchase(id,code,pay_amount,payment_type,status);
    dispatch(clearCart());
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Flex
                                vertical
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Block
                                    textAlign="center"
                                    margin="30px 0px 30px 0px"
                                >
                                    <svg
                                        width={80}
                                        viewBox="0 0 426.667 426.667"
                                    >
                                        <path d="M421.876 56.307c-6.548-6.78-17.352-6.968-24.132-.42-.142.137-.282.277-.42.42L119.257 334.375l-90.334-90.334c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713l102.4 102.4c6.665 6.663 17.468 6.663 24.132 0L421.456 80.44c6.78-6.549 6.968-17.353.42-24.133z" />
                                    </svg>
                                </Block>
                                <H3 textAlign="center">Order Placed</H3>
                                <P textAlign="center">
                                    Thank you for shopping with us
                                </P>
                                <CountryLink href="/orders">
                                    <Txt textDecor="underline" fontSize="18px">
                                        View your orders
                                    </Txt>
                                </CountryLink>
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

Thankyou.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Thankyou;
