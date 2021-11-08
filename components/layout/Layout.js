import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Subscribe from "./Subscribe";
import TopRollText from "./TopRollText";
import styled from "styled-components";
import { useCountryParam } from "../common/CountryLink";
import useUser from "../../hooks/redux/user/useUser";
import WhatsAppIcon from "./WhatsAppIcon";
import ProductTab from "./ProductTab";
import { useRouter } from "next/router";
import {PLANNER_PRODUCTS_PATH} from "../../utils/constants"
const StickyTop = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
`;

const Layout = ({ children, slug, isAuthRoute = false }) => {
    const { token } = useUser();
    const country = useCountryParam();
    const { pathname } = useRouter();
    useEffect(() => {
        if (isAuthRoute) {
            if (!token) {
                window.location.replace(`/${country}`);
            }
        }
    }, [token, country, isAuthRoute]);

    console.log(pathname)

    return (
        <>
            {/* <TopRollText slug={slug} /> */}
                <StickyTop>
                <Header />
                
                <div className="d-block d-md-none d-lg-none d-xl-none position-bug">
                    <ProductList />
                </div>
                {/* <ProductList /> */}
                </StickyTop>
                {
                    PLANNER_PRODUCTS_PATH.includes(pathname)
                    &&
                <ProductTab />
            }
                {children}
                {/* <Subscribe /> */}
                <Footer />
            <WhatsAppIcon slug={slug} />
        </>
    );
};

export default Layout;
