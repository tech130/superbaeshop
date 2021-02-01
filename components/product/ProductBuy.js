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
    inCart
        ? "Go to Cart"
        : !inStock
        ? "Out of Stock"
        : isPreOrder
        ? "Pre Order"
        : `Add${fetching ? "ing" : ""} To Cart`;

export const useGotoCart = () => {
    const country = useCountryParam();
    const router = useRouter();
    return useCallback(() => {
        router.push("/[country]/checkout", `/${country}/checkout`);
    }, [country]);
};

export const useAddToCartApi = ({
    id,
    in_cart,
    is_pre_order,
    stock_status,
}) => {
    const goToCart = useGotoCart();
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit((data) => {
        dispatch(updateCartList(data));
    });

    const inCart = in_cart && in_cart.quantity;

    const onAddToCart = useCallback(() => {
        submit({
            url: urls.cart,
            method: "POST",
            data: [
                {
                    product_id: id,
                    quantity: 1,
                },
            ],
        });
    }, [id]);

    return {
        fetching,
        inCart,
        onClick: inCart ? goToCart : stock_status ? onAddToCart : null,
        btnText: getBtnText(inCart, stock_status, is_pre_order, fetching),
        isPreOrder: is_pre_order,
        inStock: !!stock_status,
    };
};

export const useAddToLocalCart = ({ id, slug, is_pre_order, stock_status }) => {
    const goToCart = useGotoCart();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.local_cart);

    const inCart = useMemo(() => {
        return list.filter((item) => item.product === id).length > 0;
    }, [list, id]);

    const onAddToLocalCart = useCallback(() => {
        dispatch(addToLocalCart(id, slug));
    }, [id, slug]);

    return {
        fetching: false,
        inCart,
        onClick: inCart ? goToCart : stock_status ? onAddToLocalCart : null,
        btnText: getBtnText(inCart, stock_status, is_pre_order),
        isPreOrder: is_pre_order,
        inStock: !!stock_status,
    };
};

export const useAddToCart = (product) => {
    const { token } = useUser();
    return token ? useAddToCartApi(product) : useAddToLocalCart(product);
};

export const AddToCart = ({ className = "", product = {} }) => {
    const { onClick, fetching, btnText, inStock } = useAddToCart(product);

    return (
        <Button
            disabled={fetching && inStock === false}
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
