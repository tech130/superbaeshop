import React,{useEffect} from "react";
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
import "../css/theme.css";
import "../css/ui.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import UploadCartModal from "../components/auth/UploadCartModal";
import useAnalytics from "../hooks/useAnalytics";
import { GridThemeProvider } from 'styled-bootstrap-grid';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {Scrollbar} from 'smooth-scrollbar-react';
Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
    useAnalytics();
    const gridTheme = {
        // gridColumns: 24, 
        breakpoints: { // defaults below
          xxl: 1440,
          xl: 1200,
          lg: 992,
          md: 768,
          sm: 576,
          xs: 575,
        },
        // row: {
        //   padding: 10,
        // },
        // col: {
        //   padding: 5,
        // },
        container: {
        //   padding: 0,
          maxWidth: {
            xxl: 1141,
            xl: 1240,
            lg: 960,
            md: 720,
            sm: 540,
            xs: 540,
          },
        },
      };
      useEffect(() => {
        if (AOS) {
          AOS.init({
            duration : 2000
          })
        } 
    }, []);
    return (
        <Provider store={store}>
            <GridThemeProvider gridTheme={gridTheme}>
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
            {/* <Scrollbar
              className="custom-class"
              onScroll={(e)=>{console.log(e)}}
              alwaysShowTracks
              plugins={{
                overscroll: {
                  effect: "glow"
                } 
              }}
            > */}
            <Component {...pageProps} />
            {/* </Scrollbar> */}
            
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
            </GridThemeProvider>
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
