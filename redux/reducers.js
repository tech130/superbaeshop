import { combineReducers } from "redux";
import user from "./user/user";
import product from "./product/product";
import apiData from "./apiData";
import master from "./master";

const reducer = combineReducers({
    user,
    apiData,
    master,
    product,
});

export default reducer;
