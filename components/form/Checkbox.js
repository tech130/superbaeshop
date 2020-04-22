import React from "react";
import styled from "styled-components";

const CheckStyle = styled.input`
    display: none;

    & + label {
        display: block;
        position: relative;
        padding-left: 25px;
        margin-bottom: 0px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    & + label:last-child {
        margin-bottom: 0;
    }

    & + label:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 0;
        top: 4px;
        -webkit-transition: all 0.12s, border-color 0.08s;
        transition: all 0.12s, border-color 0.08s;
    }

    &:checked + label:before {
        width: 10px;
        top: 0px;
        left: 5px;
        border-radius: 0;
        opacity: 1;
        border-top-color: transparent;
        border-left-color: transparent;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const Checkbox = ({ name = "", setValue = null, value = false }) => {
    return (
        <div>
            <CheckStyle
                onChange={() => {
                    if (setValue) {
                        setValue(!value);
                    }
                }}
                type="checkbox"
                checked={!!value}
                id={name}
            />
            <label htmlFor={name}>Same as registered number</label>
        </div>
    );
};

export default Checkbox;
