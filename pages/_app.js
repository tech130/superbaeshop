import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../css/nprogress.css";
import "../css/font.css";
import "../css/bootstrap-reboot.css";
import "../css/theme.css";
import { BaseCSS } from "styled-bootstrap-grid";
import withReduxStore from "../helpers/with-redux-store";

Router.events.on("routeChangeStart", (url) => {
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
            <BaseCSS />
            <Component {...pageProps} />
        </Provider>
    );
}

export default withReduxStore(MyApp);
