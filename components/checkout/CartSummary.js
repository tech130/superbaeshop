import React, { useMemo } from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import Flex from "../styled/Flex";
import P from "../styled/P";
import Txt from "../styled/Txt";
import { useActiveCountry } from "../common/CountryLink";

const CartSum = styled.div`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const calculateTotal = (code, cart = []) => {
    const init = { shipping_fee: 0, cartTotal: 0 };
    if (cart.length > 0 && code) {
        return cart
            .map(
                (item) =>
                    item.product_country.filter(
                        (x) => x.country.code === code
                    )[0] || {}
            )
            .reduce((acc, cur) => {
                // console.log(cur.country ? cur.country.shipping_free : 0)
                return {
                    shipping_fee: 0,
                    // acc.shipping_free + (cur.country ? cur.country.shipping_free : 0),
                    cartTotal:
                        acc.cartTotal +
                        (cur.selling_price ? cur.selling_price : 0),
                };
            }, init);
    }
    return init;
};

const CartSummary = ({ cart = [] }) => {
    const { activeCountry } = useActiveCountry();

    const { cartTotal, shipping_fee } = useMemo(
        () => calculateTotal(activeCountry.code, cart),
        [activeCountry, cart]
    );

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
                    <div>
                        {activeCountry.currency_type}
                        {cartTotal}
                    </div>
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0px 0px 10px"
                >
                    <P margin="0px" weight={700}>
                        Delivery Charge
                    </P>
                    <div>
                        + {activeCountry.currency_type}
                        {shipping_fee}
                    </div>
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
                    <Txt weight={700}>
                        {activeCountry.currency_type}
                        {shipping_fee + cartTotal}
                    </Txt>
                </Flex>
            </CartSum>
        </>
    );
};

export default CartSummary;
