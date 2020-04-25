import { fetchApi } from "../apiData";

export const productTyps = {
    update: "product/update",
    clear: "product/clear",
};

//user actions
export const updateProduct = (id, payload) => ({
    type: productTyps.update,
    id,
    payload,
});

export const clearProduct = () => ({
    type: productTyps.clear,
});

export const fetchProduct = (id) => {
    return (dispatch, getState) => {
        if (!getState().product[id]) {
            return dispatch(
                fetchApi(`products/${id}/`, `product__${id}`, (res) =>
                    updateProduct(id, res)
                )
            );
        }
        return Promise.resolve();
    };
};

//product reducer
export default (state = {}, action) => {
    switch (action.type) {
        case productTyps.update:
            return {
                ...state,
                [action.payload.id]: {
                    ...(state[action.payload.id] || {}),
                    ...action.payload,
                },
            };
        case productTyps.clear:
            return {};
        default:
            return state;
    }
};
