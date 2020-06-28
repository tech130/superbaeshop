import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import apiInstance from "../../apiInstance";

const cookies = new Cookies();

const UserandCart = () => {
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (token) {
            const date = new Date();
            date.setTime(date.getTime() + 5184000000);
            cookies.set("token", token, {
                expires: date
            });
            apiInstance.defaults.headers.common.Authorization =
                "Token " + token;
        } else {
            cookies.remove("token");
            delete apiInstance.defaults.headers.common.Authorization;
        }
    }, [token]);

    return null;
};

export default UserandCart;
