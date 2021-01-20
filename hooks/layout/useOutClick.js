import { useRef } from "react";
import useEventListener from "./useEventListener";
import canUseDom from "../../utils/canUseDom";

const useOutClick = (handler) => {
    const el = useRef(null);

    const handleOut = (e) => {
        if (el && el.current && el.current.contains(e.target)) {
            return false;
        }
        handler();
    };

    useEventListener("mousedown", handleOut, canUseDom ? document : null);

    return el;
};

export default useOutClick;
