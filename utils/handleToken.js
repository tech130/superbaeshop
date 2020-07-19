import canUseDom from "./canUseDom";
import Cookies from "universal-cookie";
import { TOKEN_KEY } from "./constants";

export const setTokenOnBrowser = (token) => {
    if (canUseDom && token) {
        const cookies = new Cookies();
        const date = new Date();
        date.setTime(date.getTime() + 5184000000);
        cookies.set(TOKEN_KEY, token, {
            expires: date,
            sameSite: "strict",
        });
    }
};

export const removeTokenOnBrowser = () => {
    if (canUseDom) {
        const cookies = new Cookies();
        cookies.remove(TOKEN_KEY);
    }
};
