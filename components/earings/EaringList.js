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

const RenderItem = ({ id }) => {
    const product = useProduct(id);

    return (
        <Col md={3}>
            <EaringItem product={product} />
        </Col>
    );
};

const loader = (
    <>
        <Col md={3}>
            <ItemLoader />
        </Col>
        <Col md={3}>
            <ItemLoader />
        </Col>
        <Col md={3}>
            <ItemLoader />
        </Col>
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
                <H3>Earings</H3>
                <P fontSize="14px">Cheerful and bright just like your vibes.</P>
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
