import Router from "next/router";
import { useEffect } from "react";
import { pageview } from "../utils/analytics";

const useAnalytics = () => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            // pageview(url);
        };
        Router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);
};

export default useAnalytics;
