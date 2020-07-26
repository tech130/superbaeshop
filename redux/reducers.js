import { combineReducers } from "redux";
import user from "./user/user";
import local_cart from "./user/local_cart";
import cart, { cartList } from "./user/cart";
import product, { headerProducts } from "./product/product";
import apiData from "./apiData";
import master from "./master";
import { LOG_OUT } from "../utils/constants";
import { addressList } from "./user/address";
import pagination from "./pagination";
import orders from "./user/orders";
import wallet from "./user/wallet";

const appReducer = combineReducers({
    user,
    apiData,
    pagination,
    master,
    product,
    headerProducts,
    cart,
    cartList,
    local_cart,
    addressList,
    orders,
    wallet,
});

const reducer = (state, action) => {
    if (action.type === LOG_OUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default reducer;
