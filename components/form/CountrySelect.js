import React from "react";
import styled from "styled-components";
import dialCodes from "../../utils/dialCodes";
import Select, { components } from "react-select";
import Txt from "../styled/Txt";

const countryList = (valType) =>
    Object.keys(dialCodes).map((item) => {
        if (valType === "dialCode") {
            return getDialOption(item);
        }
        return getCountryOption(item);
    });

export const getDialOption = (code) => {
    const { name, dialCode, countryCode } = dialCodes[code];
    return {
        label: `+${dialCode} (${name})`,
        value: dialCode,
        countryCode: countryCode,
    };
};

export const getCountryOption = (code) => {
    const { name, countryCode } = dialCodes[code];
    return {
        label: name,
        value: countryCode,
        countryCode: countryCode,
    };
};

export const dialList = countryList("dialCode");
export const countries = countryList();

const Flag = styled(Txt)`
    display: inline-block;
    margin-right: 10px;
`;

const FlagIcon = ({ countryCode = "", ...rest }) => {
    return (
        <Flag
            {...rest}
            className={`flag-icon flag-icon-${countryCode.toLowerCase()}`}
        ></Flag>
    );
};

const Option = (props) => {
    return (
        <components.Option {...props}>
            {props.data.countryCode ? (
                <FlagIcon countryCode={props.data.countryCode} />
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

const CountrySelect = ({
    setValue = null,
    placeholder = "",
    valType = "",
    ...ipProps
}) => {
    return (
        <Select
            {...ipProps}
            components={{ Option, SingleValue }}
            placeholder={placeholder}
            options={valType === "dialCode" ? dialList : countries}
            classNamePrefix="react-select"
            onChange={(val) => {
                if (typeof setValue === "function") {
                    setValue(val);
                }
            }}
        />
    );
};

export default CountrySelect;
