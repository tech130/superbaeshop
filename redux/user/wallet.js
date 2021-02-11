import { ADD_ENTITIES } from "../addEntity";
import merge from "lodash.merge";
import { schema } from "normalizr";
import { fetchFirstPage, clearPagi, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";

export const walletListName = "walletList";
export const orderSchema = new schema.Entity("wallet");

export const fetchWallet = () =>
    fetchFirstPage(walletListName, { url: urls.wallet }, orderSchema);

export const fetchMoreWallet = () => fetchNextPage(walletListName, orderSchema);

export const clearWallet = () => clearPagi(walletListName);

//wallet
export default function wallet(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return merge({}, state, action.payload.wallet || {});
        default:
            return state;
    }
}
