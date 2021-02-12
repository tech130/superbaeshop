import { fetchApi } from "../apiData";
import urls from "../../apiService/urls";
import { normalize } from "normalizr";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import { cartSchema } from "../product/schema";
import merge from "lodash.merge";
import canUseDom from "../../utils/canUseDom";

export const cartTyps = {
    load: "cart/load",
    update: "cart/update",
    clear: "cart/clear",
};

export const loadCartList = (payload) => {
    const { cart, ...rest } = payload;
    const cartList = Array.isArray(cart) ? cart : [];
    const { result, entities } = normalize(cartList, [cartSchema]);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: cartTyps.load,
            payload: {
                cart: result,
                ...rest,
            },
        });
    };
};

export const updateCartList = (payload) => {
    const { cart, ...rest } = payload;
    const { result, entities } = normalize(cart, [cartSchema]);
    return (dispatch, getState) => {
        dispatch(addEntity(entities));
        const cartList = getState().cartList.cart;
        const cartEntity = getState().cart;
        const removeProducts = cartList.reduce((acc, cur) => {
            if (result.includes(cur)) {
                return acc;
            }
            if (cartEntity[cur] && cartEntity[cur].product) {
                return {
                    ...acc,
                    [`${cartEntity[cur].product}`]: {
                        in_cart: null,
                    },
                };
            }
            return acc;
        }, {});
        dispatch(addEntity({ product: removeProducts }));
        dispatch({
            type: cartTyps.load,
            payload: { cart: Array.isArray(result) ? result : [], ...rest },
        });
    };
};

export const fetchCart = () => {
    return (dispatch, getState) => {
        if (!getState().cartList.length) {
            return dispatch(
                fetchApi({ url: urls.listCart }, `cartList`, loadCartList)
            );
        }
        return Promise.resolve();
    };
};

export const fetchCartAlways = () => {
    return (dispatch) => {
        return dispatch(
            fetchApi({ url: urls.listCart }, `cartList`, loadCartList)
        );
    };
};

export const UPLOAD_LOCAL_CART_APIDATA_KEY = "uploadLocalCart";

export const localCartUploadSucc = (payload) => {
    if (canUseDom) {
        window.location.reload();
    }
    return (dispatch) => dispatch(loadCartList(payload));
};

export const uploadLocalCart = () => {
    return (dispatch, getState) => {
        const data = getState().local_cart.map((x) => {
            return {
                product_id: x.product,
                quantity: x.quantity,
            };
        });
        return dispatch(
            fetchApi(
                { url: urls.updateCart, method: "POST", data },
                UPLOAD_LOCAL_CART_APIDATA_KEY,
                localCartUploadSucc
            )
        );
    };
};

export const clearCart = () => {
    return {
        type: cartTyps.clear,
    };
};

const initCart = { cart: [] };

export const cartList = (state = initCart, action) => {
    switch (action.type) {
        case cartTyps.load:
            return action.payload;
        case cartTyps.clear:
            return initCart;
        default:
            return state;
    }
};

//cart
export default function cart(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, state, action.payload.cart || {});
        case cartTyps.clear:
            return {};
        default:
            return state;
    }
}
