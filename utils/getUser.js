//load user from localstorage
export const getLocalUser = () => {
    try {
        const serializedState = localStorage.getItem("space_and_beauty_user");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

//save user to localstorage
export const saveLocalUser = (state) => {
    try {
        const data = getLocalUser() || {};
        const serializedState = JSON.stringify({ ...data, ...state });
        localStorage.setItem("space_and_beauty_user", serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const clearLocalUser = async () => {
    try {
        await localStorage.removeItem("space_and_beauty_user");
    } catch (e) {
        // saving error
    }
};
