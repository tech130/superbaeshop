const keysToQuery = (keys) => {
    let q = [];
    for (let key in keys) {
        if (keys[key] !== undefined) {
            q.push(`${key}=${keys[key]}`);
        }
    }
    return "?" + q.join("&");
};

export default keysToQuery;
