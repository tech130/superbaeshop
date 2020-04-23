export const userTyps = {
    update: 'user/update',
    clear: 'user/clear',
};

export const appStateTyps = {
    loaded: 'appState/loaded',
    fetching: 'appState/fetching',
};

//user actions
export const updateUser = payload => ({
    type: userTyps.update,
    payload,
});

export const clearUser = () => ({
    type: userTyps.clear,
});

//app state actions

//user reducer
export default (state = {}, action) => {
    switch (action.type) {
        case userTyps.update:
            return {...state, ...action.payload};
        case userTyps.clear:
            return {};
        default:
            return state;
    }
};
