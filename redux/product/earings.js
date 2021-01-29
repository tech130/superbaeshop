import { fetchFirstPage, fetchNextPage } from "../pagination";
import urls from "../../apiService/urls";
import { productSchema } from "./schema";

export const earingListName = "orderList";

export const fetchEarings = () =>
    fetchFirstPage(
        earingListName,
        { url: `${urls.products}?sub_category=2` },
        productSchema
    );

export const fetchMoreEarings = () =>
    fetchNextPage(earingListName, productSchema);
