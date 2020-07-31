import React, { useCallback } from "react";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry, useCountryParam } from "../common/CountryLink";
import { CartButton } from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addToLocalCart } from "../../redux/user/local_cart";
import useSubmit from "../../hooks/http/useSubmit";
import urls from "../../apiService/urls";
import { loadCartList } from "../../redux/user/cart";

export const AddToLocalCart = ({ className = "", productId, isPreOrder }) => {
    const dispatch = useDispatch();
    const country = useCountryParam();
    const inCart = useSelector(
        (state) =>
            state.local_cart.filter((item) => item.product === productId)
                .length > 0
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
            {isPreOrder ? "Pre Order" : "Add to cart"}
        </CartButton>
    );
};

const AddToCart = ({ className = "", productId, isPreOrder }) => {
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit((data) => {
        dispatch(loadCartList(data));
    });

    const onClick = useCallback(() => {
        submit({
            url: urls.cart,
            method: "POST",
            data: [
                {
                    product_id: productId,
                    quantity: 1,
                },
            ],
        });
    }, [productId]);

    return (
        <CartButton disabled={fetching} className={className} onClick={onClick}>
            {isPreOrder ? "Pre Order" : "Add to cart"}
        </CartButton>
    );
};

const ProductBuyBtn = ({ productId, isPreOrder }) => {
    const { token } = useUser();

    if (token) {
        return <AddToCart productId={productId} isPreOrder={isPreOrder} />;
    }
    return <AddToLocalCart productId={productId} isPreOrder={isPreOrder} />;
};

const ProductBuy = ({ productId }) => {
    const { id, is_pre_order, product_country } = useProduct(productId);
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return <ProductBuyBtn productId={id} isPreOrder={is_pre_order} />;
    }
    return null;
};

export default ProductBuy;
