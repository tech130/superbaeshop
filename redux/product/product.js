import { fetchApi } from "../apiData";

export const productTyps = {
    update: "product/update",
    clear: "product/clear",
};

//user actions
export const updateProduct = (payload) => ({
    type: productTyps.update,
    payload,
});

export const clearProduct = () => ({
    type: productTyps.clear,
});

export const fetchProduct = id => {
    return (dispatch, getState) => {
        if (!getState().product.id) {
            return dispatch(fetchApi(`products/${id}/`, `product__${id}`, updateProduct));
        }
        return Promise.resolve();
    };
};

//user reducer
export default (state = {}, action) => {
    switch (action.type) {
        case productTyps.update:
            return { ...state, ...action.payload };
        case productTyps.clear:
            return {};
        default:
            return state;
    }
};
