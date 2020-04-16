import "../css/fonts.css";
import "../css/bootstrap-reboot.css";
import "../css/bootstrap-grid.css";
import "../css/theme.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Space and Beauty</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
