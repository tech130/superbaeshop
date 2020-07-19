import { fetchApi } from "../apiData";
import urls from "../../apiService/urls";
import { normalize } from "normalizr";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import { cartSchema } from "../product/schema";
import merge from "lodash.merge";

export const cartTyps = {
    load: "cart/load",
    update: "cart/update",
};

export const loadCartList = (payload) => {
    const { result, entities } = normalize(payload, [cartSchema]);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: cartTyps.load,
            payload: Array.isArray(result) ? result : [],
        });
    };
};

export const updateCartList = (payload) => {
    const { result, entities } = normalize(payload, [cartSchema]);
    console.log(result, entities);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: cartTyps.load,
            payload: Array.isArray(result) ? result : [],
        });
    };
};

export const fetchCart = () => {
    return (dispatch, getState) => {
        if (!getState().cartList.length) {
            return dispatch(
                fetchApi({ url: urls.cart }, `cartList`, loadCartList)
            );
        }
        return Promise.resolve();
    };
};

export const fetchCartAlways = () => {
    return (dispatch) => {
        return dispatch(fetchApi({ url: urls.cart }, `cartList`, loadCartList));
    };
};

export const UPLOAD_LOCAL_CART_APIDATA_KEY = "uploadLocalCart";

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
                { url: urls.cart, method: "POST", data },
                `uploadLocalCart`,
                loadCartList
            )
        );
    };
};

const update = (state, payload) => {
    return [...new Set(state.concat(payload).filter((x) => !!x))];
};

export const cartList = (state = [], action) => {
    switch (action.type) {
        case cartTyps.load:
            return action.payload;
        case cartTyps.update:
            return update(state, action.payload);
        default:
            return state;
    }
};

//cart list
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, action.payload.cart);
        default:
            return state;
    }
};
