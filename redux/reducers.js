import { combineReducers } from "redux";
import user from "./user/user";
import local_cart,{cartOpen} from "./user/local_cart";
import cart, { cartList } from "./user/cart";
import checkout from "./user/checkout";
import product, { headerProducts } from "./product/product";
import apiData from "./apiData";
import master, { terms } from "./master";
import { LOG_OUT } from "../utils/constants";
import { addressList } from "./user/address";
import pagination from "./pagination";
import orders from "./user/orders";
import wallet from "./user/wallet";
import { productFilter } from "./product/listing";
import queryData from "./queryData";

const appReducer = combineReducers({
    user,
    apiData,
    pagination,
    queryData,
    master,
    terms,
    product,
    headerProducts,
    productFilter,
    cart,
    cartList,
    local_cart,
    addressList,
    orders,
    wallet,
    cartOpen,
    checkout,
});

const reducer = (state, action) => {
    if (action.type === LOG_OUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default reducer;
