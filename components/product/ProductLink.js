import React from "react";
import { useCountryParam } from "../common/CountryLink";
import Link from "next/link";
import useProduct from "../../hooks/redux/product/useProduct";

const productTitleOverrides = {
    "lets-goal-2021-planner": "My Space 2027 planner",
    "my-space-2022-planner-black": "My Space 2027 planner-Black Edition",
    "bundle-2021": "Ultimate Bundle 2027 - Pink Edition",
    "ultimate-bundle-2022-black": "Ultimate Bundle 2027-Black Edition",
};

const ProductLink = ({ slug, children, className = "" }) => {
    const country = useCountryParam();
    const { id, title } = useProduct(slug);
    const displayTitle = productTitleOverrides[slug] || title;

    if (id) {
        return (
            <Link
                href={`/[country]/product/${slug}`}
                as={`/${country}/product/${slug}`}
            >
                <a className={className}>{children || displayTitle}</a>
            </Link>
        );
    }
    return null;
};

export default ProductLink;
