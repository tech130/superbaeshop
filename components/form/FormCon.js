import React, { useEffect } from "react";
import Form from "./Form";
import { setErr, resetForm } from "../../hooks/form/formReducer";
import { init, setForm } from "../../hooks/form/formReducer";
import { formcontext } from "../../hooks/form/useForm";
import useFormReducer from "../../hooks/form/useFormReducer";
import useDataSubmit from "../../hooks/http/useSubmit";
import { validateForm } from "../../utils/validation";

const isFunc = (func) => typeof func === "function";

const FormCon = ({
    form = {},
    config = {},
    renderForm = () => null,
    succFunc = null,
    customValid = null,
    formatData = null,
    resetOnSuccess = false,
    ...rest
}) => {
    const [formState, formDispatch] = useFormReducer({ ...init, ...form });

    // useEffect(() => {
    //     formDispatch(setForm(form));
    // }, [form, formDispatch]);

    const dispatchErr = (name, error) => formDispatch(setErr(name, error));

    const [fetching, submit] = useDataSubmit(
        (data) => {
            if (isFunc(succFunc)) {
                succFunc(data, formState);
            }
            if (resetOnSuccess) {
                formDispatch(resetForm());
            }
        },
        (data) => {
            console.log(data);
        }
    );

    const onSubmit = () => {
        let { isErr, data } = validateForm(formState, dispatchErr);
        if (isErr) {
            return;
        }
        if (isFunc(customValid)) {
            const customErr = customValid({
                data,
                dispatchErr,
                formState,
                formDispatch,
            });
            if (customErr) {
                return;
            }
        }
        if (isFunc(formatData)) {
            data = formatData(data);
        }
        submit({
            ...config,
            data,
        });
    };

    return (
        <formcontext.Provider value={{ formState, formDispatch }}>
            <Form onSubmit={onSubmit} {...rest}>
                {renderForm({
                    fetching,
                    submit,
                    formState,
                    formDispatch,
                })}
            </Form>
        </formcontext.Provider>
    );
};

export default FormCon;
