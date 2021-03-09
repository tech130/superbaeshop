import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import { H3 } from "../styled/Headings";
import ProductItem, { ItemLoader } from "./ProductItem";
import InfiniteList from "../common/InfiniteList";
import useProduct from "../../hooks/redux/product/useProduct";
import { useRouter } from "next/router";
import {
    fetchMoreProducts,
    fetchProducts,
    prodListName,
} from "../../redux/product/listing";

export const ProdCol = ({ children }) => {
    return (
        <Col col={6} lg={3} md={4}>
            {children}
        </Col>
    );
};

export const RenderItem = ({ id }) => {
    const product = useProduct(id);

    return (
        <ProdCol>
            <ProductItem product={product} />
        </ProdCol>
    );
};

export const loader = (
    <>
        <ProdCol>
            <ItemLoader />
        </ProdCol>
        <ProdCol>
            <ItemLoader />
        </ProdCol>
    </>
);

const EaringList = () => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.pagination[prodListName(query)] || {};
    });

    useEffect(() => {
        dispatch(fetchProducts(query));
    }, [query]);

    const loadMore = useCallback(() => {
        dispatch(fetchMoreProducts(query));
    }, [dispatch, query]);

    return (
        <Block padding="35px 0px">
            <Container>
                <H3>Products</H3>
                <Row>
                    <InfiniteList
                        loader={loader}
                        RenderItem={RenderItem}
                        loadMore={loadMore}
                        emptyTitle="No products found"
                        {...data}
                    />
                </Row>
            </Container>
        </Block>
    );
};

export default EaringList;
