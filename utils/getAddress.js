export default ({
    door_no = "",
    street_address = "",
    locality = "",
    city = "",
    state = "",
    country = {},
    postal_code = "",
    landmark = "",
}) =>
    `${door_no}, ${street_address},  ${locality}, ${landmark},${city}, ${state}, ${
        country ? country.title || "" : ""
    }, ${postal_code}`;
