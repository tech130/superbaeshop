import clientApi from "../apiService/clientApi";

export const apiTyps = {
    fetching: "api/fetching",
    fulfilled: "api/fulfilled",
    rejected: "api/rejected",
    clear: "api/clear",
};

const init = {
    fetching: false,
    data: null,
    error: false,
};

const updateApi = (state = init, action) => {
    const { payload, type } = action;
    switch (type) {
        case apiTyps.fetching:
            return {
                ...state,
                fetching: true,
                data: null,
                error: false,
            };
        case apiTyps.fulfilled:
            return {
                ...state,
                fetching: false,
                data: payload || "SUCCESS",
            };
        case apiTyps.rejected:
            return {
                ...state,
                fetching: false,
                error: payload || "ERROR",
            };
        case apiTyps.clear:
            return {
                ...state,
                ...init,
            };
        default:
            return state;
    }
};

const shouldFetch = (name, state) => {
    if (!state[name]) {
        return true;
    }
    if (state[name].fetching) {
        return false;
    }
    return true;
};

export const fetchApi = (config, name, handleRes) => {
    return (dispatch, getState) => {
        const { token } = getState().user;
        if (token) {
            config.headers = {
                ...(config.headers || {}),
                Authorization: `Token ${token}`,
            };
        }
        if (shouldFetch(name, getState().apiData)) {
            dispatch({
                type: apiTyps.fetching,
                name,
            });

            return clientApi(config)
                .then((res) => {
                    if (typeof handleRes === "function") {
                        dispatch(handleRes(res.data));
                    }
                    dispatch({
                        type: apiTyps.fulfilled,
                        name,
                    });
                })
                .catch((err) => {
                    // dispatch(handleHttpErr(err));
                    dispatch({
                        type: apiTyps.rejected,
                        name,
                    });
                });
        }
        return Promise.resolve();
    };
};

const apiData = (state = {}, action) => {
    const { name, type } = action;
    switch (type) {
        case apiTyps.fetching:
        case apiTyps.fulfilled:
        case apiTyps.rejected:
        case apiTyps.clear:
            return {
                ...state,
                [name]: updateApi(state[name], action),
            };
        default:
            return state;
    }
};

export default apiData;
