export default ({
    door_no = "",
    street_address = "",
    city = "",
    state = "",
    country = {},
    postal_code = "",
    landmark = "",
}) =>
    `${door_no}, ${street_address}, ${landmark},${city}, ${state}, ${
        country ? country.title || "" : ""
    }, ${postal_code}`;
