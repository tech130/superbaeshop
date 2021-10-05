import React from "react";
import { useCountryParam } from "../common/CountryLink";
import Link from "next/link";
import useProduct from "../../hooks/redux/product/useProduct";

const ProductLink = ({ slug, children, className = "" }) => {
    const country = useCountryParam();
    const { id, title } = useProduct(slug);
    const data = useProduct(slug);
    console.log(data)

    if (id && slug!== 'bundle-2021'&& slug !== 'face-mask-bundle') {
        return (
            <Link
                href={`/[country]/product/${slug}`}
                as={`/${country}/product/${slug}`}
            >
                <a className={className}>{children || title === `Let's Goal 2021 Planner`?`My Space 2022 Planner`:title === `The Ultimate Sticker Book` ?'Sticker Book':title}</a>
            </Link>
        );
    }
    return null;
};

export default ProductLink;
