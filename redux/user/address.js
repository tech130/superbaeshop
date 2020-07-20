import { fetchApi } from "../apiData";
import urls from "../../apiService/urls";

export const addrTyps = {
    apiName: "addressList",
    load: "address/load",
    update: "address/update",
};

export const loadAddress = (payload) => {
    return {
        type: addrTyps.load,
        payload: Array.isArray(payload) ? payload : [],
    };
};

export const addAddress = (payload) => {
    return {
        type: addrTyps.add,
        payload,
    };
};

export const fetchAddress = () => {
    return (dispatch) => {
        return dispatch(
            fetchApi({ url: urls.address }, addrTyps.apiName, loadAddress)
        );
    };
};

export const addressList = (state = [], action) => {
    switch (action.type) {
        case addrTyps.load:
            return action.payload;
        case addrTyps.add:
            return state.concat(action.payload);
        case addrTyps.update:
            return state.map((x) => {
                if (x.id === action.payload.id) {
                    return {
                        ...x,
                        ...action.payload,
                    };
                }
                return x;
            });
        default:
            return state;
    }
};
