import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "styled-bootstrap-grid";
import styled from "styled-components";
import { categorySelector } from "../../redux/product/listing";
import CountryLink from "../common/CountryLink";
import Block from "../styled/Block";
import Flex, { FlexItem } from "../styled/Flex";
import { H5 } from "../styled/Headings";
import P from "../styled/P";
import CategoryList from "./CategoryList";

const CatImStyl = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center center;
    background-color: #f3f3f3;
`;

const ViewAllLink = styled(CountryLink)`
    display: block;
    background: #000;
    color: #fff !important;
    padding: 8px 15px;
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 5px;
`;

const CategoryDetail = () => {
    const { query } = useRouter();
    const { data } = useSelector((state) =>
        categorySelector(state, query.categoryId)
    );
    if (data && Array.isArray(data.categories)) {
        const { id, image, categories, type, title, short_description } = data;
        return (
            <>
                {image && <CatImStyl src={image} />}
                <Block padding="30px 0px">
                    <Container>
                        <Flex
                            justifyContent="space-between"
                            margin="0px 0px 15px 0px"
                            flexWrap
                        >
                            <FlexItem>
                                {title && (
                                    <H5 as="h1" mb="5px">{title}</H5>
                                )}
                                {short_description && (
                                    <P margin="0px 0px 5px 0px" color="#909090">{short_description}</P>
                                )}
                            </FlexItem>
                            <FlexItem>
                                <ViewAllLink
                                    href="/product"
                                    query={{ super_category: id }}
                                >
                                    View Products
                                </ViewAllLink>
                            </FlexItem>
                        </Flex>
                        <CategoryList type={type} categories={categories} />
                    </Container>
                </Block>
            </>
        );
    }
    return null;
};

export default CategoryDetail;
