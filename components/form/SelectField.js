import React from "react";
import Input, { NumberInput } from "./Input";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import CountrySelect from "./CountrySelect";
import SelectIp from "./SelectIp";
import RadioGroup from "./RadioGroup";
// import Select from "./Select";

const SelectField = (props) => {
    const Comp = selectField(props.type);

    return Comp ? <Comp {...props} /> : null;
};

const selectField = (type) => {
    switch (type) {
        case "text":
        case "email":
        case "search":
        case "url":
        case "password":
            return Input;
        case "tel":
        case "number":
            return NumberInput;
        case "textarea":
            return TextArea;
        case "checkbox":
            return Checkbox;
        case "radiogroup":
            return RadioGroup
        case "countrySelect":
            return CountrySelect;
        case "select":
            return SelectIp;
        default:
            return () => null;
    }
};

export default SelectField;
