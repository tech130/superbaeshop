import { fetchApi } from "../apiData";
import urls from "../../apiService/urls";
import { normalize } from "normalizr";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import { cartListSchema } from "../product/schema";
import merge from "lodash.merge";
import canUseDom from "../../utils/canUseDom";
import { isArray } from "../../utils";

export const cartTyps = {
    load: "cart/load",
    update: "cart/update",
    clear: "cart/clear",
};

export const normalizeCartList = (data) => normalize(data, cartListSchema);

export const loadCartList = (payload) => {
    const { result, entities } = normalizeCartList(payload);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: cartTyps.load,
            payload: result,
        });
    };
};

export const updateCartList = (payload) => {
    const { result, entities } = normalizeCartList(payload);
    return (dispatch, getState) => {
        dispatch(addEntity(entities));
        const cartList = getState().cartList.cart;
        const cartEntity = getState().cart;
        const removeProducts = cartList.reduce((acc, cur) => {
            if (isArray(result?.cart) && result.cart.includes(cur)) {
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
        console.log(removeProducts)
        dispatch(addEntity({ product: removeProducts }));
        dispatch({
            type: cartTyps.load,
            payload: result,
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
