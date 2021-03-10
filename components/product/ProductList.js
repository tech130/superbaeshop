import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import ProductItem, { ItemLoader } from "./ProductItem";
import InfiniteList from "../common/InfiniteList";
import useProduct from "../../hooks/redux/product/useProduct";
import { useRouter } from "next/router";
import {
    fetchMoreProducts,
    fetchProducts,
    filterSelector,
    prodListName,
} from "../../redux/product/listing";
import styled from "styled-components";
import CountryLink from "../common/CountryLink";
import { H4 } from "../styled/Headings";

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

const FilterListStyl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    margin-bottom: 15px;
`;

const FilterLinkStyl = styled(CountryLink)`
    flex: 0 0 100px;
    margin: 0px 15px 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    font-size: 14px;
`;

const FilterImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: #f3f3f3;
    margin-bottom: 5px;
    border-width: 3px;
    border-style: solid;
    border-color: ${(props) =>
        props.isActive ? `rgba(0,0,0, 0.8)` : `rgb(238, 238, 238)`};
    padding: ${(props) => (props.isActive ? `2px` : `0px`)};

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const getTitle = (data = {}) => {
    if (data?.sub_category) {
        return `${data.sub_category.title} in ${data.sub_category.category.title}`;
    }
    if (data?.category) {
        return `${data.category.title} in ${data.category.super_category.title}`;
    }
    if (data?.super_category) {
        return `${data.super_category.title}`;
    }
    return "";
};

const Filters = () => {
    const { query } = useRouter();
    const data = useSelector((state) => filterSelector(state, query));
    const list = Array.isArray(data?.filter) ? data.filter : [];
    const title = getTitle(data);
    return (
        <>
            {title && (
                <H4 mb="20px" textAlign="center">
                    {title}
                </H4>
            )}
            {list.length > 0 && (
                <FilterListStyl>
                    <FilterLinkStyl
                        href="/product"
                        query={{ ...query, design_type: "" }}
                    >
                        <FilterImg isActive={!query?.design_type}>
                            <img src="/images/all-selected.png" alt="" />
                        </FilterImg>
                        <span>All</span>
                    </FilterLinkStyl>
                    {list.map((x) => {
                        return (
                            <FilterLinkStyl
                                href="/product"
                                query={{ ...query, design_type: x.id }}
                                key={`tag--${x.id}`}
                            >
                                <FilterImg
                                    isActive={
                                        query?.design_type === x.id.toString()
                                    }
                                >
                                    {x.image && <img src={x.image} alt="" />}
                                </FilterImg>
                                <span>{x.title}</span>
                            </FilterLinkStyl>
                        );
                    })}
                </FilterListStyl>
            )}
        </>
    );
};

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
                <Filters />
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
