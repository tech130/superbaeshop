import React from "react";
import Txt from "../styled/Txt";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";

const ProductPrice = ({ id, ...rest }) => {
    const product = useProduct(id);

    if (product.product_country) {
        return (
            <ProdPrice product_country={product.product_country} {...rest} />
        );
    }
    return null;
};

export const ProductPrices = ({ id, ...rest }) => {
    const product = useProduct(id);
    return (
        <Txt {...rest}>
            {product.product_country ? (
                <>
                    <ProdPrice
                        type="original_price"
                        product_country={product.product_country}
                        margin="0px 8px 0px 0px"
                        weight={300}
                    />
                    <ProdPrice
                        margin="0px 8px 0px 0px"
                        product_country={product.product_country}
                        weight={600}
                        {...rest}
                    />
                </>
            ) : (
                "Product unavailble for your country"
            )}
        </Txt>
    );
};

const ProdPrice = ({
    product_country = [],
    type = "selling_price",
    quantity = 1,
    ...rest
}) => {
    const productCountry = useProdCountry(product_country);

    if (productCountry && productCountry.country) {
        return (
            <Txt
                textDecor={type === "original_price" ? "line-through" : "none"}
                {...rest}
            >
                {productCountry.country.currency_type}
                {quantity * (productCountry[type] || 0)}{" "}
            </Txt>
        );
    }

    return null;
};

export default ProductPrice;
