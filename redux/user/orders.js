import { ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";
import { schema } from "normalizr";
import { fetchData, clearPagi, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";

export const orderListName = "orderList";
export const orderSchema = new schema.Entity("order");

export const fetchOrders = () =>
    fetchData(orderListName, { url: urls.myOrders }, orderSchema);

export const fetchMoreOrders = () => fetchNextPage(orderListName, orderSchema);

export const clearOrders = () => clearPagi(orderListName);

//order
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, state, action.payload.order || {});
        default:
            return state;
    }
};
