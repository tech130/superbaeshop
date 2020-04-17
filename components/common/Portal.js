import React from "react";
import { createPortal } from "react-dom";
import canUseDom from "../../utils/canUseDom";
import usePortal from "../../hooks/usePortal";

const Portal = ({ id, children }) => {
    if (canUseDom) {
        return <CreatePortal id={id}>{children}</CreatePortal>;
    }
    return null;
};

const CreatePortal = ({ id, children }) => {
    const target = usePortal(id);
    return createPortal(children, target);
};

export default Portal;
