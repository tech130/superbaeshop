import { schema } from "normalizr";

const reduceProductCountry = (product_country = []) =>
    Array.isArray(product_country)
        ? product_country.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
        : {};

// product
export const productSchema = new schema.Entity(
    "product",
    {},
    {
        processStrategy: (value) => {
            if (value && value.product_country) {
                return {
                    ...value,
                    product_country: reduceProductCountry(
                        value.product_country
                    ),
                };
            }
            return value;
        },
    }
);

// cart
export const cartSchema = new schema.Entity("cart", {
    product: productSchema,
});
