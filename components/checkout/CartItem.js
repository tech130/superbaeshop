import React, { useCallback } from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import Block from "../styled/Block";
import Button, { IconButton } from "../styled/Button";
import ThrashIcon from "../icons/ThrashIcon";
import Txt from "../styled/Txt";
import { useDispatch } from "react-redux";
import { cartMinus, cartRemove, cartPlus } from "../../redux/user/local_cart";
import { useProdCountry } from "../common/CountryLink";

const CartStyl = styled(Flex)`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const LocalCartItem = ({ product = {}, quantity }) => {
    const dispatch = useDispatch();
    const onRemove = useCallback(() => dispatch(cartRemove(product.id)), [
        product,
    ]);

    const onPlus = useCallback(() => dispatch(cartPlus(product.id)), [product]);
    const onMinus = useCallback(() => dispatch(cartMinus(product.id)), [
        product,
    ]);

    return (
        <CartItem
            product={product}
            quantity={quantity}
            onRemove={onRemove}
            onPlus={onPlus}
            onMinus={onMinus}
        />
    );
};

export const CartItem = ({
    product = {},
    quantity,
    onRemove,
    onMinus,
    onPlus,
}) => {
    return (
        <CartStyl alignItems="center">
            <Img
                margin="0px 15px 0px 0px"
                width="100px"
                src={product.thumbnail_image}
                alt=""
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <P margin="0px" weight={500} fontSize="16px">
                    {product.title}
                </P>
                <CartPrice
                    product_country={product.product_country}
                    quantity={quantity}
                />
                <CartQuantity
                    quantity={quantity}
                    productId={product.id}
                    onPlus={onPlus}
                    onMinus={onMinus}
                />
            </FlexItem>
            <CartRemoveBtn productId={product.id} onClick={onRemove} />
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

const CartQuantity = ({ quantity, onMinus, onPlus }) => {
    return (
        <Flex alignItems="center">
            <QtyBtn className="btn cart-qty-btn" onClick={onMinus}>
                -
            </QtyBtn>
            <CartQty>{quantity}</CartQty>
            <QtyBtn className="btn cart-qty-btn" onClick={onPlus}>
                +
            </QtyBtn>
        </Flex>
    );
};

const CartRemoveBtn = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <ThrashIcon size={18} strokeWidth={1} />
        </IconButton>
    );
};

const CartPrice = ({ product_country, quantity = 0 }) => {
    const productCountry = useProdCountry(product_country);

    if (productCountry) {
        return (
            <Block margin="0px 0px 5px 0px">
                <Txt
                    weight={300}
                    textDecor="line-through"
                    fontSize="14px"
                    margin="0px 5px 0px 0px"
                >
                    {productCountry.country.currency_type}
                    {(productCountry.original_price || 0) * quantity}
                </Txt>
                <Txt weight={600} fontSize="16px">
                    {productCountry.country.currency_type}
                    {(productCountry.selling_price || 0) * quantity}
                </Txt>
            </Block>
        );
    }
    return null;
};
