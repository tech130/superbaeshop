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
import { updateCartList } from "../../redux/user/cart";

export const useAddToCart = (productId) => {
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit((data) => {
        dispatch(updateCartList(data));
    });

    const onAddToCart = useCallback(() => {
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

    return [fetching, onAddToCart];
};

export const useAddToLocalCart = (productId, slug) => {
    const dispatch = useDispatch();
    const inCart = useSelector(
        (state) =>
            state.local_cart.filter((item) => item.product === productId)
                .length > 0
    );

    const onAddToLocalCart = useCallback(() => {
        if (!inCart) {
            dispatch(addToLocalCart(productId, slug));
        }
    }, []);

    return [inCart, onAddToLocalCart];
};

export const GotoCart = () => {
    const country = useCountryParam();

    return (
        <Link href="/[country]/checkout" as={`/${country}/checkout`}>
            <CartButton>Go to Cart</CartButton>
        </Link>
    );
};

export const AddToLocalCart = ({
    className = "",
    productId,
    isPreOrder,
    slug,
}) => {
    const [inCart, onClick] = useAddToLocalCart(productId, slug);

    if (inCart) {
        return <GotoCart />;
    }
    return (
        <CartButton className={className} onClick={onClick}>
            {isPreOrder ? "Pre Order" : "Add to cart"}
        </CartButton>
    );
};

const AddToCart = ({ className = "", productId, isPreOrder, inCart }) => {
    const [fetching, onClick] = useAddToCart(productId);

    if (inCart && inCart.quantity) {
        return <GotoCart />;
    }
    return (
        <CartButton disabled={fetching} className={className} onClick={onClick}>
            {fetching
                ? "Adding to cart"
                : isPreOrder
                ? "Pre order"
                : "Add to cart"}
        </CartButton>
    );
};

const ProductBuyBtn = ({ productId, isPreOrder, inCart, slug }) => {
    const { token } = useUser();
    if (token) {
        return (
            <AddToCart
                productId={productId}
                inCart={inCart}
                isPreOrder={isPreOrder}
            />
        );
    }
    return (
        <AddToLocalCart
            productId={productId}
            isPreOrder={isPreOrder}
            slug={slug}
        />
    );
};

const ProductBuy = ({ slug }) => {
    const { id, is_pre_order, in_cart, product_country } = useProduct(slug);
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <ProductBuyBtn
                slug={slug}
                productId={id}
                inCart={in_cart}
                isPreOrder={is_pre_order}
            />
        );
    }
    return null;
};

export default ProductBuy;
