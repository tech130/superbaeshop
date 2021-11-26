export const addrTyps = {
    load: "checkout/load",
};


export const updateCheckout = (payload) => {
    return {
        type: addrTyps.load,
        payload,
    };
};

//order
export default function checkout(state = {}, action) {
    switch (action.type) {
        case addrTyps.load:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
