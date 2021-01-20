import useForm from "./useForm";
import { setValue } from "./formReducer";

const useFormField = name => {
    const { formState, formDispatch } = useForm();

    return {
        inputProps: formState.inputs[name],
        value: formState.value[name],
        err: formState.errors[name],
        required: !formState.isOptional.includes(name),
        uiProps: formState.uiProps[name],
        defaultUiProps: formState.defaultUiProps,
        setValue: value => formDispatch(setValue(name, value))
    };
};

export default useFormField;
