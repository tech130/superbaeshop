import { useState, useEffect } from "react";

const useLazyImage = (ref, image = {}) => {
    const [loading, set] = useState(true);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        let current = ref.current;
        const observer = new IntersectionObserver(([entry], obv) => {
            // Update our state when observer callback fires
            if (entry.isIntersecting) {
                setShown(true);
                obv.unobserve(current);
            }
        });
        if (current) {
            observer.observe(current);
        }
        return () => {
            observer.unobserve(current);
        };
    }, []);

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
