import React, { useState } from "react";
import { useRouter } from "next/router";
import Flex from "../styled/Flex";
import { Col, Row, Container } from "styled-bootstrap-grid";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CountryLink, { useCountryParam } from "../common/CountryLink";
import Txt from "../styled/Txt";
import ProductLink from "../product/ProductLink";

const ProdList = styled(Flex)`
max-width: 65vw;
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        overflow-x: auto;
        white-space: nowrap;
        justify-content: space-evenly;
    min-height: 42px;
    align-items: center;

    }
    @media only screen and (max-width: 768px) {
        background: hsla(0,0%,100%,.7);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    max-width: 100vw;
    position: relative;
    z-index: -1;
    }
`;

const ProdLinkStl = styled.li`
    cursor: pointer;
    display: inline-block;
    padding: 4px 25px;
    color: #000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    a{
        color: #000;
    }
    @media only screen and (max-width: 575px) {
        padding: 5px 10px;
        font-size: 14px;
    }
`;


const CategoryTitle = ({ cat, index, toggle, setToggle }) => {
    let { categories, is_active, id } = cat;
    return (
        <React.Fragment key={id}>
            {is_active &&
                <React.Fragment >
                    <ProdLinkStl>
                        <div id="main-cat" onClick={() => {
                            if (id === toggle)
                                setToggle('')
                            else
                                setToggle(id)
                        }} >
                            {cat.title}

                        </div>
                    </ProdLinkStl>
                    <div key={index} id="main-cat-menu" className={`${id === toggle ? '' : 'd-none'}`}>
                        <Row className="h-100">
                            <Container>

                                <div className="inside-outline">
                                    <div className="d-flex justify-content-end mb-1">

                                        <div className="mt-2 pt-1">
                                            <CountryLink href="/product" query={{ super_category: id }}>
                                                <Txt textDecor="underline">View Products</Txt>
                                            </CountryLink>
                                        </div>
                                        {/* <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true" className="f-28" onClick={() => {
                                                setToggle('')
                                            }}>&times;</span>
                                        </button> */}
                                        <div className="close-container" onClick={() => {
                                            setToggle('')
                                        }}>
                                            <div className="leftright"></div>
                                            <div className="rightleft"></div>
                                            {/* <label className="close">close</label> */}
                                        </div>

                                    </div>
                                    <div className="inside-pad">
                                        <Row className="h-100">

                                            {
                                                !!categories && categories.length > 0 &&
                                                categories.map((cat, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            {cat.is_active &&

                                                                <Col key={index} col={2} lg={2} md={2} sm={3} xs={4}>
                                                                    {loadCategories(cat, setToggle)}
                                                                </Col>

                                                            }
                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </div>
                                </div>
                            </Container>
                        </Row>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    );
};
const ProdTitle = ({ slug, index }) => {
    return (
        <React.Fragment key={index}>
                    <ProdLinkStl>
                    <ProductLink slug={slug} />
                    </ProdLinkStl>
                    
            
        </React.Fragment>
    );
};
const loadCategories = (cat, setToggle) => {

    let { sub_categories, title, is_active, id } = cat;
    const { query } = useRouter();
    const router = useRouter();
    const country = useCountryParam();
    return (
        <>
            {is_active &&
                <div className="mb-3">
                    <p className="mb-2 font-weight-bold cursor-pointer categ-title" onClick={() => {
                        setToggle('')
                        router.push(
                            `/[country]/product/?category=${id}`,
                            `/${country}/product/?category=${id}`
                        );

                    }}>
                        {title}
                    </p>
                    {
                        sub_categories.length > 0 ?
                            sub_categories.map((item) => {
                                return (
                                    <p className="mb-1 cursor-pointer" key={item.id} onClick={() => {

                                        query.sub_category = item.id;
                                        query.category = id;
                                        router.push({
                                            pathname: `/[country]/product`,
                                            query: { ...query },
                                        })
                                        setToggle('')
                                    }}>
                                        {item.title}
                                    </p>
                                )
                            })
                            :
                            <p className="mb-1" >
                                No Data
                            </p>
                    }
                </div>
            }
        </>
    );
};


const ProductList = () => {
    const [toggle, setToggle] = useState('');
    const data = useSelector((state) => ({
        products: state.headerProducts,
        categories: state.master.category || [],
    }));
    let Show = 'products';
    console.log(data)
    return (
        <ProdList justifyContent="center" alignItems="stretch">
            {
                Show === "products" ?
                    <ul>
                        {data.products.map((slug, index) => (
                            <ProdTitle  slug={slug} key={index} index={index} />
                        ))}
                    </ul>
                    :
                    <ul>
                        {data.categories.map((cat, index) => (
                            <CategoryTitle toggle={toggle} setToggle={setToggle} cat={cat} key={index} index={index} />
                        ))}
                    </ul>
            }
        </ProdList>
    );
};

export default ProductList;
