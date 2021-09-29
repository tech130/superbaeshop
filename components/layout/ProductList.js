import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Flex from "../styled/Flex";
import { Col, Row, Container } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CountryLink, { useCountryParam } from "../common/CountryLink";
import Txt from "../styled/Txt";

const ProdList = styled(Flex)`
    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
        
    }
    @media only screen and (max-width: 768px) {
        background: hsla(0,0%,100%,.6);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    }
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
const ProdLinkStl = styled.li`
    cursor: pointer;
    display: inline-block;
    padding: 10px 25px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        padding: 5px 10px;
        font-size: 12px;
    }
`;
const SubCatLink = styled(CountryLink)`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
`;
const FilterListStyl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    margin-bottom: 15px;
`;
const CategoryLink = ({ id, title }) => {
    return (
        <ProdLinkStl>
            <CountryLink
                href="/category/[categoryId]"
                query={{ categoryId: id }}
            >
                {title}
            </CountryLink>
        </ProdLinkStl>
    );
};

const CategoryTitle = ({ cat, index, toggle, setToggle }) => {
    let { categories, is_active, id } = cat;
    return (
        <React.Fragment key ={id}>
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
                                                                    {loadCategories(cat,setToggle)}
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
const loadCategories = (cat,setToggle) => {

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
                                    <p className="mb-1 cursor-pointer" key={item.id}  onClick={()=>{
                                        
                                        query.sub_category=item.id;
                                        query.category=id;
                                        router.push({
                                            pathname: `/[country]/product`,
                                            query: {...query },
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
    return (
        <ProdList as="nav" justifyContent="center" alignItems="stretch">
            <ul>
                {data.categories.map((cat, index) => (
                    <CategoryTitle toggle={toggle} setToggle={setToggle} cat={cat} key={index} index={index} />
                ))}
            </ul>
        </ProdList>
    );
};

export default ProductList;
