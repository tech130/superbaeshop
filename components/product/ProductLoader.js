import React from "react";
import ContentLoader from "react-content-loader";
import { Col, Container, Row } from "styled-bootstrap-grid";

const ProductLoader = (props) => (
    <Container>
        <Row>
            <Col md={8} mdOffset={2}>
                <ContentLoader
                    speed={2}
                    width={600}
                    height={460}
                    viewBox="0 0 600 460"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: "100%", height: "auto" }}
                    title="Loading product..."
                    {...props}
                >
                    <rect
                        x="89"
                        y="76"
                        rx="2"
                        ry="2"
                        width="416"
                        height="298"
                    />
                    <rect
                        x="157"
                        y="33"
                        rx="0"
                        ry="0"
                        width="264"
                        height="21"
                    />
                    <rect
                        x="42"
                        y="395"
                        rx="0"
                        ry="0"
                        width="508"
                        height="19"
                    />
                    <rect
                        x="181"
                        y="428"
                        rx="0"
                        ry="0"
                        width="215"
                        height="13"
                    />
                </ContentLoader>
            </Col>
        </Row>
    </Container>
);

export default ProductLoader;
