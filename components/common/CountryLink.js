import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

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

export const useActiveCountry = () => {
    const country = useCountryParam();
    const data = useSelector((state) => state.master);
    const countries = Array.isArray(data.countries) ? data.countries : [];

    const activeCountry = countries.filter(
        (con) => con.code2.toLowerCase() === country
    );

    return {
        countries,
        activeCountry: activeCountry.length > 0 ? activeCountry[0] : {},
    };
};

export const useProdCountry = (product_country = {}) => {
    const { activeCountry } = useActiveCountry();

    return useMemo(() => {
        return activeCountry && product_country && product_country[activeCountry.id]
            ? product_country[activeCountry.id]
            : {};
    }, [product_country, activeCountry]);
};

export default CountryLink;
