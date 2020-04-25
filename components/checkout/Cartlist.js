import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cartlist = ({cart = []}) => {
    return cart.map((item, idx) => (
        <CartItem {...item} key={`${item.productId}---${idx}`} />
    ));
};

export default Cartlist;
