import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/user";
import { loadCart } from "../../redux/user/local_cart";
import { getLocalUser } from "../../utils/getUser";

const UserandCart = () => {
    const dispatch = useDispatch();
    const { local_cart } = useSelector((state) => ({
        local_cart: state.local_cart || [],
    }));

    useEffect(() => {
        dispatch(updateUser(getLocalUser() || {}));
        dispatch(loadCart(getCart()));
    }, []);

    useEffect(() => {
        saveCart(local_cart);
    }, [local_cart]);

    return null;
};

const CART_KEY = "space_and_beauty_local_cart";

const saveCart = (value) => {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
};

const getCart = () => {
    try {
        const value = localStorage.getItem(CART_KEY);
        return JSON.parse(value) || [];
    } catch (err) {
        return [];
    }
};

export default UserandCart;
