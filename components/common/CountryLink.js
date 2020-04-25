import React from "react";
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
        (con) => con.code.toLowerCase() === country
    );

    return {
        countries,
        activeCountry: activeCountry.length > 0 ? activeCountry[0] : {},
    };
};

export const useProdCountry = (product_country) => {
    const { activeCountry } = useActiveCountry();

    let productCountry = null;

    if (product_country && activeCountry.code) {
        const country_price = product_country.filter(
            (item) => item.country.code === activeCountry.code
        );
        if (country_price.length > 0) {
            productCountry = country_price[0];
        }
    }

    return productCountry;
};

export default CountryLink;
