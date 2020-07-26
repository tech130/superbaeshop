import useOnScreen from "./useOnScreen";
import { useState, useEffect } from "react";

const useLazyImage = (ref, src = "", srcSet = "", sizes = "") => {
    const [loading, set] = useState(true);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) {
            const img = new Image();
            img.onload = () => {
                set(false);
            };
            img.src = src;
            if (srcSet) {
                img.srcset = srcSet;
            }
            if (sizes) {
                img.sizes = sizes;
            }
            return () => {};
        }
    }, [src, srcSet, sizes, onScreen]);

    return loading;
};

export default useLazyImage;
