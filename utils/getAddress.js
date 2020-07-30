const addr = [
    "door_no",
    "street_address",
    "locality",
    "landmark",
    "city",
    "state",
    "country_id",
    "postal_code",
];

export default (val = {}) =>
    addr
        .reduce((acc, cur) => (val[cur] ? [...acc, val[cur]] : acc), [])
        .join(", ");
