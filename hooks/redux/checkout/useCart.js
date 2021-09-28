import { useMemo } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
    const { cartList, cartEntity, product } = useSelector((state) => {
        return {
            product: state.product,
            cartEntity: state.cart,
            cartList: state.cartList,
        };
    });

    return useMemo(() => {
        const { cart, ...rest } = cartList;
        let list = [];
        cart.forEach((item) => {
            const cartItem = cartEntity[item];
            if (cartItem && cartItem.quantity) {
                list.push({
                    ...cartItem,
                    product: product[cartItem.product],
                });
            }
        });

        return { list, ...rest };
    }, [cartEntity, product, cartList]);
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
            return cartList.cart.length;
        }
        return local_cart.length;
    }, [cartList, user, local_cart]);
};
export const useCartIsOpen = () => {
    const { cartOpen } = useSelector((state) => {
        return {
            cartOpen:state.cartOpen
        };
    });

    return useMemo(() => {
        
        return cartOpen;
    }, [cartOpen]);
};

export default useCart;
