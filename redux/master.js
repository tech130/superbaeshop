import { fetchApi } from "./apiData";

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
    console.log("called master")
    return (dispatch, getState) => {
        if (!getState().master.category) {
            return dispatch(fetchApi("master-values/", "master", updateMaster));
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
