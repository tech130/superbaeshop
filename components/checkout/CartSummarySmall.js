import React ,{useState}from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import { Tooltip } from 'reactstrap';

const CartSum = styled.div`
    
    margin-bottom: 15px;
`;

const CartSumItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => (props.mb || '0px')};
`;

const CartSumTitle = styled.span`
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    font-size: ${(props) => (props.font)}px;
`;

const CartSumAmt = styled.span`
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    font-size: ${(props) => (props.font)}px;
`;

const SumItem = ({ title = "",mb="", bold = false, amt = "", font = "16px", href = "", id = "" }) => {
    return (
        <CartSumItem mb={mb}>
            <CartSumTitle bold={bold} font={font} >{title}</CartSumTitle>
            <CartSumAmt font={font} bold={bold}><span href={href} id={id}>{amt}</span></CartSumAmt>
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
    let taxAmount = ((cartTotal - couponAmt) / 100) * 18
    const total =
        (shipping_fee +
        cartTotal -
        (redeem ? wallet_amount : couponAmt) -
        offerAmount)+taxAmount;
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    let FinalCharge = shipping_fee+taxAmount;
    return (
        <>
            <CartSum>
            <SumItem
            font="14px"
                    title="Subtotal"
                    amt={`${currency_type}${cartTotal.toFixed(2)}`}
                />
                <SumItem
                font="14px"
                    title="Taxes and Charges"
                    amt={`+ ${currency_type}${FinalCharge.toFixed(2)}`}
                />
                {/* <SumItem
                    title="Cart Total"
                    amt={`${currency_type}${cartTotal.toFixed(2)}`}
                />
                <SumItem
                    title="Delivery Charge"
                    amt={`+ ${currency_type}${shipping_fee.toFixed(2)}`}
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
                <SumItem
                    title="Offer Amount"
                    amt={`- ${currency_type}${offerAmount.toFixed(2)}`}
                /> */}
                <SumItem
                mb={"10px"}
                    title="Grand Total"
                    font="20"
                    bold
                    amt={`${currency_type}${total.toFixed(2)}`}
                    href="#" id="DisabledAutoHide"
                />
                <Tooltip placement="left" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHide" toggle={toggle}>
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
