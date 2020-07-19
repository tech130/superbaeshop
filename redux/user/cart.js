import { userTyps } from "./user";
import { fetchApi } from "../apiData";
import urls from "../../apiService/urls";
import { normalize } from "normalizr";
import { addEntity } from "../addEntity";
import { cartSchema } from "../product/schema";

export const cartTyps = {
    load: "cart/load",
    add: "cart/add",
    remove: "cart/remove",
};

//cart list
export default (state = [], action) => {
    switch (action.type) {
        case cartTyps.load:
            return action.payload;
        case cartTyps.clear:
        case userTyps.clear:
            return [];
        default:
            return state;
    }
};

// export const loadCartList = (payload) => {
//     const { result, entities } = normalize(payload, cartSchema);
//     const 
//     return (dispatch) => {
//         dispatch(addEntity())
//     }
// }

export const fetchCart = () => {
    return fetchApi({ urls: urls.cart })
}
