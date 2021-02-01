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
import { CartBtn, EaringImage } from "./EaringItem";
import Carousel from "nuka-carousel";
import RightIcon from "../icons/RightIcon";
import LeftIcon from "../icons/LeftIcon";

const MainImgCon = styled.div`
    margin-bottom: 1rem;
`;

const LeftBtn = ({ previousSlide }) => {
    return (
        <Button onClick={previousSlide}>
            <LeftIcon size={24} />
        </Button>
    );
};

const RightBtn = ({ nextSlide }) => {
    return (
        <Button onClick={nextSlide}>
            <RightIcon size={24} />
        </Button>
    );
};

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
                                renderCenterLeftControls={LeftBtn}
                                renderCenterRightControls={RightBtn}
                                renderBottomCenterControls={null}
                            >
                                <EaringImage src={thumbnail_image} alt={title} />
                                {product_images.map((x) => (
                                    <EaringImage
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
