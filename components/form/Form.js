import React from "react";

const Form = ({ children, onSubmit = null, ...rest }) => {
    return (
        <form
            noValidate
            onSubmit={e => {
                e.preventDefault();
                if (typeof onSubmit === "function") {
                    onSubmit();
                }
            }}
            {...rest}
        >
            {children}
        </form>
    );
};

export default Form;