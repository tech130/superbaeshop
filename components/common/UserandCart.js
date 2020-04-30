import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/user";
import { loadCart } from "../../redux/user/local_cart";
import { getLocalUser } from "../../utils/getUser";
import { fetchCart } from "../../redux/user/cart";

const UserandCart = () => {
    const dispatch = useDispatch();
    const { local_cart, token, userLoaded } = useSelector((state) => ({
        local_cart: state.local_cart || [],
        token: state.user.token,
        userLoaded: state.user.isloaded,
    }));

    useEffect(() => {
        dispatch(updateUser(getLocalUser() || {}));
    }, []);

    //fetch cart
    useEffect(() => {
        if (token) {
            //fetch cart from api
            dispatch(fetchCart());
        } else if (userLoaded && !token) {
            //load cart from loacal storage
            dispatch(loadCart(getCart()));
        }
    }, [token]);

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
