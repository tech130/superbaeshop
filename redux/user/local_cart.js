import { userTyps } from "./user";

export const cartTyps = {
    load: "local_cart/toggle",
    toggle: "local_cart/toggle",
    add: "local_cart/add",
    incQty: "local_cart/increase/quantity",
    decQty: "local_cart/decrease/quantity",
    remove: "local_cart/remove",
    clear: "local_cart/clear",
};

export const addToCart = (productId, title, product_country) => ({
    type: cartTyps.add,
    payload: {
        productId,
        title,
        product_country,
        quantity: 1,
    },
});

export const cartPlus = (productId) => ({
    type: cartTyps.incQty,
    productId,
});

export const cartMinus = (productId) => ({
    type: cartTyps.decQty,
    productId,
});

export const cartRemove = (productId) => ({
    type: cartTyps.remove,
    productId,
});

export const loadCart = (payload) => ({
    type: cartTyps.load,
    payload,
});

export const clearCart = () => ({
    type: cartTyps.clearCart,
});

const init = [];

const remove = (state, id) => state.filter((item) => item.id === id);

const toggle = (state, payload) => {
    const incart = state.filter((item) => item.productId === payload.productId);
    if (incart.length > 0) {
        return remove(state, payload.productId);
    }
    return state.concat(state, payload);
};

const add = (state, payload) => {
    const incart = state.filter((item) => item.productId === payload.productId);
    if (incart.length > 0) {
        return state;
    }
    return state.concat(state, payload);
};

export default (state = init, action) => {
    switch (action.type) {
        case cartTyps.load:
            return action.payload;
        case cartTyps.add:
            return add(state, action.payload);
        case cartTyps.toggle:
            return toggle(state, action.payload);
        case cartTyps.remove:
            return remove(state, action.productId);
        case cartTyps.incQty:
            return state.map((item) => {
                if (item.productId === action.productId) {
                    return {
                        ...item,
                        quantity:
                            item.quantity < 10
                                ? item.quantity + 1
                                : item.quantity,
                    };
                }
                return item;
            });
        case cartTyps.decQty:
            return state.map((item) => {
                if (item.productId === action.productId) {
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
