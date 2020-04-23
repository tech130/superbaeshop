import { userTyps } from "./user";
import apiInstance from "../../apiInstance";
import { saveLocalUser, clearLocalUser } from "../../utils/getUser";

const userMiddleWare = (store) => (next) => (action) => {
    if (action.error) {
        console.log(action.error);
        return next(action);
    }
    if (action.type === userTyps.update) {
        const user = action.payload;
        if (user.token) {
            apiInstance.defaults.headers.common.Authorization =
                "Token " + user.token;
        }
        saveLocalUser(user);
    } else if (action.type === userTyps.clear) {
        //remove authorization default from api instance
        delete apiInstance.defaults.headers.common.Authorization;
        clearLocalUser();
    }
    return next(action);
};

export default userMiddleWare;
