import { fetchApi } from "../apiData";
import { normalize } from "normalizr";
import { productSchema } from "./schema";
import { addEntity, ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";
import urls from "../../apiService/urls";
import { cartTyps } from "../user/cart";

export const headerProductsTyps = {
    load: "headerproducts/load",
    clear: "headerproducts/clear",
};

//header products
export const loadHeaderProducts = (payload) => {
    const { result, entities } = normalize(payload, [productSchema]);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch({
            type: headerProductsTyps.load,
            payload: result,
        });
    };
};

//fetch header products
export const fetchHeaderProducts = () => {
    return (dispatch, getState) => {
        if (!getState().headerProducts.length) {
            return dispatch(
                fetchApi(
                    { url: urls.headerProducts },
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

export const similarProductsName = (slug) => `similarProducts---${slug}`;

//header products
export const loadSimilarProducts = (payload, slug) => {
    const { result, entities } = normalize(payload, [productSchema]);
    return (dispatch) => {
        dispatch(addEntity(entities));
        dispatch(
            addEntity({
                product: {
                    [slug]: {
                        similarProducts: result,
                    },
                },
            })
        );
    };
};

export const fetchSimilarProducts = (slug) => {
    return (dispatch) => {
        return dispatch(
            fetchApi(
                { url: urls.similarProducts(slug) },
                similarProductsName(slug),
                (payload) => loadSimilarProducts(payload, slug)
            )
        );
    };
};

const clearCart = (state) => {
    let upt = {};
    for (let key in state) {
        Object.assign(upt, {
            [key]: {
                in_cart: null,
            },
        });
    }
    return merge({}, state, upt);
};

//product reducer
export default function product(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, state, action.payload.product || {});
        case cartTyps.clear:
            return clearCart(state);
        default:
            return state;
    }
}
