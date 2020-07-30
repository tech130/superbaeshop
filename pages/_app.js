import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { BaseCSS } from "styled-bootstrap-grid";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";
import GlobalStyle from "../components/styled/GlobalStyle";
import { ToastContainer } from "react-toastify";

import "intersection-observer";
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
            </Head>
            <GlobalStyle />
            <BaseCSS />
            <Component {...pageProps} />
            <UploadCartModal />
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
