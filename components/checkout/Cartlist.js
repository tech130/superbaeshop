import React, { useEffect, useState, useCallback, useMemo } from "react";
import { LocalCartItem, MyCartItem } from "./CartItem";
import useCart, { useLocalCart } from "../../hooks/redux/checkout/useCart";
import useUser from "../../hooks/redux/user/useUser";
import CartSummary from "./CartSummary";
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
import CartEmpty from "./CartEmpty";
import LoginModalBtn from "../layout/LoginModalBtn";

const Cartlist = () => {
    const { token } = useUser();
    if (!token) {
        return <LocalCartList />;
    }
    return <MyCartList />;
};

const LocalCartList = () => {
    const list = useLocalCart();
    const cartSummary = useCartSummary(list);

    if (list.length > 0) {
        return (
            <Row>
                <Col lg={7}>
                    <CartSummary {...cartSummary} />
                    {list.map((item) => (
                        <LocalCartItem {...item} key={item.id} />
                    ))}
                </Col>
                <Col lg={5}>
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
                </Col>
            </Row>
        );
    }
    return <CartEmpty />;
};

const MyCartList = () => {
    const dispatch = useDispatch();
    const list = useCart();

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
            {list.length > 0 ? <CartListWithForm list={list} /> : <CartEmpty />}
        </ApiContent>
    );
};

const CartListWithForm = ({ list = [] }) => {
    const [coupon, setCoupon] = useState("");
    const [redeem, setRedeem] = useState(false);

    const onCouponChange = useCallback((value) => {
        console.log(value);
        setCoupon(value);
    }, []);

    const onRedeemChange = useCallback((value) => {
        setRedeem(value);
    }, []);

    const cartSummary = useCartSummary(list);

    return (
        <Row>
            <Col lg={7}>
                <CouponIp
                    coupon={coupon}
                    onCouponChange={onCouponChange}
                    redeem={redeem}
                    onRedeemChange={onRedeemChange}
                />
                <CartSummary {...cartSummary} />
                {list.map((item) => (
                    <MyCartItem {...item} key={item.id} />
                ))}
            </Col>
            <Col lg={5}>
                {cartSummary.impure ? (
                    <Block
                        textAlign="center"
                        padding="10px"
                        borderRadius="10px"
                        border="2px solid #f5f5f5"
                    >
                        <Txt color="red" fontSize="14px">
                            You have products unavaible for this country in your
                            cart. Change country or remove these products from
                            your cart to continue checkout.
                        </Txt>
                    </Block>
                ) : (
                    <>
                        <H4>Checkout Details</H4>
                        <CheckoutForm coupon={coupon} redeem={redeem} />
                    </>
                )}
            </Col>
        </Row>
    );
};

const calculateTotal = (activeCountry, cart = []) => {
    const init = {
        shipping_fee: 0,
        cartTotal: 0,
        impure: false,
        currency_type: activeCountry.currency_type,
    };
    if (cart.length > 0 && activeCountry.id) {
        return cart.reduce((acc, cur) => {
            const activeCon =
                cur.product &&
                cur.product.product_country &&
                cur.product.product_country[activeCountry.id]
                    ? cur.product.product_country[activeCountry.id]
                    : null;
            if (!activeCon) {
                return {
                    ...acc,
                    impure: true,
                };
            }
            const selling_price = activeCon ? activeCon.selling_price : 0;
            return {
                ...acc,
                shipping_fee: 0,
                // acc.shipping_free + (cur.country ? cur.country.shipping_free : 0),
                cartTotal:
                    acc.cartTotal +
                    (selling_price
                        ? parseFloat(selling_price) * parseInt(cur.quantity, 10)
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

export default Cartlist;
