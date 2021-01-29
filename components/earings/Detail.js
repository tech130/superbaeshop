import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import useProduct from "../../hooks/redux/product/useProduct";
import Block from "../styled/Block";
import Button from "../styled/Button";
import { H3 } from "../styled/Headings";
import P from "../styled/P";
import Txt from "../styled/Txt";
import { ProductPrices } from "../product/ProductPrice";
import { CartBtn } from "./EaringItem";
import Carousel from "nuka-carousel";

const FeatureList = styled.ul`
    list-style: none;
    padding: 5px 0px;
    margin-left: 15px;
    margin-bottom: 5px;

    li {
        margin-bottom: 8px;
        font-size: 0.95rem;
        position: relative;
        padding-left: 20px;
    }

    li::before {
        content: "";
        position: absolute;
        top: 10px;
        left: 0;
        width: 10px;
        height: 3px;
        background-color: rgb(0 0 0 / 50%);
    }
`;

const MainImgCon = styled.div`
    margin-bottom: 1rem;
`;

const MainImg = styled.img`
    width: 100%;
`;

const Detail = ({ slug }) => {
    const product = useProduct(slug);
    const {
        title,
        thumbnail_image,
        short_descriptions,
        product_content = [],
        product_images = [],
    } = product;

    return (
        <Block padding="35px 0px">
            <Container>
                <Row>
                    <Col md={6}>
                        <MainImgCon>
                            <Carousel
                                renderCenterLeftControls={null}
                                renderCenterRightControls={null}
                            >
                                <MainImg src={thumbnail_image} alt={title} />
                                {product_images.map((x) => (
                                    <MainImg
                                        src={x.image}
                                        alt={x.title}
                                        key={`${x.id}`}
                                    />
                                ))}
                            </Carousel>
                        </MainImgCon>
                    </Col>
                    <Col md={6}>
                        <H3 mb="5px" as="h1">
                            {title}
                        </H3>
                        <P margin="0px 0px 10px 0px" weight={300}>
                            {short_descriptions}
                        </P>
                        <Block margin="0px 0px 10px 0px">
                            <ProductPrices
                                fontSize="1.5rem"
                                margin="0px 8px 0px 0px"
                                weight={600}
                                slug={slug}
                            />

                            {/* <Txt color="#00A80B" weight={300}>
                                (60% off)
                            </Txt> */}
                        </Block>
                        {product_content.map((x) => (
                            <Block key={`${x.id}`}>
                                <Block>
                                    <Txt fontSize="1.1rem" weight={600}>
                                        {x.heading}
                                    </Txt>
                                </Block>
                                <Block margin="0px 0px 10px 0px">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: x.content,
                                        }}
                                    />
                                </Block>
                            </Block>
                        ))}
                        <CartBtn product={product} />
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default Detail;
