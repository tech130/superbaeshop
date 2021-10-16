import React, { useCallback, useMemo } from "react";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry, useCountryParam } from "../common/CountryLink";
import Button from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCart,cartIsOpen } from "../../redux/user/local_cart";
import useSubmit from "../../hooks/http/useSubmit";
import urls from "../../apiService/urls";
import { updateCartList } from "../../redux/user/cart";
import { useRouter } from "next/router";
import styled ,{keyframes}from "styled-components";

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

export const useAddToCart = (productDetails = {},planner='', options = {}) => {
    const { quantity = 1, isOffer = false } = options;
    const { id, in_cart, is_pre_order, stock_status, slug,color_code='' } = productDetails;
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
                        color_code:planner === 'black-planner' ? 'black':''
                    },
                ],
            });
          
            dispatch(cartIsOpen(true));
        } else {
            dispatch(addToLocalCart(id, slug, quantity));
            
             dispatch(cartIsOpen(true));
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

export const AddToCart = ({ className = "", product = {},planner='' }) => {
    const { onClick, fetching, btnText, inStock } = useAddToCart(product,planner);
    return (
        <Button
            disabled={fetching || !inStock}
            className={className}
            onClick={onClick}
            bg="white"

        >
            {btnText}
            {/* <AnimateText>{btnText}</AnimateText> */}
        </Button>
    );
};

export const CartButton = styled(AddToCart)`
    padding: 8px 30px;
    border-radius: 30px;
    // background-color: #000;
    background: linear-gradient(118deg, rgba(209,78,154,1) 14%, rgba(255,86,109,1) 60%);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow:  rgb(251 145 159) 0px 8px 25px 0px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 20px;
    box-shadow: unset;

    }
`;
const rainbow_animation = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;
export const NewButton = styled.button`
    padding: 8px 30px;
    border-radius: 30px;
    color: black;
    font-weight: 700;
    font-size: 16px;
    box-shadow: rgb(251 145 159) 0px 8px 25px 0px;
    background: linear-gradient(90deg,#60bbf1,#c6e1f1,#f57e93,#b4a8ff,#c8f1ff,#eda5b2);
    animation: ${rainbow_animation} 4s ease-in-out infinite;
    background-size: 300% 100%;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 20px;
    }
`;

const ProductBuy = ({ slug,addition="",planner="" }) => {
    let product={};
    let product_country={};
    if(addition === "bundle-2021"){
       let tempProduct = useProduct(slug);
       product=tempProduct.sub_product;
       product_country=tempProduct.product_country;
    }else{

        product = useProduct(slug);
        product_country=product.product_country
    }
    const productCountry = useProdCountry(product_country);
    if(planner === 'black-planner'){
        product["color"]='black';
    }
    if (productCountry && productCountry.country) {
        return <>
        <CartButton product={product} planner={planner}/> 
        {/* <NewButton>Add to cart</NewButton>  */}
        </>;
    }
    return null;
};

export default ProductBuy;
