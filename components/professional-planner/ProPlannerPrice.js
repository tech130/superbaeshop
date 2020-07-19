import React from "react";
import { H2 } from "../styled/Headings";
import Txt from "../styled/Txt";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";
import ProductBuy from "../product/ProductBuy";

const ProPlannerPrice = () => {
    const { id, product_country } = useProduct(1);
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <>
                <H2 mb="15px" weight={700}>
                    <Txt color="#777777">Priced just right at </Txt>
                    {productCountry.country.currency_type}
                    {productCountry.selling_price}
                </H2>
                <ProductBuy productId={id} />
            </>
        );
    }

    return (
        <H2 mb="15px" weight={700}>
            <Txt color="#777777">Currently unavailable for your country </Txt>
        </H2>
    );
};

export default ProPlannerPrice;
