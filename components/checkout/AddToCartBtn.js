import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartButton } from "../styled/Button";
import { toggleCart } from "../../redux/user/cart";
import { useRouter } from "next/router";
import { useCountryParam } from "../common/CountryLink";
import Link from "next/link";

const AddToCartBtn = ({ className, id, title, product_country }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const country = useCountryParam();
    const inCart = useSelector(
        (state) => state.cart.filter((item) => item.productId === id).length > 0
    );

    const onClick = () => {
        if (inCart) {
            router.push(`/${country}/checkout`);
        } else {
            dispatch(toggleCart(id, title, product_country));
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
