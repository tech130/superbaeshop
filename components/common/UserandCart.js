import { useEffect } from "react";
import {
    setTokenOnBrowser,
    // removeTokenOnBrowser,
} from "../../utils/handleToken";
import useUser from "../../hooks/redux/user/useUser";

const UserandCart = () => {
    const { token } = useUser();

    useEffect(() => {
        if (token) {
            setTokenOnBrowser(token);
        }
        // else {
        //     removeTokenOnBrowser();
        // }
    }, [token]);

    return null;
};

export default UserandCart;
