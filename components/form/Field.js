import React from "react";
import FieldCon from "./FieldCon";
import SelectField from "./SelectField";

const Field = ({
    setValue,
    inputProps = {},
    err = "",
    required = false,
    uiProps = {},
    defaultUiProps = {},
    value
}) => {
    return (
        <FieldCon err={err} required={required} {...defaultUiProps} {...uiProps}>
            <SelectField value={value} setValue={setValue} {...inputProps} />
        </FieldCon>
    );
};

export default Field;
