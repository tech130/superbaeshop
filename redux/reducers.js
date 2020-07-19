import { combineReducers } from "redux";
import user from "./user/user";
import local_cart from "./user/local_cart";
import cart, { cartList } from "./user/cart";
import product, { headerProducts } from "./product/product";
import apiData from "./apiData";
import master from "./master";
import { LOG_OUT } from "../utils/constants";

const appReducer = combineReducers({
    user,
    apiData,
    master,
    product,
    headerProducts,
    cart,
    cartList,
    local_cart,
});

const reducer = (state, action) => {
    if (action.type === LOG_OUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default reducer;
