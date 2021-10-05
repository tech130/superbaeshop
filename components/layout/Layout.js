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

const StickyTop = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
`;

const Layout = ({ children, slug, isAuthRoute = false }) => {
    const { token } = useUser();
    const country = useCountryParam();

    useEffect(() => {
        if (isAuthRoute) {
            if (!token) {
                window.location.replace(`/${country}`);
            }
        }
    }, [token, country, isAuthRoute]);

    return (
        <>
            {/* <TopRollText slug={slug} /> */}
                <StickyTop>
                <Header />
                <div className="d-block d-md-none d-lg-none d-xl-none">
                        <ProductList />
                            </div>
                {/* <ProductList /> */}
                </StickyTop>
                {children}
                {/* <Subscribe /> */}
                <Footer />
            <WhatsAppIcon slug={slug} />
        </>
    );
};

export default Layout;
