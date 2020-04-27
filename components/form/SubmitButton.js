import React from "react";
import Loader from "./Loader";
import { SubmitBtn } from "../styled/Button";

const SubmitButton = ({ className, children, fetching, disabled, ...rest }) => {
    return (
        <SubmitBtn
            type="submit"
            disabled={fetching || disabled}
            className={className}
            {...rest}
        >
            {fetching ? <Loader size={20} fill="#fff" /> : children}
        </SubmitBtn>
    );
};

export default SubmitButton;
