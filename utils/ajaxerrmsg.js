function extractError(err) {
    if (typeof err === "string") {
        return err;
    }
    if (Array.isArray(err)) {
        if (err.length > 0) {
            return extractError(err[0]);
        }
        return "Something went wrong";
    }
    if (typeof err === "object") {
        let keys = Object.keys(err);
        if (keys.length > 0) {
            return extractError(err[keys[0]]);
        }
        return "Something went wrong";
    }
    return "Something went wrong";
}

// ajax err message
function ajaxerrmsg(res = {}) {
    switch (res.status) {
        case 406:
        case 400:
            return extractError(res.data || {});
        case 404:
            return "Request not found";
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
