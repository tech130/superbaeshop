import { combineReducers } from "redux";
import user from "./user/user";
import cart from "./user/cart";
import product from "./product/product";
import apiData from "./apiData";
import master from "./master";

const reducer = combineReducers({
    user,
    apiData,
    master,
    product,
    cart
});

export default reducer;
