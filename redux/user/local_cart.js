import { userTyps } from "./user";
import { uuid } from "uuidv4";

export const cartTyps = {
    add: "local_cart/add",
    incQty: "local_cart/increase/quantity",
    decQty: "local_cart/decrease/quantity",
    remove: "local_cart/remove",
    clear: "local_cart/clear",
};

export const addToLocalCart = (product, slug, quantity = 1) => ({
    type: cartTyps.add,
    payload: {
        id: uuid(),
        product,
        slug,
        quantity,
    },
});

export const cartPlus = (product) => ({
    type: cartTyps.incQty,
    product,
});

export const cartMinus = (product) => ({
    type: cartTyps.decQty,
    product,
});

export const cartRemove = (product) => ({
    type: cartTyps.remove,
    product,
});

export const clearLocalCart = () => ({
    type: cartTyps.clearCart,
});

const init = [];

const remove = (state, product) =>
    state.filter((item) => item.product !== product);

const add = (state, payload) => {
    const incart = state.filter((item) => item.product === payload.product);
    if (incart.length > 0) {
        return state;
    }
    return [...state, payload];
};

export default (state = init, action) => {
    switch (action.type) {
        case cartTyps.add:
            return add(state, action.payload);
        case cartTyps.remove:
            return remove(state, action.product);
        case cartTyps.incQty:
            return state.map((item) => {
                if (item.product === action.product) {
                    return {
                        ...item,
                        quantity:
                            item.quantity < 9
                                ? item.quantity + 1
                                : item.quantity,
                    };
                }
                return item;
            });
        case cartTyps.decQty:
            return state.map((item) => {
                if (item.product === action.product) {
                    return {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : item.quantity,
                    };
                }
                return item;
            });
        case userTyps.clear:
        case cartTyps.clear:
            return init;
        default:
            return state;
    }
};
