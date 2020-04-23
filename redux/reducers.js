import { combineReducers } from "redux";
import user from "./user/user";
import apiData from "./apiData";
import master from "./master";

const reducer = combineReducers({
    user,
    apiData,
    master,
});

export default reducer;
