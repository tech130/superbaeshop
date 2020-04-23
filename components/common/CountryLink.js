import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CountryLink = ({ children, className, href = "", as = "" }) => {
    const country = useCountryParam();

    return (
        <Link href={`/[country]${href}`} as={`/${country}${as || href}`}>
            <a className={className}>{children}</a>
        </Link>
    );
};

export const useCountryParam = () => {
    const router = useRouter();
    const { country } = router.query;

    return country || "in";
};

export default CountryLink;
