import React from "react";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CountryLink from "../common/CountryLink";
import Block from "../styled/Block";
import Txt from "../styled/Txt";

const ProdList = styled(Flex)`
    border-bottom: 1px solid #eaeaea;
    position: relative;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }
`;

const ProdLinkStl = styled.li`
    cursor: pointer;
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;

    .mega-menu-con {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #eaeaea;
        display: none;
        box-shadow: 0px 11px 12px 8px rgb(0 0 0 / 3%);
    }

    &:hover .mega-menu-con {
        display: block;
    }
`;

const Menu = styled.div`
    display: flex;
    padding-left: 15px;
`;

const MenuItem = styled.div`
    flex: 1 1;
    padding: 0px 25px;

    &:first-child {
        border: none;
    }
`;

const MenuImg = styled.img`
    width: 40%;
    height: 350px;
    object-fit: cover;
`;

const Category = ({ id, title, sub_categories = [] }) => {
    return (
        <MenuItem>
            <Block margin="10px 0px 10px 0px">
                <CountryLink href={`/product?category=${id}`}>
                    <Txt weight={500} fontSize="15px">
                        {title}
                    </Txt>
                </CountryLink>
            </Block>
            {sub_categories
                .slice(0, Math.min(sub_categories.length, 10))
                .map((sub) => (
                    <Block margin="0px 0px 5px 0px" key={sub.id}>
                        <CountryLink href={`/product?sub_category=${sub.id}`}>
                            <Txt weight={300} fontSize="14px">
                                {sub.title}
                            </Txt>
                        </CountryLink>
                    </Block>
                ))}
            {sub_categories.length > 12 && (
                <Block padding="0px 0px 10px 0px">
                    <Txt fontSize="12px" weight={500} textDecor="underline">
                        View All
                    </Txt>
                </Block>
            )}
        </MenuItem>
    );
};

const MegaMenu = ({ categories, image }) => {
    return (
        <div className="mega-menu-con">
            <Menu>
                {categories
                    .slice(0, Math.min(categories.length, 4))
                    .map((cat) => (
                        <Category {...cat} key={cat.id} />
                    ))}
                {image && <MenuImg src={image} alt="" />}
            </Menu>
        </div>
    );
};

const CategoryLink = ({ id, title, categories = [], image }) => {
    return (
        <ProdLinkStl>
            <CountryLink href="/category/[categoryId]" asUrl={`/category/${id}`}>
                {title}
            </CountryLink>
            {Array.isArray(categories) && categories.length > 0 && (
                <MegaMenu categories={categories} image={image} />
            )}
        </ProdLinkStl>
    );
};

const ProductList = () => {
    const data = useSelector((state) => ({
        products: state.headerProducts,
        categories: state.master.category || [],
    }));

    return (
        <ProdList as="nav" justifyContent="center" alignItems="stretch">
            <ul>
                {data.categories.map((cat) => (
                    <CategoryLink {...cat} key={`${cat.id}`} />
                ))}
            </ul>
        </ProdList>
    );
};

export default ProductList;
