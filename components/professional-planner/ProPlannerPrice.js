import React from "react";
import { H2 } from "../styled/Headings";
import Txt from "../styled/Txt";
import { useSelector } from "react-redux";
import { useProdCountry } from "../common/CountryLink";
import AddToCartBtn from "../checkout/AddToCartBtn";
import { CartButton } from "../styled/Button";
import useProduct from "../../hooks/redux/product/useProduct";

const ProPlannerPrice = () => {
    const { id, title, product_country, is_pre_order } = useProduct(1);
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <>
                <H2 mb="15px" weight={700}>
                    <Txt color="#777777">Priced just right at </Txt>
                    {productCountry.country.currency_type}
                    {productCountry.selling_price}
                </H2>
                {is_pre_order ? (
                    <CartButton>Pre Order Now</CartButton>
                ) : (
                    <AddToCartBtn
                        id={id}
                        product_country={product_country}
                        title={title}
                    />
                )}
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
