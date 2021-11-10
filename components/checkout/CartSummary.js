import React, { useEffect,useState } from "react";
import styled from "styled-components";
import HR from "../styled/Hr";
import { Tooltip } from 'reactstrap';
import { eventForPixelAddToCart } from "../../utils/analytics";
import { useProdCountry } from "../common/CountryLink";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/user/user";
import useUser from "../../hooks/redux/user/useUser";
import urls from "../../apiService/urls";
import useSubmit from "../../hooks/http/useSubmit";
import  { useActiveCountry } from "../common/CountryLink";

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

const SumItem = ({ title = "", bold = false, amt = "",font = "16px", href = "", id = "",list=[],total='' }) => {
    // if(list.length>0&&total!==''){
    //     const {product_country}=list[0];
    //     const productCountry = useProdCountry(product_country);
    //     let currencyCode = productCountry.country? productCountry.country.code:'INR';
    //     let ids =list.map(item=>{return item.id})
    //     console.log(ids)
    //     eventForPixelAddToCart('AddToCart',ids,currencyCode,total);
    // }
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
    list=[],
    activeAddress=''
}) => {

    const user = useUser();
    const { token } = user;
    const {activeCountry} = useActiveCountry();
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    useEffect(() => {
        
        if(token&&activeCountry.id&&activeAddress.postal_code){

            submit({
                url: urls.deliveryCharge(activeCountry.id,activeAddress.postal_code ),
                method: "GET",
            });
        }
        
        
        // return () => {setAddToCartList();}
    }, [token,activeAddress]);
    const [fetching, submit] = useSubmit((succFunc) => {
        setDeliveryCharge(succFunc.amount);
        setAddToCartList();
    });
    let productCountry={};
    if(list.length>0){

        const {product_country}=list[0];
        productCountry   = useProdCountry(product_country);
    }

    const redeemable = getRedeem(total_quantity, walletPoints);
    const wallet_amount = redeemable * redeem_amount;
    const couponAmt =
        coupon.id && coupon.payout
            ? (parseFloat(coupon.payout || 0) / 100) * cartTotal
            : 0;
    let taxAmount = ((cartTotal - couponAmt) / 100) * 18
    const total =
        (deliveryCharge +
        cartTotal -
        (redeem ? wallet_amount : couponAmt) -
        offerAmount)+taxAmount;

    // const [tooltipOpen, setTooltipOpen] = useState(false);

    // const toggle = () => setTooltipOpen(!tooltipOpen);
    let FinalCharge = taxAmount;
    
    // if(list.length>0){
    //     const {product_country}=list[0];
    //     const productCountry = useProdCountry(product_country);
    //     let currencyCode = productCountry.country? productCountry.country.code:'INR';
    //     let ids =list.map(item=>{return item.id})
    //     eventForPixelAddToCart('AddToCart',ids,currencyCode,total);
    // }
   const setAddToCartList=()=>{
    if(list.length>0&&total!==''){
        let currencyCode = productCountry.country? productCountry.country.code:'INR';
        let ids =list.map(item=>{return item.product.sku})
        eventForPixelAddToCart('AddToCart',ids,currencyCode,total.toFixed(2));
    }
   }
    return (
        <>
            <CartSum>
                <SumItem
                    title="Subtotal"
                    amt={`${currency_type}${cartTotal.toFixed(2)}`}
                />
                <SumItem
                    title="Taxes and Charges"
                    amt={`+ ${currency_type}${FinalCharge.toFixed(2)}`}
                />
                {
                    token&&
                    <SumItem
                        title="Shipping"
                        amt={fetching?'...loading': `+ ${currency_type}${deliveryCharge.toFixed(2)}`}
                    />
                }
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
                    list={list}
                    total={total}
                />
                {/* <ToolCustom href="#" id="DisabledAutoHideExample">!
                </ToolCustom>
                <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                  
                    <SumItem
                        title="Delivery Charge"
                        amt={`+ ${currency_type}${shipping_fee.toFixed(2)}`}
                    />
                    <SumItem
                        title="Offer Amount"
                        amt={`- ${currency_type}${offerAmount.toFixed(2)}`}
                    />
                </Tooltip> */}
            </CartSum>
        </>
    );
};

export default CartSummary;
