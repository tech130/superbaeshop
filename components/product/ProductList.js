import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Collapse } from 'reactstrap';
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
import CountryLink, { useCountryParam } from "../common/CountryLink";
import { H4 } from "../styled/Headings";
export const ProdCol = ({ children }) => {
    return (
        <Col col={6} lg={3} md={4} className="p-0">
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
const FilterResponsive = styled.div`
    border: 1px solid #ddd;
    padding: 2px 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    height: 100%;
    width: fit-content;
`;
const FilterResponsiveList = styled.div`
    position: absolute;
    background: #ffffff;
    z-index: 999;
    height: 400px;
    overflow-y: auto;
    padding: 30px 20px;
    left: 0px;
    right: 0;
    border: 1px solid #b9b9b9;
    border-radius: 8px;
    top: 30px;
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
    const router = useRouter();
    const data = useSelector((state) => filterSelector(state, query));
    const list = Array.isArray(data?.filter) ? data.filter : [];
    const titleHead = getTitle(data);
    const [activeCheck, setActive] = useState(query.design_type ? query.design_type : "");
    const [toggle, setToggle] = useState(list.length > 0 ? list.map((item) => { return item.title }) : []);
    const country = useCountryParam();
    console.log(query, 'query');
    const checkMarkChange = (id, href, filter_key) => {
        setActive(activeCheck === id ? '' : id);
        if (query[`${filter_key}`] && query[`${filter_key}`] !== '' && id !== '') {
            if (Array.isArray(query[`${filter_key}`])) {

                query[`${filter_key}`].includes(id.toString()) ?
                    query[`${filter_key}`].splice(query[`${filter_key}`].indexOf(id.toString()), 1) :
                    query[`${filter_key}`].push(id);
            } else {
                let tempArray = query[`${filter_key}`] !== id.toString() ? query[`${filter_key}`].split('') : [];
                tempArray.length === 0 ? '' : tempArray.push(`${id}`)
                query[`${filter_key}`] = tempArray
            }
        } else {
            query[`${filter_key}`] === id ? delete query[`${filter_key}`] : query[`${filter_key}`] = id;
            // query[`${filter_key}`]=id;
        }
        // query[`${filter_key}`]=query[`${filter_key}`] === ''? Array.isArray(query[`${filter_key}`])? 
        //                     query[`${filter_key}`].includes(id) ? 
        //                     query[`${filter_key}`].splice(query[`${filter_key}`].indexOf(id),1) :
        //                     query[`${filter_key}`].push(id) : tempArray.push(id) :[id];
        router.push({
            pathname: `/[country]${href}`,
            query: { ...query, country },
            key: `tag--${id}`
        }
        );
    }
    return (
        <Block width="100%">
            {/* {titleHead && (
                <H4 mb="20px" textAlign="left">
                    {titleHead}
                </H4>
            )} */}
            {/* {list.length > 0 && (
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
            )} */}
            <div className="outline">
                {list.map((item, index) => {
                    let { title, data, filter_key } = item;
                    return (
                        <>
                            {
                                data.length > 0 &&
                                <div className="hover-body" key={index}>
                                    <div className="filter-branch cursor-pointer" onClick={() => {
                                        if (toggle.includes(title)) {
                                            setToggle(toggle.filter(item => item !== title))
                                        } else {
                                            setToggle([...toggle, title])
                                        }
                                    }}>
                                        <p className="f-14 mb-0">{title}</p>
                                        <span className={toggle.includes(title) ? "rotate-down" : "rotate-up"}>
                                            <img src="/images/up_arrow.svg" alt="icon" />
                                        </span>
                                    </div>
                                    <Collapse isOpen={toggle.includes(title)}>
                                        <ul className="filter-list">
                                            <li key={'all'}>
                                                <div className="check f-13">
                                                    <input type="checkbox" id="custom-checkbox" checked={query[`${filter_key}`] !== '' ? false : true} onChange={() => { checkMarkChange("", "/product", filter_key) }} />
                                                    <span className="checkmark"></span>
                                                    All
                                                </div>
                                            </li>
                                            {data.length > 0 ?
                                                <>
                                                    {data.map((list, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <div className="check f-13">
                                                                    {/* <input type="checkbox" id="custom-checkbox" checked={Array.isArray(query[`${filter_key}`])? query[`${filter_key}`].includes(list.id.toString()) ?
                                                            true:query[`${filter_key}`] === list.id.toString()? true:false :false} onChange={()=>{checkMarkChange(list.id,"/product",filter_key)}} /> */}
                                                                    <input type="checkbox" id="custom-checkbox" checked={query[`${filter_key}`] !== '' ? Array.isArray(query[`${filter_key}`]) ?
                                                                        query[`${filter_key}`].includes(list.id.toString()) : query[`${filter_key}`] === list.id.toString() : false} onChange={() => { checkMarkChange(list.id, "/product", filter_key) }} />
                                                                    <span className="checkmark"></span>
                                                                    {list.title}

                                                                </div>
                                                            </li>

                                                        );
                                                    })}
                                                </>
                                                :
                                                ''
                                                // <li>
                                                //     <div className="check">
                                                //         No Data
                                                //     </div>
                                                // </li>
                                            }
                                        </ul>
                                    </Collapse>
                                </div>
                            }
                        </>
                    );
                })}
                {/* <div className="filter-branch cursor-pointer" onClick={()=>{setToggle(!toggle)}}>
                    <p className="f-14 mb-0">{title}</p>
                    <span  className={toggle ? "rotate-down" : "rotate-up"}>
                        <img src="/images/up_arrow.svg" alt="icon" />
                    </span>
                </div>
                <Collapse isOpen={toggle}>    
                    <ul className="filter-list">
                        <li key={'all'}>
                            <div className="check f-13">
                                    <input type="checkbox" id="custom-checkbox" checked={activeCheck.toString() === ""} onChange={()=>{checkMarkChange("","/product")}} />
                                    <span className="checkmark"></span>
                                All
                            </div>
                        </li>
                    {list.length > 0?
                    <>
                    {list.map((item,index) => {
                        return (
                            <li key={index}>
                                <div className="check f-13">
                                        <input type="checkbox" id="custom-checkbox" checked={activeCheck.toString() === item.id.toString()} onChange={()=>{checkMarkChange(item.id,"/product")}} />
                                        <span className="checkmark"></span>
                                    {item.title}
                                    
                                </div>
                            </li>
                            
                        );
                    })}
                    </>
                    :
                    ''
                    // <li>
                    //     <div className="check">
                    //         No Data
                    //     </div>
                    // </li>
                    }
                    </ul>
                </Collapse> */}
            </div>
        </Block>
    );
};

const EaringList = () => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.pagination[prodListName(query)] || {};
    });
    const Category = useSelector((state) => filterSelector(state, query));
    const title = getTitle(Category);
    useEffect(() => {
        dispatch(fetchProducts(query));
    }, [query]);

    const loadMore = useCallback(() => {
        dispatch(fetchMoreProducts(query));
    }, [dispatch, query]);
    const [toggle, setToggle] = useState(false);
    const loadTotalInformation = (data) => {
        console.log(data)
        let { count, fetching } = data;
        return (
            <p>
                Showing {fetching ? <strong>{count ? count : 0}</strong> : <strong>{count ? count : 0}</strong>} results for {`"${title}"`}
            </p>
        )
    }
    return (
        <Block padding="35px 0px">
            <Container>
                {/* <Filters />
                <Row>
                    <InfiniteList
                        loader={loader}
                        RenderItem={RenderItem}
                        loadMore={loadMore}
                        emptyTitle="No products found"
                        {...data}
                    />
                </Row> */}
                <div className="row">
                    <div className="col-12 p-0 pb-2 d-sm-none d-none d-md-block d-lg-block d-xl-block">
                        {loadTotalInformation(data)}
                    </div>
                </div>
                <Row>
                    <Col sm={12} xs={12} lg={2} md={3}>
                        <Row>
                            <div className="w-100 d-sm-none d-none d-md-block d-lg-block d-xl-block">
                                <Filters />
                            </div>
                        </Row>
                        <div className=" d-flex d-md-none d-lg-none d-xl-none justify-content-between position-relative">
                            {/* <Filters /> */}
                            {loadTotalInformation(data)}
                            <FilterResponsive onClick={() => {
                                setToggle(!toggle)
                            }} >
                                filter
                            </FilterResponsive>
                            {
                                toggle &&
                                <FilterResponsiveList>
                                    <Filters />
                                </FilterResponsiveList>
                            }
                        </div>
                    </Col>
                    <Col sm={12} xs={12} col={9} lg={10} md={9}>
                        <Row>
                            <InfiniteList
                                loader={loader}
                                RenderItem={RenderItem}
                                loadMore={loadMore}
                                emptyTitle="No products found"
                                {...data}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Block>
    );
};

export default EaringList;
