// check email
export const emailValid = (val) => {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return val && re.test(val) ? "" : "Invalid email address";
};

export const emptyValid = (val) => (!val ? "This field is required" : "");

export const phoneValid = (val) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return val && re.test(val) ? "" : "Invalid number";
};

export const pwdValid = (val) =>
    val && val.length >= 8 ? "" : "Password must be atleast 8 characters";

export const dateValid = (val) => val && val.getMonth !== undefined;

export const urlValid = (val) =>
    val &&
    new RegExp(
        /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}/
    ).test(val)
        ? ""
        : "Invalid url";

const typeValid = (type, value) => {
    switch (type) {
        case "select":
        case "textarea":
        case "text":
            return emptyValid(value);
        case "email":
            return emailValid(value);
        case "password":
            return pwdValid(value);
        case "tel":
            return phoneValid(value);
        case "url":
            return urlValid(value);
        default:
            return "";
    }
};

export const getValue = (ip, value) => {
    switch (ip.type) {
        case "select":
            return value
                ? ip.isMulti
                    ? value.map((value) => value.value)
                    : value.value
                : null;
        default:
            return value;
    }
};

// validation
export const validate = (value, ip, isOptional) => {
    const { type } = ip;
    if (!isOptional || (isOptional && value)) {
        const typeErr = value
            ? typeValid(type, value)
            : "This field is required";
        return typeErr || "";
    }
    return "";
};

export const validateForm = (state, dispatch) => {
    let isErr = false;
    const data = {};
    state.allIds.forEach((id) => {
        const ip = state.inputs[id];
        const value = state.values[id];
        const isOptional = state.isOptional.includes(id);
        const err = validate(value, ip, isOptional, state.inputs);
        if (err) {
            isErr = true;
            dispatch(id, err);
        } else if (!isOptional || (isOptional && value)) {
            data[id] = getValue(ip, value);
        }
    });
    return { isErr, data };
};
