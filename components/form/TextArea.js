import React from "react";

const TextArea = ({
    type = "text",
    className = "form-control",
    setValue = null,
    value = "",
    ...rest
}) => {
    return (
        <textarea
            type={type}
            onChange={e => {
                if (setValue) {
                    setValue(e.target.value);
                }
            }}
            className={className}
            value={value}
            {...rest}
        />
    );
};

export default TextArea