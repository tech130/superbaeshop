import { userTyps } from "./user";

export const cartTyps = {
    toggle: "cart/toggle",
    incQty: "cart/increase/quantity",
    decQty: "cart/increase/quantity",
    remove: "cart/remove",
    clear: "cart/clear",
};

export const toggleCart = (productId, title, product_country) => ({
    type: cartTyps.toggle,
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

export default (state = init, action) => {
    switch (action.type) {
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
                if (item.id === action.productId) {
                    return {
                        ...item,
                        quantity:
                            item.quantity > 2
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
