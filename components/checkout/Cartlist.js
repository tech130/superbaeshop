import React from "react";
import { LocalCartItem } from "./CartItem";
import { useLocalCart } from "../../hooks/redux/checkout/useCart";
import useUser from "../../hooks/redux/user/useUser";
import CartSummary from "./CartSummary";
// import CartSummary from "./CartSummary";

const Cartlist = () => {
    const { token } = useUser();
    if (!token) {
        return <LocalCartList />;
    }
    return null;
};

const LocalCartList = () => {
    const list = useLocalCart();
    return (
        <>
            <CartSummary cart={list} />
            {list.map((item) => (
                <LocalCartItem {...item} key={item.id} />
            ))}
        </>
    );
};

export default Cartlist;
