import { addEntity } from "./addEntity";
import clientApi from "../apiService/clientApi";
import { normalize } from "normalizr";

export const pageTypes = {
    fetching: "pagination/fetching",
    fulfilled: "pagination/fulfilled",
    rejected: "pagination/rejected",
    clear: "pagination/clear",
    addData: "pagination/addData",
};

export const pageInit = {
    allIds: [],
    fetching: false,
    error: false,
    next: null,
    count: null,
};

const updatePagination = (state = pageInit, action) => {
    const { payload, type } = action;
    switch (type) {
        case pageTypes.fetching:
            return {
                ...state,
                fetching: true,
                error: false,
                next: null,
            };
        case pageTypes.addData:
            return {
                ...state,
                allIds: [payload, ...state.allIds],
            };
        case pageTypes.fulfilled:
            return {
                ...state,
                fetching: false,
                allIds: state.count
                    ? state.allIds.concat(payload.ids)
                    : payload.ids,
                count: payload.count,
                next: payload.next,
            };
        case pageTypes.rejected:
            return {
                ...state,
                fetching: false,
                error: true,
            };
        case pageTypes.clear:
            return {
                ...state,
                ...pageInit,
            };
        default:
            return state;
    }
};

//pagination reducer
const pagination = (state = {}, action) => {
    switch (action.type) {
        case pageTypes.fetching:
        case pageTypes.addData:
        case pageTypes.fulfilled:
        case pageTypes.rejected:
        case pageTypes.clear:
            return {
                ...state,
                [action.name]: updatePagination(state[action.name], action),
            };
        default:
            return state;
    }
};

export const fetchNextPage = (name, schema) => {
    return (dispatch, getState) => {
        const { next } = getState().pagination[name] || {};
        if (next) {
            return dispatch(fetchData(name, { url: next }, schema));
        }
        return Promise.resolve();
    };
};

export const fetchFirstPage = (name, config, schema) => {
    return (dispatch, getState) => {
        const { count } = getState().pagination[name] || {};
        if (!count) {
            return dispatch(fetchData(name, config, schema));
        }
        return Promise.resolve();
    };
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

export const fetchData = (name, config, schema) => {
    return (dispatch, getState) => {
        const { token } = getState().user;
        if (token) {
            config.headers = {
                ...(config.headers || {}),
                Authorization: `Token ${token}`,
            };
        }
        if (shouldFetch(name, getState().pagination)) {
            dispatch(fetchPagi(name));
            return clientApi(config)
                .then((res) => {
                    const { results, count, next } = res.data;
                    const { result, entities } = normalize(results, [schema]);
                    dispatch(addEntity(entities));
                    const payload = {
                        count,
                        next,
                        ids: result,
                    };
                    dispatch(fulFillPagi(name, payload));
                })
                .catch(() => {
                    dispatch(rejectPagi(name));
                });
        }
        return Promise.resolve();
    };
};

export const fetchPagi = (name) => ({
    type: pageTypes.fetching,
    name,
});

export const fulFillPagi = (name, payload) => ({
    type: pageTypes.fulfilled,
    name,
    payload,
});

export const rejectPagi = (name) => ({
    type: pageTypes.rejected,
    name,
});

export const addPagi = (name, payload) => ({
    type: pageTypes.addData,
    name,
    payload,
});

export const clearPagi = (name) => ({
    type: pageTypes.clear,
    name,
});

export default pagination;
