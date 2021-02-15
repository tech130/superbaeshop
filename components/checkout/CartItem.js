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
import useSubmit from "../../hooks/http/useSubmit";
import urls from "../../apiService/urls";
import Loader from "../form/Loader";
import { updateCartList } from "../../redux/user/cart";

export const CartStyl = styled(Flex)`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
    position: relative;
`;

export const CartLdr = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
    border-radius: 10px;
`;

const CartItem = ({
    product = {},
    quantity,
    onRemove,
    onPlus,
    onMinus,
    fetching = false,
    is_offer = false,
}) => {
    const productCountry = useProdCountry(
        product ? product.product_country : {}
    );
    const isAvailable =
        productCountry &&
        productCountry.country &&
        productCountry.selling_price;

    return (
        <CartStyl alignItems="center">
            {fetching && (
                <CartLdr>
                    <Loader size={30} />
                </CartLdr>
            )}
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
                {isAvailable ? (
                    <>
                        <CartPrice
                            productCountry={productCountry}
                            quantity={quantity}
                            isOffer={is_offer}
                        />
                        <CartQuantity
                            quantity={quantity}
                            productId={product.id}
                            onPlus={onPlus}
                            onMinus={onMinus}
                        />
                    </>
                ) : (
                    <Txt weight={300} color="red" fontSize="14px">
                        Product unavailable for this country
                    </Txt>
                )}
            </FlexItem>
            <CartRemoveBtn productId={product.id} onClick={onRemove} />
        </CartStyl>
    );
};

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
            onMinus={onMinus}
            onPlus={onPlus}
        />
    );
};

export const MyCartItem = ({ product = {}, quantity, is_offer }) => {
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit((data) => {
        dispatch(updateCartList(data));
    });

    const handleChange = useCallback(
        (qty) => {
            submit({
                url: urls.cart,
                method: "POST",
                data: [
                    {
                        product_id: product.id,
                        quantity: qty,
                    },
                ],
            });
        },
        [product]
    );

    const onRemove = useCallback(() => {
        handleChange(0);
    }, []);

    const onPlus = useCallback(() => {
        if (quantity < 9) {
            handleChange(quantity + 1);
        }
    }, [quantity]);

    const onMinus = useCallback(() => {
        if (quantity > 1) {
            handleChange(quantity - 1);
        }
    }, [quantity]);

    return (
        <CartItem
            fetching={fetching}
            product={product}
            quantity={quantity}
            onRemove={onRemove}
            onMinus={onMinus}
            onPlus={onPlus}
            is_offer={is_offer}
        />
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

export const CartPrice = ({
    quantity = 0,
    productCountry,
    isOffer = false,
}) => {
    if (
        productCountry &&
        productCountry.country &&
        productCountry.selling_price
    ) {
        return (
            <Block margin="0px 0px 5px 0px">
                {isOffer ? (
                    <Block>
                        <Txt
                            weight={300}
                            textDecor="line-through"
                            fontSize="14px"
                            margin="0px 5px 0px 0px"
                        >
                            {productCountry.country.currency_type}
                            {(productCountry.selling_price || 0) * quantity}
                        </Txt>
                        <Txt weight={600} fontSize="16px" margin="0px 10px 0px 0px">
                            {productCountry.country.currency_type}
                            {(
                                (productCountry.selling_price || 0) *
                                quantity *
                                0.8
                            ).toFixed(2)}
                        </Txt>
                        <Txt fontSize="14px" weight={600} color="green">
                            Extra 20% off
                        </Txt>
                    </Block>
                ) : (
                    <>
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
                    </>
                )}
            </Block>
        );
    }
    return null;
};
