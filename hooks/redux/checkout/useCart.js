import { useMemo } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
    const { cart, product } = useSelector((state) => {
        return {
            product: state.product,
            cart: state.cart,
        };
    });

    return useMemo(() => {
        return cart.map((x) => {
            return {
                ...x,
                product: product[x.product],
            };
        });
    }, [cart, product]);
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
                product: product[x.product],
            };
        });
    }, [cart, product]);
};

export default useCart;
