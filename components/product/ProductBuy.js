import React, { useCallback, useMemo } from "react";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry, useCountryParam } from "../common/CountryLink";
import Button from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCart } from "../../redux/user/local_cart";
import useSubmit from "../../hooks/http/useSubmit";
import urls from "../../apiService/urls";
import { updateCartList } from "../../redux/user/cart";
import { useRouter } from "next/router";
import styled from "styled-components";

export const getBtnText = (
    inCart = false,
    inStock = true,
    isPreOrder = false,
    fetching = false
) =>
    !inStock
        ? "Out of Stock"
        : inCart
        ? "Go to Cart"
        : isPreOrder
        ? "Pre Order"
        : `Add${fetching ? "ing" : ""} to Cart`;

export const useAddToCart = (productDetails = {}, options = {}) => {
    const { quantity = 1, isOffer = false } = options;
    const { id, in_cart, is_pre_order, stock_status, slug } = productDetails;
    const dispatch = useDispatch();
    const { token } = useUser();
    const country = useCountryParam();
    const router = useRouter();
    const list = useSelector((state) => state.local_cart);

    const [fetching, submit] = useSubmit((data) => {
        dispatch(updateCartList(data));
    });

    const inCart = useMemo(() => {
        if (token) {
            return in_cart && in_cart.quantity;
        }
        return list.length
            ? list.filter((item) => item.product === id).length > 0
            : false;
    }, [list, id, in_cart, token]);

    const onClick = useCallback(() => {
        if (inCart) {
            router.push("/[country]/checkout", `/${country}/checkout`);
        } else if (token) {
            submit({
                url: urls.updateCart,
                method: "POST",
                data: [
                    {
                        product_id: id,
                        quantity: quantity,
                        is_offer: isOffer,
                    },
                ],
            });
        } else {
            dispatch(addToLocalCart(id, slug, quantity));
        }
    }, [id, inCart, slug, quantity, isOffer]);

    return {
        fetching,
        inCart,
        onClick: stock_status ? onClick : null,
        btnText: getBtnText(inCart, stock_status, is_pre_order, fetching),
        isPreOrder: is_pre_order,
        inStock: !!stock_status,
    };
};

export const AddToCart = ({ className = "", product = {} }) => {
    const { onClick, fetching, btnText, inStock } = useAddToCart(product);

    return (
        <Button
            disabled={fetching || !inStock}
            className={className}
            onClick={onClick}
        >
            {btnText}
        </Button>
    );
};

export const CartButton = styled(AddToCart)`
    padding: 8px 30px;
    border-radius: 30px;
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: rgba(22, 53, 76, 0.18) 0px 7px 25px 0px;
`;

const ProductBuy = ({ slug }) => {
    const product = useProduct(slug);
    const productCountry = useProdCountry(product.product_country);

    if (productCountry && productCountry.country) {
        return <CartButton product={product} />;
    }
    return null;
};

export default ProductBuy;
