import { fetchApi } from "../apiData";
import { normalize } from "normalizr";
import { productSchema } from "./schema";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";
import urls from "../../apiService/urls";

export const headerProductsTyps = {
    load: "headerproducts/load",
    clear: "headerproducts/clear",
};

export const loadHeaderProducts = (payload) => {
    const { result, entities } = normalize(payload, [productSchema]);
    console.log(result, entities);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: headerProductsTyps.load,
            payload: result,
        });
    };
};

export const fetchHeaderProducts = () => {
    return (dispatch, getState) => {
        if (!getState().headerProducts.length) {
            return dispatch(
                fetchApi(
                    { url: urls.products },
                    `headerProducts`,
                    loadHeaderProducts
                )
            );
        }
        return Promise.resolve();
    };
};

export const headerProducts = (state = [], action) => {
    switch (action.type) {
        case headerProductsTyps.load:
            return Array.isArray(action.payload) ? action.payload : [];
        case headerProductsTyps.clear:
            return [];
        default:
            return state;
    }
};

export const updateProduct = (payload) => {
    const { entities } = normalize(payload, productSchema);
    return (dispatch) => dispatch(addEntity(entities));
};

export const fetchProduct = (id) => {
    return (dispatch, getState) => {
        const product = getState().product[id] || {};
        if (!product.id && !product.product_country) {
            return dispatch(
                fetchApi(
                    { url: urls.productDetail(id) },
                    `product__${id}`,
                    updateProduct
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
            return merge({}, state, action.payload.product || {});
        default:
            return state;
    }
};
