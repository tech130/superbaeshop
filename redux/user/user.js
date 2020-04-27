import { fetchApi } from "../apiData";

export const userTyps = {
    update: "user/update",
    clear: "user/clear",
};

//user actions
export const updateUser = (payload) => ({
    type: userTyps.update,
    payload,
});

export const clearUser = () => ({
    type: userTyps.clear,
});

export const fetchProfile = () =>
    fetchApi({ url: "users/" }, "user_profile", updateUser);

//user reducer
export default (state = { isloaded: false }, action) => {
    switch (action.type) {
        case userTyps.update:
            return { ...state, isloaded: true, ...action.payload };
        case userTyps.clear:
            return {};
        default:
            return state;
    }
};
