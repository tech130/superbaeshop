import useOnScreen from "./useOnScreen";
import { useState, useEffect } from "react";

const useLazyImage = (ref, image = {}) => {
    const [loading, set] = useState(true);
    const [shown, setShown] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) {
            setShown(true);
        }
    }, [onScreen]);

    useEffect(() => {
        if (shown && loading) {
            const onLoad = () => {
                set(false);
            };
            const img = new Image();
            img.addEventListener("load", onLoad);
            img.src = image.src;
            if (image.srcSet) {
                img.srcset = image.srcSet;
            }
            if (image.sizes) {
                img.sizes = image.sizes;
            }
            return () => {
                img.removeEventListener("load", onLoad);
            };
        }
    }, [image, shown, loading]);

    return loading;
};

export default useLazyImage;
