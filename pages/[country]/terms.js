import React from "react";
import Layout from "../../components/layout/Layout";
import { common } from "../../redux/handlePages";
import { fetchTerms } from "../../redux/master";
import { useSelector } from "react-redux";
import { H4 } from "../../components/styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../../components/styled/Block";

const Terms = () => {
    const { content } = useSelector((state) => state.terms);
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <H4 mb="25px">Terms & Conditions</H4>
                            {content && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

Terms.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchTerms());
};

export default Terms;
