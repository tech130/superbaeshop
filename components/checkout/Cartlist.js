import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cartlist = () => {
    const cart = useSelector((state) => state.cart);

    return cart.map((item, idx) => <CartItem {...item} key={`${item.productId}---${idx}`} />);
};

export default Cartlist;
