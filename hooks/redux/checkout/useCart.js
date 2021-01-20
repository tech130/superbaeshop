import { useMemo } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
    const { cartList, cart, product } = useSelector((state) => {
        return {
            product: state.product,
            cart: state.cart,
            cartList: state.cartList,
        };
    });

    return useMemo(() => {
        let list = [];
        cartList.forEach((item) => {
            const cartItem = cart[item];
            if (cartItem && cartItem.quantity) {
                list.push({
                    ...cartItem,
                    product: product[cartItem.product],
                });
            }
        });
        return list;
    }, [cart, product, cartList]);
};

export const useLocalCart = () => {
    const { cart, product } = useSelector((state) => {
        return {
            product: state.product,
            cart: state.local_cart,
        };
    });

    return useMemo(() => {
        return cart.map((x) => {
            return {
                ...x,
                product: product[x.slug],
            };
        });
    }, [cart, product]);
};

export const useCartCount = () => {
    const { user, cartList, local_cart } = useSelector((state) => {
        return {
            user: state.user,
            cartList: state.cartList,
            local_cart: state.local_cart,
        };
    });

    return useMemo(() => {
        if (user.token) {
            return cartList.length;
        }
        return local_cart.length;
    }, [cartList, user, local_cart]);
};

export default useCart;
