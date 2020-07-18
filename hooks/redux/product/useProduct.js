import { useSelector } from "react-redux";

const useProduct = (id) => {
    return useSelector((state) => state.product[id] || {});
};

export default useProduct;
