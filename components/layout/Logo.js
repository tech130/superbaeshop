import React from "react";
import CountryLink from "../common/CountryLink";

const Logo = ({ width = "220px" }) => {
    return (
        <CountryLink>
            <img
                width="220px"
                src="/images/logo.png"
                alt="space and beauty logo"
            />
        </CountryLink>
    );
};

export default Logo;
