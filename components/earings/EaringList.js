import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import { H3 } from "../styled/Headings";
import P from "../styled/P";
import EaringItem, { ItemLoader } from "./EaringItem";
import InfiniteList from "../common/InfiniteList";
import {
    earingListName,
    fetchEarings,
    // fetchEarings,
    fetchMoreEarings,
} from "../../redux/product/earings";
import useProduct from "../../hooks/redux/product/useProduct";

const EaringCol = ({ children }) => {
    return (
        <Col col={6} lg={3} md={4}>
            {children}
        </Col>
    );
};

const RenderItem = ({ id }) => {
    const product = useProduct(id);

    return (
        <EaringCol>
            <EaringItem product={product} />
        </EaringCol>
    );
};

const loader = (
    <>
        <EaringCol>
            <ItemLoader />
        </EaringCol>
        <EaringCol>
            <ItemLoader />
        </EaringCol>
    </>
);

const EaringList = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.pagination[earingListName] || {};
    }, []);

    useEffect(() => {
        dispatch(fetchEarings());
    }, []);

    const loadMore = useCallback(() => {
        dispatch(fetchMoreEarings());
    }, [dispatch]);

    return (
        <Block padding="35px 0px">
            <Container>
                <H3>Earrings</H3>
                <P fontSize="14px"> </P>
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
