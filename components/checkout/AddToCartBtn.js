import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartButton } from "../styled/Button";
import { addToCart } from "../../redux/user/local_cart";
import { useCountryParam } from "../common/CountryLink";
import Link from "next/link";

const AddToCartBtn = ({ className, id, title, product_country }) => {
    const dispatch = useDispatch();
    const country = useCountryParam();
    const inCart = useSelector(
        (state) => state.local_cart.filter((item) => item.productId === id).length > 0
    );

    const onClick = () => {
        if (!inCart) {
            dispatch(addToCart(id, title, product_country));
        }
    };

    if (inCart) {
        return (
            <Link href="/[country]/checkout" as={`/${country}/checkout`}>
                <CartButton as="a" className={className}>
                    Go to Cart
                </CartButton>
            </Link>
        );
    }
    return (
        <CartButton className={className} onClick={onClick}>
            Add to cart
        </CartButton>
    );
};

export default AddToCartBtn;
