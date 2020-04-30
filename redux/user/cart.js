import { fetchApi } from "../apiData";
import { normalize } from "normalizr";
import { cartSchema } from "../product/schema";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";

export const cartTyps = {
    load: "cart/load",
    add: "cart/add",
    remove: "cart/remove",
};

//cart list
export const cartList = (state = [], action) => {
    switch (action.type) {
        case cartTyps.load:
            return action.payload;
        default:
            return state;
    }
};

//product reducer
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, action.payload.cart);
        default:
            return state;
    }
};

export const loadCartList = (payload) => {
    const { result, entities } = normalize(payload, [cartSchema]);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: cartTyps.load,
            payload: result,
        });
    };
};

export const fetchCart = (id) => {
    return (dispatch, getState) => {
        if (!getState().product[id]) {
            return dispatch(
                fetchApi(`cart/`, "cartList", (res) => loadCartList(res))
            );
        }
        return Promise.resolve();
    };
};
