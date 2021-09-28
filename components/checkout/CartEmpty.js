import React from "react";
import Flex from "../styled/Flex";
import Img from "../styled/Img";
import { H5 } from "../styled/Headings";
import styled from "styled-components";

const FlexBg = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
  height: 60vh;
  width: 100%;
  background-color: #FFF444;
  background:linear-gradient(
    90deg,rgb(255 237 237) 0%,rgb(246 244 244) 50%,rgb(216 230 234) 100%);;
  border-radius: 8px;
  flex-direction: column;
`;
const CartEmpty = () => {
    return (
        <Flex alignItems="center" vertical justifyContent="center">
            <Img width="280px" src="/images/meanwhile.jpeg" alt="" />
            <H5 textAlign="center">Your cart is empty</H5>
        </Flex>
    );
};

export default CartEmpty;
