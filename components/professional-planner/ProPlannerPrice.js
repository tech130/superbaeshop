import React from "react";
import { CartButton } from "../styled/Button";
import { H2 } from "../styled/Headings";
import Txt from "../styled/Txt";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/user/cart";
import { useProdCountry } from "../common/CountryLink";
import AddToCartBtn from "../checkout/AddToCartBtn";

const ProPlannerPrice = () => {
    const dispatch = useDispatch();
    const { id, title, product_country } = useSelector(
        (state) => state.product[1] || {}
    );
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <>
                <H2 mb="15px" weight={700}>
                    <Txt color="#777777">Priced just right at </Txt>
                    {productCountry.country.currency_type}
                    {productCountry.selling_price}
                </H2>
                <AddToCartBtn
                   id={id}
                   product_country={product_country}
                   title={title}
                />
            </>
        );
    }

    return null;
};

export default ProPlannerPrice;
