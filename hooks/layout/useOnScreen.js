import { useState, useEffect } from "react";

export default function useOnScreen(ref) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let current = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting);
        });
        if (current) {
            observer.observe(current);
        }
        return () => {
            observer.unobserve(current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}
