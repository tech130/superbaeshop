import { schema } from "normalizr";

// product country
// export const productCountryScheme = new schema.Entity("product_country");

// product
export const productSchema = new schema.Entity("product");

// cart
export const cartSchema = new schema.Entity("cart", {
    product: productSchema,
});
