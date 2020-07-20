import React, { useEffect, useState, useCallback } from "react";
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

const Cartlist = () => {
    const { token } = useUser();
    if (!token) {
        return <LocalCartList />;
    }
    return <MyCartList />;
};

const LocalCartList = () => {
    const list = useLocalCart();
    return (
        <Row>
            <Col lg={7}>
                <CartSummary cart={list} />
                {list.map((item) => (
                    <LocalCartItem {...item} key={item.id} />
                ))}
            </Col>
        </Row>
    );
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
            {list.length > 0 && <CartListWithForm list={list} />}
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

    return (
        <Row>
            <Col lg={7}>
                <CartSummary cart={list} />
                {list.map((item) => (
                    <MyCartItem {...item} key={item.id} />
                ))}
                <CouponIp
                    coupon={coupon}
                    onCouponChange={onCouponChange}
                    redeem={redeem}
                    onRedeemChange={onRedeemChange}
                />
            </Col>
            <Col lg={5}>
                <H4>Checkout Details</H4>
                <CheckoutForm coupon={coupon} redeem={redeem} />
            </Col>
        </Row>
    );
};

export default Cartlist;
