import React, { useCallback } from "react";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry, useCountryParam } from "../common/CountryLink";
import { CartButton } from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addToLocalCart } from "../../redux/user/local_cart";

export const AddToLocalCart = ({ className = "", productId }) => {
    const dispatch = useDispatch();
    const country = useCountryParam();
    const inCart = useSelector(
        (state) =>
            state.local_cart.filter((item) => item.product === productId).length > 0
    );

    const onClick = useCallback(() => {
        if (!inCart) {
            dispatch(addToLocalCart(productId));
        }
    }, []);

    if (inCart) {
        return (
            <Link href="/[country]/checkout" as={`/${country}/checkout`}>
                <CartButton>Go to Cart</CartButton>
            </Link>
        );
    }
    return (
        <CartButton className={className} onClick={onClick}>
            Add to cart
        </CartButton>
    );
};

const ProductBuyBtn = ({ productId }) => {
    const { token } = useUser();

    if (token) {
        return null;
    }
    return <AddToLocalCart productId={productId} />;
};

const ProductBuy = ({ productId }) => {
    const { id, is_pre_order, product_country } = useProduct(productId);
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <ProductBuyBtn productId={productId} is_pre_order={is_pre_order} />
        );
    }
    return null;
};

export default ProductBuy;
