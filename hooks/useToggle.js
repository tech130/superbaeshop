import { useState, useCallback } from "react";

const useToggle = (init = false) => {
    const [toggle, setToggle] = useState(init);

    const onTrue = useCallback(() => {
        setToggle(true);
    }, []);

    const onFalse = useCallback(() => {
        setToggle(false);
    }, []);

    const onToggle = useCallback(() => {
        setToggle((x) => !x);
    }, []);

    return {
        toggle,
        onTrue,
        onFalse,
        onToggle,
    };
};

export default useToggle;
