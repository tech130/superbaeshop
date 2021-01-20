import axios from "axios";
import urls from "./urls"

export default (config = {}) =>
    axios.create({
        baseURL: urls.baseURL,
        ...config,
    });
