import React from "react";
import CountryLink from "../common/CountryLink";
import Img from "../styled/Img";

const Logo = ({ small = false, ...rest }) => {
    return (
        <CountryLink>
            <Img
                {...rest}
                src={`/images/logo${small ? "-small" : ""}.png`}
                alt="space and beauty logo"
            />
        </CountryLink>
    );
};

export default Logo;
