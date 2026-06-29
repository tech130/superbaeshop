import React from "react";
import { useCountryParam } from "../common/CountryLink";
import Link from "next/link";
import useProduct from "../../hooks/redux/product/useProduct";

const productTitleOverrides = {
    "lets-goal-2021-planner": "My Space 2027 planner",
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
