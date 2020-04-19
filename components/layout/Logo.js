import React from "react";
import Link from "next/link";

const Logo = ({ width="220px" }) => {
    return (
        <Link href="/">
            <a>
                <img
                    width="220px"
                    src="/images/logo.png"
                    alt="space and beauty logo"
                />
            </a>
        </Link>
    );
};

export default Logo;
