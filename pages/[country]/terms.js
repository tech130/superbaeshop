import React from "react";
import Layout from "../../components/layout/Layout";
import { H4 } from "../../components/styled/Headings";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Block from "../../components/styled/Block";
import TermsContent from "../../components/static-content/TermsContent";

const Terms = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <H4 mb="25px">Terms & Conditions</H4>
                            <TermsContent />
                        </Col>
                    </Row>
                </Container>
            </Block>
        </Layout>
    );
};

export default Terms;
