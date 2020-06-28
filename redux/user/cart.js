import { userTyps } from "./user";

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
            return []
        default:
            return state;
    }
};

export const loadCartList = (payload) => ({
    type: cartTyps.load,
    payload: payload,
});
