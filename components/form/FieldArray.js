import React from "react";
import useForm from "../../hooks/form/useForm";
import Field from "./Field";
import { setValue } from "../../hooks/form/formReducer";
import { Row } from "styled-bootstrap-grid";
import styled from "styled-components";

export const FormRow = styled(Row)`
    margin-left: -5px;
    margin-right: -5px;
`;

const FieldArray = (props) => {
    const { formState, formDispatch } = useForm();

    return (
        <FormRow {...props}>
            <FieldArrayList formState={formState} formDispatch={formDispatch} />
        </FormRow>
    );
};

export const FieldArrayList = ({ formState, formDispatch }) => {
    const {
        allIds,
        inputs,
        isOptional,
        errors,
        values,
        uiProps,
        defaultUiProps,
    } = formState;
    return allIds.map((name) => {
        return (
            <Field
                inputProps={inputs[name]}
                err={errors[name]}
                value={values[name]}
                required={!isOptional.includes(name)}
                uiProps={uiProps[name]}
                defaultUiProps={defaultUiProps}
                setValue={(val) => formDispatch(setValue(name, val))}
                key={name}
            />
        );
    });
};

export default FieldArray;
