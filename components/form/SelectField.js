import React from "react";
import Input, { NumberInput } from "./Input";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
// import Select from "./Select";

const SelectField = props => {
    const Comp = selectField(props.type);

    return Comp ? <Comp {...props} /> : null;
};

const selectField = (type = "text") => {
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
        // case "select":
        //     return Select;
        default:
            return () => null;
    }
};

export default SelectField;
