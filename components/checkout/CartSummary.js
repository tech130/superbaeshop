import React from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import Flex from "../styled/Flex";
import P from "../styled/P";
import Txt from "../styled/Txt";

const CartSum = styled.div`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CartSummary = () => {
    return (
        <>
            <CartSum>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0px 0px 10px"
                >
                    <P margin="0px" weight={700}>
                        Cart Total
                    </P>
                    <div>₹1536</div>
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0px 0px 10px"
                >
                    <P margin="0px" weight={700}>
                        Delivery Charge
                    </P>
                    <div>+ ₹0</div>
                </Flex>
                <HR />
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0px 0px 10px"
                >
                    <P margin="0px" weight={700}>
                        Grand Total
                    </P>
                    <Txt weight={700}>₹1536</Txt>
                </Flex>
            </CartSum>
        </>
    );
};

export default CartSummary;
