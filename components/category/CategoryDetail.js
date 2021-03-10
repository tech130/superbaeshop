import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import { categorySelector } from "../../redux/product/listing";
import Block from "../styled/Block";
import { H4 } from "../styled/Headings";
import P from "../styled/P";
import CategoryList from "./CategoryList";

const CatImStyl = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center center;
    background-color: #f3f3f3;
`;

const CategoryDetail = () => {
    const { query } = useRouter();
    const { data } = useSelector((state) =>
        categorySelector(state, query.categoryId)
    );
    if (data && Array.isArray(data.categories)) {
        const { image, categories, type, title, short_description } = data;
        return (
            <>
                {image && <CatImStyl src={image} />}
                <Block padding="30px 0px">
                    <Container>
                        <Block margin="0px 0px 35px 0px">
                            {title && (
                                <H4 textAlign="center" mb="5px">
                                    {title.toUpperCase()}
                                </H4>
                            )}
                            {short_description && (
                                <P
                                    color="#909090"
                                    weight={600}
                                    textAlign="center"
                                >
                                    {short_description}
                                </P>
                            )}
                        </Block>
                        <Row>
                            <CategoryList type={type} categories={categories} />
                        </Row>
                    </Container>
                </Block>
            </>
        );
    }
    return null;
};

export default CategoryDetail;
