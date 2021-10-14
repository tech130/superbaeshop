export const init = {
    inputs: {},
    values: {},
    errors: {},
    isOptional: [],
    allIds: [],
    uiProps: {},
    defaultUiProps: {},
};

export default function formReducer(state, action) {
    switch (action.type) {
        case "on_change":
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.name]: action.value,
                },
                errors: {
                    ...state.errors,
                    [action.name]: "",
                },
            };
        case "set_err":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.name]: action.error,
                },
            };
        case "reset_form":
            return {
                ...state,
                errors: {},
                values: {},
            };
        case "set_form":
            return { ...state, ...action.form };
        case "set_values":
            return { ...state, values: { ...state.values, ...action.values } };
        default:
            return state;
    }
}

export const setValue = (name, value) => {
    return {
        type: "on_change",
        name,
        value,
    };
};

export const setValues = (values = {}) => {
    return {
        type: "set_values",
        values,
    };
};

export const setErr = (name, error) => {
    return {
        type: "set_err",
        name,
        error,
    };
};

export const setForm = (form = {}) => {
    return {
        type: "set_form",
        form,
    };
};

export const resetForm = () => {
    return {
        type: "reset_form",
    };
};
