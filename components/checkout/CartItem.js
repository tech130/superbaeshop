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
import { toBoolean, toNum } from "../../utils";
import minus from '../../public/images/minus.png';
import plus from '../../public/images/add.png';

export const CartStyl = styled(Flex)`
    padding: 20px 10px;
    border-radius: 0px;
    margin-bottom: 0px;
    position: relative;
    border-bottom: 1px solid #ddd;
    @media (max-width: 576px) {
        padding: 20px 0px;
    }
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
export const ImgOutline = styled.div`
    border-radius:10px;
    // margin:0px 20px 0px 1px;
    max-width: 120px;
    max-height: 120px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const CartItem = ({
    product = {},
    quantity,
    onRemove,
    onPlus,
    onMinus,
    fetching = false,
    isOffer = false,
    discount,
    offer = {},
}) => {
    let productCountry = useProdCountry(
        product ? product.product_country : {}
    );
    productCountry = product.slug === "bundle-2021" ? product.product_country[0]:productCountry;
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
            <ImgOutline>
                <Img
                    margin="0px 0px 0px 0px"
                    width="120px"
                    src={product.thumbnail_image}
                    alt=""
                    
                />
            </ImgOutline>
            <FlexItem flexGrow={1} flexShrink={0} padding="0px 0px 0px 20px">
                <P margin="0px" weight={700} fontSize="18px">
                    {product.title}
                </P>
                {product.stock_status ? (
                    <>
                        {isAvailable ? (
                            <>
                                <CartPrice
                                    productCountry={productCountry}
                                    quantity={quantity}
                                    isOffer={isOffer}
                                    discount={discount}
                                    offer={offer}
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
                    </>
                ) : (
                    <Txt weight={300} color="red" fontSize="14px">
                        Out of Stock
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

export const MyCartItem = ({
    product = {},
    quantity,
    offer_avail,
    discount,
    offer,
}) => {
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit((data) => {
        dispatch(updateCartList(data));
    });

    const handleChange = useCallback(
        (qty) => {
            submit({
                url: urls.updateCart,
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
            isOffer={offer_avail}
            discount={discount}
            offer={offer}
        />
    );
};

const QtyBtn = styled(Button)`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
    // border: 1px solid #000000;
    font-weight: 700;
    line-height: 0;
    font-size: 16px;
    padding: 0px;
`;

const CartQty = styled.div`
    height: 24px;
    width: 35px;
    text-align: center;
    border: 0px;
    font-weight: 700;
    margin: 0px 0px;
    font-size: 16px;
`;

const OfferTypeStl = styled.span`
    display: inline-block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
        to right,
        #232526 0%,
        #414345 51%,
        #232526 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
    font-size: 12px;
    padding: 3px 9px;
    line-height: 12px;
    margin: 3px 5px 0px 0px;
    font-weight: 600;
`;

const CartQuantity = ({ quantity, onMinus, onPlus }) => {
    return (
        <Flex margin="10px 0px 0px 0px" alignItems="center">
            <QtyBtn className="btn cart-qty-btn" onClick={onMinus}>
                <img src={minus} alt="minus" />
            </QtyBtn>
            <CartQty>{quantity}</CartQty>
            <QtyBtn className="btn cart-qty-btn" onClick={onPlus}>
            <img src={plus} alt="plus" />
            </QtyBtn>
        </Flex>
    );
};

const CartRemoveBtn = ({ onClick }) => {
    return (
        <IconButton className="delete-trash" onClick={onClick}>
            <ThrashIcon size={18} strokeWidth={1} />
        </IconButton>
    );
};

export const CartPrice = ({
    quantity = 1,
    productCountry,
    isOffer = false,
    offer = {},
    discount = 0,
}) => {
    const currencyType = productCountry?.country?.currency_type;
    const strikedPrice = productCountry?.original_price;
    const price = productCountry?.selling_price;

    if (currencyType && price) {
        const totalStrikedPrice = strikedPrice * quantity;
        const totalPrice = price * quantity;
        const offerDiscount = isOffer ? totalPrice * 0.2 : 0;
        const totalDiscount = toNum(discount) + offerDiscount;
        const total = totalPrice - totalDiscount;

        return (
            <Block margin="5px 0px 5px 0px">
                <Block>
                    <Txt
                        weight={300}
                        textDecor="line-through"
                        fontSize="14px"
                        margin="0px 5px 0px 0px"
                    >
                        {currencyType}
                        {totalStrikedPrice.toFixed(2)}
                    </Txt>
                    <Txt weight={600} fontSize="16px" margin="0px 10px 0px 0px">
                        {currencyType}
                        {total.toFixed(2)}
                    </Txt>
                </Block>
                {toBoolean(totalDiscount) && (
                    <Block margin="0px 0px 2px 0px">
                        <Txt color="green" fontSize="13px" weight={600}>
                            Extra {currencyType}
                            {totalDiscount.toFixed(2)} off applied
                        </Txt>
                    </Block>
                )}
                {offer && offer.title && (
                    <Block margin="0px 0px 8px 0px">
                        <OfferTypeStl>{offer.title}</OfferTypeStl>
                    </Block>
                )}
            </Block>
        );
    }
    return null;
};
