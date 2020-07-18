import { fetchApi } from "./apiData";
import urls from "../apiService/urls";

export const masterTyps = {
    update: "master/update",
    clear: "master/clear",
};

//user actions
export const updateMaster = (payload) => ({
    type: masterTyps.update,
    payload,
});

export const clearMaster = () => ({
    type: masterTyps.clear,
});

export const fetchMaster = () => {
    return (dispatch, getState) => {
        if (!getState().master.countries) {
            return dispatch(
                fetchApi({ url: urls.master }, "master", updateMaster)
            );
        }
        return Promise.resolve();
    };
};

//user reducer
export default (state = {}, action) => {
    switch (action.type) {
        case masterTyps.update:
            return { ...state, ...action.payload };
        case masterTyps.clear:
            return {};
        default:
            return state;
    }
};
