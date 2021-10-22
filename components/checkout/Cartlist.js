import React, { useEffect, useState, useCallback, useMemo } from "react";
import { LocalCartItem, MyCartItem } from "./CartItem";
import useCart, { useLocalCart, useCartIsOpen } from "../../hooks/redux/checkout/useCart";
import { cartIsOpen } from "../../redux/user/local_cart";
import Flex from "../styled/Flex";
import useUser from "../../hooks/redux/user/useUser";
import CartSummary from "./CartSummary";
import CartSummarySmall from "./CartSummarySmall";
import { useDispatch } from "react-redux";
import { fetchCartAlways } from "../../redux/user/cart";
import { ApiContent } from "../common/DynamicContent";
import CartItemLoader from "./CartItemLoader";
import CouponIp from "./CouponIp";
import { Row, Col } from "styled-bootstrap-grid";
import CheckoutForm from "./CheckoutForm";
import { H4 } from "../styled/Headings";
import { useActiveCountry } from "../common/CountryLink";
import Txt from "../styled/Txt";
import Block from "../styled/Block";
import P from "../styled/P";
import CartEmpty from "./CartEmpty";
import LoginModalBtn from "../layout/LoginModalBtn";
import MaskAddOn from "./MaskAddOn";
import { toNum } from "../../utils";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useCountryParam } from "../common/CountryLink";
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll";
const FlexBg = styled.div`
  height: 49vh;
  width: 100%;
  background-color: #FFF444;
  background:linear-gradient( 90deg,#fde5e9 0%,rgb(255 244 244) 50%,#ffe4e8 100%);
  flex-direction: column;
  overflow-y: auto;
overflow-x: hidden;
`;
const FlexPayment = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 20px;
    justify-content: space-evenly;
    img {
    margin-bottom: 10px;
    padding: 2px;
}
`;
const FlexBgAmount = styled.div`
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
padding:15px
`;
const CartOutline = styled.div`
  width: 100%;
  padding: 0px;
  height: 40vh;
  overflow-y: auto;
`;
const CartRight = styled.div`
  width: 100%;
  padding: 0px 15px;
  height: 100%;
  position: relative;
`;
const Pad = styled.div`
  width: 100%;
  padding: 25px;
  
`;
const CartListOut = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:30px 0px;
  
`;
const VerticalLine = styled.div`
    width: 1px;
    padding: 0px;
    height: 100%;
    position: absolute;
    background: #ddd;
    z-index: 0;
    left: 0px;
    @media (max-width: 992px) {
        display:none;
    }
`;
const CartButton = styled.button`
padding: 15px 40px;
// border-radius: 8px;
// background-color: #262626;
color: #fff;
font-weight: 700;
font-size: 16px;
// width: calc(100% - 60px);
// margin: 0px 30px 5px 30px;
border:1px solid transparent;
background: linear-gradient(118deg, rgba(209,78,154,1) 14%, rgba(255,86,109,1) 60%);
padding: 8px 30px;
border-radius: 30px;
box-shadow:  rgb(251 145 159) 0px 8px 25px 0px;
margin: auto;
margin-bottom: 15px;
@media (max-width: 576px) {
    // width: 100%;
    // margin: 0px;
    font-size: 15px;
    padding: 15px 15px;
    box-shadow: unset;
}
`;
const Cartlist = () => {
    const { token } = useUser();
    const isPanel = useCartIsOpen();
    if (!token) {

        return <LocalCartList />;
    }
    return  <MyCartList />;
};
export const CartlistPanel = () => {
    useLockBodyScroll(true);
    const { token } = useUser();
    if (!token) {

        return <LocalCartListPanel />
    }
    return <MyCartListPanel /> ;
};

const LocalCartListPanel = () => {
    const list = useLocalCart();
    const cartSummary = useCartSummary(list);
    const country = useCountryParam();
    const router = useRouter();
    const dispatch = useDispatch();

    if (list.length > 0) {
        return (


            <div className="px-3">

                <Row>
                    <FlexBg>
                        <Col lg={12}>
                            {list.map((item) => (
                                <LocalCartItem {...item} key={item.id} />
                            ))}


                        </Col>
                    </FlexBg>
                    <FlexBgAmount>
                        <Col lg={12}>
                            <CartSummarySmall {...cartSummary} />
                            <CartButton onClick={() => {
                                router.push("/[country]/checkout", `/${country}/checkout`);
                                dispatch(cartIsOpen(false));
                            }
                            }>
                                PROCEED TO CHECKOUT
                            </CartButton>
                            <P fontSize="14px" margin="0px" textAlign="center">Shipping, taxes, and discounts added at checkout.</P>
                        </Col>
                    </FlexBgAmount>
                    <FlexPayment className="payment-icons" flexWrap>
                    <img
                                    src="/images/icons/payment/paypalSmall.svg"
                                    alt="amazon payment logo"
                                />
                                <img
                                    src="/images/icons/payment/amazonSmall.svg"
                                    alt="paypal payment logo"
                                />
                                <img
                                    src="/images/icons/payment/discoverSmall.svg"
                                    alt="discover pay logo"
                                />
                                {/* <img
                                    src="/images/icons/payment/googlepay.svg"
                                    alt="googlepay logo"
                                /> */}
                                <img
                                    src="/images/icons/payment/masterSmall.svg"
                                    alt="master logo"
                                />

                                <img
                                    src="/images/icons/payment/visaSmall.svg"
                                    alt="visa logo"
                                />
                    </FlexPayment>

                </Row>
            </div>

        );
    }
    return <CartEmpty />;
};
const LocalCartList = () => {
    const list = useLocalCart();
    const cartSummary = useCartSummary(list);
    if (list.length > 0) {
        return (
            
            // <Row>
                    <CartListOut className="row">

                    
                    <Col lg={8} sm={12}  mdOffset={2}>
                    <H4 mb="30px" textAlign="center" weight={700} >Cart List</H4>
                        {list.map((item) => (
                            <LocalCartItem {...item} key={item.id} />
                        ))}
                        <CartSummary list={list} {...cartSummary}  />
                        <Col lg={4} sm={6} mdOffset={4} smOffset={3}>
                        <LoginModalBtn
                            block
                            padding="5px 10px"
                                border="1px solid #000"
                                margin="0px 0px 3px"
                                className="new_btn_login no_box_shadow"
                        >
                            Login to Checkout
                        </LoginModalBtn>
                        <LoginModalBtn
                            fontSize="14px"
                            block
                            padding="5px"
                            margin="5px 0px"
                            isSignUp
                        >
                            <u>New User? Sign Up</u>
                        </LoginModalBtn>
                    </Col>
                    </Col>
                    {/* <Col lg={8} sm={12} mdOffset={2}>
                        <LoginModalBtn
                            block
                            border="2px solid #f5f5f5"
                            borderRadius="10px"
                            padding="5px"
                        >
                            Login to Checkout
                        </LoginModalBtn>
                        <LoginModalBtn
                            fontSize="14px"
                            block
                            padding="5px"
                            margin="5px 0px"
                            isSignUp
                        >
                            New User? Sign Up
                        </LoginModalBtn>
                    </Col> */}
            </CartListOut>
                // </Row>
        );
    }
    return <CartEmpty />;
};

const MyCartList = () => {
    const dispatch = useDispatch();
    const cartList = useCart();

    useEffect(() => {
        dispatch(fetchCartAlways());
    }, []);

    return (
        <ApiContent
            name="cartList"
            loader={
                <Row>
                    <Col lg={7}>
                        <CartItemLoader />
                        <CartItemLoader />
                    </Col>
                </Row>
            }
        >
            {cartList.list.length > 0 ? (
                <CartListWithForm {...cartList} />
            ) : (
                <CartEmpty />
            )}
        </ApiContent>
    );
};
const MyCartListPanel = () => {
    const dispatch = useDispatch();
    const cartList = useCart();
    const cartSummary = useCartSummary(cartList.list);
    const country = useCountryParam();
    const router = useRouter();
    useEffect(() => {
        dispatch(fetchCartAlways());
    }, []);
    
    return (
        <ApiContent
            name="cartList"
            loader={
                <Row>
                    <Col lg={6}>
                        <CartItemLoader />
                        <CartItemLoader />
                    </Col>
                </Row>
            }
        >
            {cartList.list.length > 0 ? (
                <div className="px-3">

                <Row>
                    <FlexBg>
                        <Col lg={12}>
                            {cartList.list.map((item) => (
                                <MyCartItem {...item} key={item.id} />
                            ))}


                        </Col>
                    </FlexBg>
                    <FlexBgAmount>
                        <Col lg={12}>
                            <CartSummarySmall {...cartSummary} />
                            <CartButton onClick={() => {

                                router.push("/[country]/checkout", `/${country}/checkout`);
                                dispatch(cartIsOpen(false));
                            }
                            }>
                                PROCEED TO CHECKOUT
                            </CartButton>
                            <P fontSize="14" margin="0px" textAlign="center">Shipping, taxes, and discounts added at checkout.</P>
                        </Col>
                    </FlexBgAmount>
                    <FlexPayment className="payment-icons" flexWrap>
                        <img
                            src="/images/icons/payment/paypalSmall.svg"
                            alt="amazon payment logo"
                        />
                        <img
                            src="/images/icons/payment/amazonSmall.svg"
                            alt="paypal payment logo"
                        />
                        <img
                            src="/images/icons/payment/discoverSmall.svg"
                            alt="discover pay logo"
                        />
                        <img
                            src="/images/icons/payment/masterSmall.svg"
                            alt="master logo"
                        />

                        <img
                            src="/images/icons/payment/visaSmall.svg"
                            alt="visa logo"
                        />
                    </FlexPayment>

                </Row>
            </div>
            ) : (
                <CartEmpty />
            )}
        </ApiContent>
    )

};

const calculateTotal = (activeCountry = {}, cart = []) => {
    const init = {
        total_quantity: 0,
        coupon_amount: 0,
        redeem_amount: toNum(activeCountry?.redeem_point_cash),
        shipping_fee: toNum(activeCountry?.shipping_fee),
        cartTotal: 0,
        impure: false,
        currency_type: activeCountry.currency_type,
    };
    if (cart.length > 0 && activeCountry.id) {
        return cart.reduce((acc, cur) => {

            const activeCon =  cur?.product?.product_country?.[activeCountry.id];
            const selling_price = activeCon ? activeCon.selling_price : 0;
            return {
                ...acc,
                impure: acc.impure ? acc.impure : activeCon ? false : true,
                total_quantity: acc.total_quantity + parseInt(cur.quantity, 10),
                cartTotal:
                    acc.cartTotal +
                    (selling_price
                        ? toNum(selling_price) *
                        parseInt(cur.quantity, 10) *
                        (cur.offer_avail ? 0.8 : 1)
                        : 0),
            };
        }, init);
    }
    return init;
};

export const useCartSummary = (cart) => {
    const { activeCountry } = useActiveCountry();
    return useMemo(() => calculateTotal(activeCountry, cart), [
        activeCountry,
        cart,
    ]);
};

const CartListWithForm = ({
    list = [],
    is_wallet = false,
    is_coupon = false,
    offer = {},
}) => {
    const [coupon, setCoupon] = useState({});
    const [redeem, setRedeem] = useState(false);
    const [activeAddress, setAtiveAddress] = useState('');

    const { user_points } = useUser();
    const walletPoints = parseFloat(user_points) || 0;

    const onCouponChange = useCallback((value) => {
        setCoupon(value);
    }, []);

    const onRedeemChange = useCallback((value) => {
        setRedeem(value);
    }, []);

    const cartSummary = useCartSummary(list);

    return (
        <Row>

            <Col lg={6} padding="0px">
                <Pad />
                {cartSummary.impure ? (
                    <Block
                        textAlign="center"
                        padding="10px"
                        borderRadius="10px"
                        border="2px solid #f5f5f5"
                    >
                        <Txt color="red" fontSize="14px">
                            You have products unavailable for this country in
                            your cart. Change country or remove these products
                            from your cart to continue checkout.
                        </Txt>
                    </Block>
                ) : (
                    <>
                        <H4 mb="20px">Checkout Details</H4>
                        <CheckoutForm setAtiveAddress={setAtiveAddress} coupon={coupon} redeem={redeem} />
                        <Pad />
                    </>
                )}
            </Col>
            <Col lg={6} padding="0px" className="p-0">
                <CartRight>
                    <VerticalLine />
                    <Pad />
                    <CartOutline>
                        {list.map((item) => (
                            <MyCartItem {...item} key={item.id} />
                        ))}
                    </CartOutline>
                    <CouponIp
                        coupon={coupon}
                        onCouponChange={onCouponChange}
                        redeem={redeem}
                        onRedeemChange={onRedeemChange}
                        walletPoints={walletPoints}
                        isWallet={is_wallet}
                        isCoupon={is_coupon}
                    />
                    <CartSummary
                        {...cartSummary}
                        activeAddress={activeAddress}
                        list={list}
                        redeem={redeem}
                        coupon={is_coupon ? coupon : undefined}
                        walletPoints={is_wallet ? walletPoints : undefined}
                        offerAmount={offer?.offer_amount}
                    />

                    <MaskAddOn />
                    <Pad />
                </CartRight>
            </Col>
        </Row>
    );
};

export default Cartlist;
