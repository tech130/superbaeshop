import { ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";
import { normalize, schema } from "normalizr";
import { fetchFirstPage, clearPagi, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";

export const orderListName = "orderList";
export const orderSchema = new schema.Entity("order");

export const fetchOrders = () =>
    fetchFirstPage(orderListName, { url: urls.myOrders }, orderSchema);

export const fetchMoreOrders = () => fetchNextPage(orderListName, orderSchema);

export const clearOrders = () => clearPagi(orderListName);

export const updateOrders = (payload) => {
    const { entities } = normalize(payload, orderSchema);
    return {
        type: ADD_ENTITIES,
        payload: entities,
    };
};

//order
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, state, action.payload.order || {});
        default:
            return state;
    }
};
