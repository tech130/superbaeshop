import { fetchFirstPage, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";
import { productSchema } from "./schema";
import keysToQuery from "../../utils/keysToQuery";
import { fetchApi } from "../apiData";
import { fetchQueryData } from "../queryData";

export const prodListName = (query = {}) =>
    `productList--${keysToQuery(query)}`;

export const fetchProducts = (query = {}) =>
    fetchFirstPage(
        prodListName(query),
        { url: `${urls.products}${keysToQuery(query)}` },
        productSchema
    );

export const fetchMoreProducts = (query) =>
    fetchNextPage(prodListName(query), productSchema);

const filterTyps = {
    load: "productFilter/load",
    clear: "productFilter/clear",
};

export const filterName = ({ category = "All", sub_category = "All" }) =>
    `productFilter--category=${category}--sub_category=${sub_category}`;

const loadFilters = (payload, name) => {
    return {
        type: filterTyps.load,
        payload,
        name,
    };
};

export const fetchFilters = ({ category, sub_category }) => {
    return (dispatch) => {
        const name = filterName({ category, sub_category });
        return dispatch(
            fetchApi(
                {
                    url: `${urls.productFilter}${keysToQuery({
                        category,
                        sub_category,
                    })}`,
                },
                name,
                (payload) => loadFilters(payload, name)
            )
        );
    };
};

export const filterSelector = (state, query = {}) => {
    return state?.productFilter?.[filterName(query)] ?? {};
};

export function productFilter(state = {}, action) {
    switch (action.type) {
        case filterTyps.load:
            return {
                ...state,
                [action.name]: action.payload,
            };
        case filterTyps.clear:
            return {};
        default:
            return state;
    }
}

export const categoryListName = (id) => `categoryList--${id}`;

export const categorySelector = (state, id) =>
    state?.queryData?.[categoryListName(id)];

export const fetchCategories = (id) =>
    fetchQueryData(categoryListName(id), { url: urls.categories(id) });
