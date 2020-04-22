import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-shadow: none;

    &:focus {
        outline: none;
        border: 1px solid #000;
    }
`;

const Input = ({
    type = "text",
    className = "form-control",
    setValue = null,
    value = "",
    ...rest
}) => {
    return (
        <InputStyle
            type={type}
            onChange={e => {
                if (setValue) {
                    setValue(e.target.value);
                }
            }}
            value={value}
            className={className}
            {...rest}
        />
    );
};

export const NumberInput = ({
    name = "",
    type,
    className = "form-control",
    setValue = null,
    value = "",
    ...rest
}) => {
    const onKeyPress = event => {
        if (!(event.charCode >= 48 && event.charCode <= 57)) {
            event.preventDefault();
            return;
        }
    };

    return (
        <InputStyle
            type="tel"
            className={className}
            onKeyPress={onKeyPress}
            value={value}
            onChange={e => {
                if (setValue) {
                    setValue(e.target.value);
                }
            }}
            {...rest}
        />
    );
};

export default Input;
