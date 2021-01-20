import React from "react";
import { useSelector } from "react-redux";

const DynamicContent = ({ fetching, loader = null, isLoaded, children }) => {
    if (fetching) {
        return loader;
    }
    if (isLoaded) {
        return children;
    }
    return null;
};

export const ApiContent = ({ loader, children, name }) => {
    const { fetching, data } = useSelector(
        (state) => state.apiData[name] || {}
    );

    return (
        <DynamicContent loader={loader} fetching={fetching} isLoaded={!!data}>
            {children}
        </DynamicContent>
    );
};

export default DynamicContent;
