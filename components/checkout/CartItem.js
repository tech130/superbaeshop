import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import Block from "../styled/Block";
import Button, { IconButton } from "../styled/Button";
import ThrashIcon from "../icons/ThrashIcon";
import Txt from "../styled/Txt";
import { useDispatch } from "react-redux";
import { cartMinus, cartRemove, cartPlus } from "../../redux/user/cart";
import { useProdCountry } from "../common/CountryLink";

const CartStyl = styled(Flex)`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CartItem = ({ title, product_country, productId, quantity }) => {
    return (
        <CartStyl alignItems="center">
            <Img
                margin="0px 15px 0px 0px"
                width="100px"
                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                alt=""
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <P margin="0px" weight={500} fontSize="16px">
                    {title}
                </P>
                <CartPrice product_country={product_country} quantity={quantity} />
                <CartQuantity quantity={quantity} productId={productId} />
            </FlexItem>
            <CartRemoveBtn productId={productId} />
        </CartStyl>
    );
};

const QtyBtn = styled(Button)`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #cecece;
    font-weight: 600;
    line-height: 0;
`;

const CartQty = styled.div`
    height: 25px;
    width: 40px;
    text-align: center;
    border: 1px solid #cecece;
    font-weight: 500;
    margin: 0px 10px;
    font-size: 14px;
`;

const CartQuantity = ({ quantity, productId }) => {
    const dispatch = useDispatch();

    return (
        <Flex alignItems="center">
            <QtyBtn
                className="btn cart-qty-btn"
                onClick={() => dispatch(cartMinus(productId))}
            >
                -
            </QtyBtn>
            <CartQty>{quantity}</CartQty>
            <QtyBtn
                className="btn cart-qty-btn"
                onClick={() => dispatch(cartPlus(productId))}
            >
                +
            </QtyBtn>
        </Flex>
    );
};

const CartRemoveBtn = ({ productId }) => {
    const dispatch = useDispatch();

    return (
        <IconButton onClick={() => dispatch(cartRemove(productId))}>
            <ThrashIcon size={18} strokeWidth={1} />
        </IconButton>
    );
};

const CartPrice = ({ product_country = [], quantity = 0 }) => {
    const productCountry = useProdCountry(product_country);

    return (
        <Block margin="0px 0px 5px 0px">
            <Txt
                weight={300}
                textDecor="line-through"
                fontSize="14px"
                margin="0px 5px 0px 0px"
            >
                {productCountry.country.currency_type}
                {productCountry.original_price * quantity}
            </Txt>
            <Txt weight={600} fontSize="16px">
                {productCountry.country.currency_type}
                {productCountry.selling_price * quantity}
            </Txt>
            <span> (40% off)</span>
        </Block>
    );
};

export default CartItem;
