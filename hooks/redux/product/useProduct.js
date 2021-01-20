import { useSelector } from "react-redux";

const useProduct = (slug) => {
    return useSelector((state) => state.product[slug] || {});
};

export default useProduct;
