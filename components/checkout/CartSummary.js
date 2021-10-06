import React, { useState } from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import { Tooltip } from 'reactstrap';
const CartSum = styled.div`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
    position: relative;
`;

const CartSumItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const CartSumTitle = styled.span`
    font-weight: 600;
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    font-size: ${(props) => (props.font)};
`;
const ToolCustom = styled.span`
    font-weight: 700;
    position: absolute;
    right: -8px;
    bottom: 10px;
    font-size: 12px;
    margin: 3px;
    border: 1px solid #000000;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: black;
`;

const CartSumAmt = styled.span`
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    font-size: ${(props) => (props.font)};
`;

const SumItem = ({ title = "", bold = false, amt = "",font = "16px", href = "", id = "" }) => {
    return (
        <CartSumItem>
            <CartSumTitle bold={bold} font={font}>{title}</CartSumTitle>
            <CartSumAmt font={font} bold={bold}>{amt} </CartSumAmt>
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
    offerAmount = 0,
}) => {
    const redeemable = getRedeem(total_quantity, walletPoints);
    const wallet_amount = redeemable * redeem_amount;
    const couponAmt =
        coupon.id && coupon.payout
            ? (parseFloat(coupon.payout || 0) / 100) * cartTotal
            : 0;
    const total =
        shipping_fee +
        cartTotal -
        (redeem ? wallet_amount : couponAmt) -
        offerAmount;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <>
            <CartSum>
                {/* <SumItem
                    title="Cart Total"
                    amt={`${currency_type}${cartTotal.toFixed(2)}`}
                /> */}
                {/* <SumItem
                    title="Delivery Charge"
                    amt={`+ ${currency_type}${shipping_fee.toFixed(2)}`}
                /> */}
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
                            amt={`- ${currency_type}${wallet_amount.toFixed(
                                2
                            )}`}
                        />
                    </>
                ) : couponAmt ? (
                    <SumItem
                        title="Coupon Amount"
                        bold
                        amt={`- ${currency_type}${couponAmt.toFixed(2)}`}
                    />
                ) : null}
                {/* <SumItem
                    title="Offer Amount"
                    amt={`- ${currency_type}${offerAmount.toFixed(2)}`}
                /> */}

                <SumItem
                    title="Grand Total"
                    bold
                    font="18px"
                    amt={`${currency_type}${total.toFixed(2)}`}
                    
                />
                <ToolCustom href="#" id="DisabledAutoHideExample">!
                </ToolCustom>
                <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                    {/* <SumItem
                    title="Cart Total"
                    amt={`${currency_type}${cartTotal.toFixed(2)}`}
                />  */}
                    <SumItem
                        title="Delivery Charge"
                        amt={`+ ${currency_type}${shipping_fee.toFixed(2)}`}
                    />
                    <SumItem
                        title="Offer Amount"
                        amt={`- ${currency_type}${offerAmount.toFixed(2)}`}
                    />
                </Tooltip>
            </CartSum>
        </>
    );
};

export default CartSummary;
