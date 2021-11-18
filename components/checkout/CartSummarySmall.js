import React ,{useState,useEffect}from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import { Tooltip } from 'reactstrap';
import useUser from "../../hooks/redux/user/useUser";
import urls from "../../apiService/urls";
import useSubmit from "../../hooks/http/useSubmit";
import  { useActiveCountry } from "../common/CountryLink";
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
    currency_type,
    redeem_amount = 0,
    walletPoints = 0,
    total_quantity = 0,
    redeem = false,
    coupon = {},
    offerAmount = 0,
}) => {
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const redeemable = getRedeem(total_quantity, walletPoints);
    const wallet_amount = redeemable * redeem_amount;
    const couponAmt =
        coupon.id && coupon.payout
            ? (parseFloat(coupon.payout || 0) / 100) * cartTotal
            : 0;
    let taxAmount = ((cartTotal - couponAmt) / 100) * 12

    const total =
        (deliveryCharge +
        cartTotal -
        (redeem ? wallet_amount : couponAmt) -
        offerAmount)+taxAmount;
    let FinalCharge = taxAmount;
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
                {
                    deliveryCharge > 0&&
                    <SumItem
                        title="Shipping"
                        amt={fetching?'...loading': `+ ${currency_type}${deliveryCharge.toFixed(2)}`}
                    />
                }
                <SumItem
                mb={"10px"}
                    title="Grand Total"
                    font="20"
                    bold
                    amt={`${currency_type}${total.toFixed(2)}`}
                    href="#" id="DisabledAutoHide"
                />
            </CartSum>
        </>
    );
};

export default CartSummary;
