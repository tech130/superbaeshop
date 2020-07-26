import useOnScreen from "./useOnScreen";
import { useState, useEffect } from "react";

const useLazyImage = (ref, src = "", srcSet = "", sizes = "") => {
    const [loading, set] = useState(true);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) {
            const img = new Image();
            let onLoad = () => {
                set(false);
            };
            img.addEventListener("load", onLoad);
            img.addEventListener("error", onLoad);
            if (srcSet) {
                img.srcset = srcSet;
            }
            if (sizes) {
                img.sizes = sizes;
            }
            return () => {
                img.removeEventListener("load", onLoad);
                img.removeEventListener("error", onLoad);
            };
        }
    }, [src, onScreen]);

    return loading;
};

export default useLazyImage;
