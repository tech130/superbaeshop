function extractError(obj = {}) {
    const errors = [];
    Object.keys(obj).forEach((key) => {
        if (key === "non_field_errors") {
            errors.concat(obj.non_field_errors);
        } else if (Array.isArray(obj[key])) {
            errors.concat(
                obj[key].map((x) =>
                    typeof x === "string" ? x.replace("This", key) : ""
                )
            );
        }
    });
    return errors.join(" ");
}

// ajax err message
function ajaxerrmsg(res = {}) {
    switch (res.status) {
        case 400:
            return extractError(res);
        case 405:
            return "Method not allowed";
        case 401:
            return "Unauthourized user";
        case 500:
        default:
            return "Server Error";
    }
}

export default ajaxerrmsg;
