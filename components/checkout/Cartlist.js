import React, { useEffect } from "react";
import { LocalCartItem, MyCartItem } from "./CartItem";
import useCart, { useLocalCart } from "../../hooks/redux/checkout/useCart";
import useUser from "../../hooks/redux/user/useUser";
import CartSummary from "./CartSummary";
import { useDispatch } from "react-redux";
import { fetchCartAlways } from "../../redux/user/cart";
import { ApiContent } from "../common/DynamicContent";
import CartItemLoader from "./CartItemLoader";

const Cartlist = () => {
    const { token } = useUser();
    if (!token) {
        return <LocalCartList />;
    }
    return <MyCartList />;
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

const MyCartList = () => {
    const dispatch = useDispatch();
    const list = useCart();

    useEffect(() => {
        dispatch(fetchCartAlways());
    }, []);

    return (
        <ApiContent
            name="cartList"
            loader={
                <>
                    <CartItemLoader />
                    <CartItemLoader />
                </>
            }
        >
            <CartSummary cart={list} />
            {list.map((item) => (
                <MyCartItem {...item} key={item.id} />
            ))}
        </ApiContent>
    );
};

export default Cartlist;
