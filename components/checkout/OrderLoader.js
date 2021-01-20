import React from "react";
import ContentLoader from "react-content-loader";

const OrderLoader = (props) => (
    <ContentLoader
        speed={2}
        width={800}
        height={300}
        viewBox="0 0 800 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="10" y="25" rx="0" ry="0" width="323" height="14" />
        <rect x="10" y="51" rx="0" ry="0" width="104" height="100" />
        <rect x="126" y="57" rx="0" ry="0" width="132" height="9" />
        <rect x="127" y="78" rx="0" ry="0" width="102" height="11" />
        <rect x="12" y="161" rx="0" ry="0" width="104" height="100" />
        <rect x="127" y="162" rx="0" ry="0" width="132" height="9" />
        <rect x="128" y="186" rx="0" ry="0" width="102" height="11" />
    </ContentLoader>
);

export default OrderLoader;
