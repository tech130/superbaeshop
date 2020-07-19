import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { BaseCSS } from "styled-bootstrap-grid";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";
import UserandCart from "../components/common/UserandCart";
import GlobalStyle from "../components/styled/GlobalStyle";
import { ToastContainer } from "react-toastify";

import "../css/font.css";
import "react-toastify/dist/ReactToastify.css";
import UploadCartModal from "../components/auth/UploadCartModal";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Space and Beauty</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <UserandCart />
            <BaseCSS />
            <Component {...pageProps} />
            <UploadCartModal />
            <ToastContainer />
        </Provider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps };
};

export default withRedux(makeStore)(MyApp);
