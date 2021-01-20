import React from "react";
import { H4 } from "../styled/Headings";
import Txt from "../styled/Txt";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";
import ProductBuy from "../product/ProductBuy";
import ProductPrice from "../product/ProductPrice";

const ProPlannerPrice = () => {
    const { id, product_country, slug } = useProduct(
        "the-professional-planner"
    );
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <>
                <H4 mb="15px" weight={700}>
                    <Txt color="#777777">Priced just right at </Txt>
                    <ProductPrice
                        weight={300}
                        type="original_price"
                        slug={slug}
                    />{" "}
                    <ProductPrice slug={slug} />
                </H4>
                <ProductBuy slug={slug} />
            </>
        );
    }

    return (
        <H4 mb="15px" weight={700}>
            <Txt color="#777777">Currently unavailable for your country </Txt>
        </H4>
    );
};

export default ProPlannerPrice;
