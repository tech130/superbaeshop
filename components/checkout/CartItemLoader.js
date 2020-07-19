import React from "react";
import ContentLoader from "react-content-loader";

const CartItemLoader = (props) => (
    <ContentLoader
        speed={2}
        width={475}
        height={125}
        viewBox="0 0 475 125"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="22" y="21" rx="0" ry="0" width="113" height="98" />
        <rect x="150" y="23" rx="0" ry="0" width="181" height="15" />
        <rect x="150" y="48" rx="0" ry="0" width="147" height="15" />
        <circle cx="165" cy="95" r="16" />
        <circle cx="225" cy="95" r="16" />
    </ContentLoader>
);

export default CartItemLoader;
