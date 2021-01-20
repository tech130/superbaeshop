import React from "react";
import Select, { components } from "react-select";

const Option = (props) => {
    return (
        <components.Option {...props}>
            {props.data.image ? (
                <img
                    width="18"
                    height="13"
                    style={{ marginRight: `10px` }}
                    src={props.data.image}
                />
            ) : null}
            {props.data.label}
        </components.Option>
    );
};

const SingleValue = (props) => {
    return (
        <components.SingleValue {...props}>
            {props.data.image ? (
                <img
                    width="18"
                    height="13"
                    style={{ marginRight: `10px` }}
                    src={props.data.image}
                />
            ) : null}
            {props.data.label}
        </components.SingleValue>
    );
};

const SelectIp = ({
    options = [],
    setValue = null,
    placeholder = "",
    ...ipProps
}) => {
    return (
        <Select
            {...ipProps}
            components={{ Option, SingleValue }}
            placeholder={placeholder}
            options={options}
            classNamePrefix="react-select"
            onChange={(val) => {
                if (typeof setValue === "function") {
                    setValue(val);
                }
            }}
        />
    );
};

export default SelectIp;
