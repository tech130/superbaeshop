import React, { useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import useProduct from "../../hooks/redux/product/useProduct";
import Block from "../styled/Block";
import Button from "../styled/Button";
import { H3, H4 } from "../styled/Headings";
import P from "../styled/P";
import Txt from "../styled/Txt";
import { ProductPrices } from "./ProductPrice";
import { CartBtn, ProductImage } from "./ProductItem";
import Carousel from "nuka-carousel";
import RightIcon from "../icons/RightIcon";
import LeftIcon from "../icons/LeftIcon";
import {
    fetchSimilarProducts,
    similarProductsName,
} from "../../redux/product/product";
import { useDispatch, useSelector } from "react-redux";
import { loader, RenderItem } from "./ProductList";
import ResponsiveImage from "../common/ResponsiveImage";

const MainImgCon = styled.div`
    margin-bottom: 1rem;
`;

const LeftBtn = ({ previousSlide, slideCount }) => {
    if (slideCount === 1) {
        return null;
    }
    return (
        <Button onClick={previousSlide}>
            <LeftIcon size={24} />
        </Button>
    );
};

const RightBtn = ({ nextSlide, slideCount }) => {
    if (slideCount === 1) {
        return null;
    }
    return (
        <Button onClick={nextSlide}>
            <RightIcon size={24} />
        </Button>
    );
};

const Detail = ({ slug }) => {
    const dispatch = useDispatch();
    const product = useProduct(slug);
    console.log(product, "kkkkkk")
    const {
        title,
        thumbnail_image,
        short_descriptions,
        product_content = [],
        product_images = [],
        similarProducts =[],
        category = {},
    } = product;

    const api = useSelector(
        (state) => state.apiData[similarProductsName(slug)] || {}
    );

    useEffect(() => {
        if (slug) {
            dispatch(fetchSimilarProducts(slug));
        }
    }, [slug]);
    let similarProductsEdited = similarProducts.slice(0,4);
    
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
                                wrapAround
                            >
                                <ProductImage
                                    src={thumbnail_image}
                                    alt={title}
                                />
                                {product_images.map((x) => (
                                    <ProductImage
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
                            <Txt fontSize="12" color="#b5b5b5" weight={600}>
                                Inclusive of all taxes
                            </Txt>
                        </Block>
                        <div className="seperator" />
                        <CartBtn product={product} />
                        <div className="seperator" />
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

                    </Col>
                </Row>
                <Block padding="35px 0px 0px 0px">
                    <H4>Similar products</H4>
                    <Row>
                        {api.fetching
                            ? loader
                            : Array.isArray(similarProductsEdited) &&
                            similarProductsEdited.map((product) => (
                                <RenderItem id={product} key={product} />
                            ))}
                    </Row>
                </Block>
                <Block padding="35px 0px 0px 0px">
                    {/* <H4> products</H4> */}
                    {/* <Row> */}
                        {category && !!category.category_images ?
                            (
                                <>
                                    {

                                        category.category_images.map((item, index) => {
                                            return (

                                                <Block key={index} padding="0px">
                                                        <img
                                                            src={item.image}
                                                            alt="product image"
                                                        />
                                                </Block>
                                            )
                                        })
                                    }
                                </>
                            )

                            :
                            ''}
                    {/* </Row> */}
                </Block>
            </Container>
        </Block>
    );
};

export default Detail;
