import { fetchApi } from "../apiData";
import { normalize } from "normalizr";
import { productSchema } from "./schema";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";

export const updateProduct = (payload) => {
    const { entities } = normalize(payload, productSchema);
    return (dispatch) => dispatch(addEntity(entities));
};

export const fetchProduct = (id) => {
    return (dispatch, getState) => {
        if (!getState().product[id]) {
            return dispatch(
                fetchApi(`products/${id}/`, `product__${id}`, (res) =>
                    updateProduct(res)
                )
            );
        }
        return Promise.resolve();
    };
};

//product reducer
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, action.payload.product);
        default:
            return state;
    }
};
