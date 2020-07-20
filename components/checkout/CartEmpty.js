import React from "react";
import Flex from "../styled/Flex";
import Img from "../styled/Img";
import { H5 } from "../styled/Headings";

const CartEmpty = () => {
    return (
        <Flex alignItems="center" vertical justifyContent="center">
            <Img width="280px" src="/images/meanwhile.jpeg" alt="" />
            <H5 textAlign="center">Your cart is empty</H5>
        </Flex>
    );
};

export default CartEmpty;
