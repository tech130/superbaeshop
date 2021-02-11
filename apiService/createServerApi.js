import axios from "axios";
import urls from "./urls";

const createServerApi = (config = {}) =>
    axios.create({
        baseURL: urls.baseURL,
        ...config,
    });

export default createServerApi;
