import Cookies from "universal-cookie";
import Axios from "axios";
import { clearUser, updateUser } from "../redux/user/user";
import { baseURL } from "../apiInstance";

const getToken = async ({ req, store }) => {
    
    if (req && req.headers) {
        const cookies = new Cookies(req.headers.cookie);
        const token = cookies.get("token");
        const Api = Axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        try {
            const res = await Api({
                url: "users/",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const user = {
                token,
                ...res.data,
            };
            store.dispatch(updateUser(user));
            return {
                token,
                user: res.data,
                Api,
            };
        } catch (err) {
            store.dispatch(clearUser());
            return {};
        }
    }
    return {};
};

export default getToken;
