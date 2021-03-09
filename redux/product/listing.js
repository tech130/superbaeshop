import { fetchFirstPage, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";
import { productSchema } from "./schema";
import keysToQuery from "../../utils/keysToQuery";

export const prodListName = (query = {}) => `productList--${keysToQuery(query)}`;

export const fetchProducts = (query = {}) =>
    fetchFirstPage(
        prodListName(query),
        { url: `${urls.products}${keysToQuery(query)}` },
        productSchema
    );

export const fetchMoreProducts = (query) =>
    fetchNextPage(prodListName(query), productSchema);
