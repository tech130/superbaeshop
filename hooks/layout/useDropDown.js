import { useState, useCallback } from "react";
import useOutClick from "./useOutClick";

const useDropDown = (init = false) => {
    const [open, set] = useState(init);

    const el = useOutClick(() => {
        set(false);
    });

    const toggle = useCallback(() => {
        set(!open);
    }, [open]);

    return [el, open, toggle];
};

export default useDropDown;
