import clientApi from "../apiService/clientApi";

export const listDataTyps = {
    fetching: "listData/fetching",
    fulfilled: "listData/fulfilled",
    rejected: "listData/rejected",
    clear: "listData/clear",
};

export const pageInit = {
    data: undefined,
    fetching: false,
    error: false,
};

const updateQueryData = (state = pageInit, action) => {
    const { payload, type } = action;
    switch (type) {
        case listDataTyps.fetching:
            return {
                ...state,
                fetching: true,
                error: false,
            };
        case listDataTyps.fulfilled:
            return {
                ...state,
                fetching: false,
                data: payload,
            };
        case listDataTyps.rejected:
            return {
                ...state,
                fetching: false,
                error: true,
            };
        case listDataTyps.clear:
            return pageInit;
        default:
            return state;
    }
};

//listData reducer
const queryData = (state = {}, action) => {
    switch (action.type) {
        case listDataTyps.fetching:
        case listDataTyps.addData:
        case listDataTyps.fulfilled:
        case listDataTyps.rejected:
        case listDataTyps.clear:
            return {
                ...state,
                [action.name]: updateQueryData(state[action.name], action),
            };
        default:
            return state;
    }
};

export const fetchQueryData = (name, config) => {
    return (dispatch, getState) => {
        const { token } = getState().user;
        if (token) {
            config.headers = {
                ...(config.headers || {}),
                Authorization: `Token ${token}`,
            };
        }
        dispatch({
            type: listDataTyps.fetching,
            name,
        });
        return clientApi(config)
            .then((res) => {
                dispatch({
                    type: listDataTyps.fulfilled,
                    name,
                    payload: res.data,
                });
            })
            .catch(() => {
                dispatch({
                    type: listDataTyps.rejected,
                    name,
                });
            });
    };
};

export default queryData;
