import React from "react";
import styled from "styled-components";
import HR from "../styled/Hr";

const CartSum = styled.div`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CartSumItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const CartSumTitle = styled.span`
    font-weight: 600;
`;

const CartSumAmt = styled.span`
    font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

const SumItem = ({ title = "", bold = false, amt = "" }) => {
    return (
        <CartSumItem>
            <CartSumTitle>{title}</CartSumTitle>
            <CartSumAmt bold={bold}>{amt}</CartSumAmt>
        </CartSumItem>
    );
};

const getRedeem = (quantity = 0, walletPoints = 0) => {
    let redeemable = 0;
    if (quantity && walletPoints) {
        const max = quantity * 100;
        if (walletPoints > max) {
            return max;
        } else {
            redeemable = walletPoints;
        }
    }
    return redeemable;
};

const CartSummary = ({
    cartTotal = 0,
    shipping_fee = 0,
    currency_type,
    redeem_amount = 0,
    walletPoints = 0,
    total_quantity = 0,
    redeem = false,
    coupon = {},
}) => {
    const redeemable = getRedeem(total_quantity, walletPoints);
    const wallet_amount = redeemable * redeem_amount;
    const couponAmt =
        coupon.id && coupon.payout
            ? (parseFloat(coupon.payout || 0) / 100) * cartTotal
            : 0;
    const total =
        shipping_fee + cartTotal + (redeem ? wallet_amount : couponAmt);
    return (
        <>
            <CartSum>
                <SumItem
                    title="Cart Total"
                    amt={`${currency_type}${cartTotal}`}
                />
                <SumItem
                    title="Delivery Charge"
                    amt={`+ ${currency_type}${shipping_fee}`}
                />
                {redeem ? (
                    <>
                        <SumItem
                            title="Redeemable Points"
                            bold
                            amt={redeemable}
                        />
                        <SumItem
                            title="Redeem Amount"
                            bold
                            amt={`+ ${currency_type}${wallet_amount}`}
                        />
                    </>
                ) : couponAmt ? (
                    <SumItem
                        title="Coupon Amount"
                        bold
                        amt={`+ ${currency_type}${couponAmt}`}
                    />
                ) : null}
                <HR />
                <SumItem
                    title="Grand Total"
                    bold
                    amt={`+ ${currency_type}${total}`}
                />
            </CartSum>
        </>
    );
};

export default CartSummary;
