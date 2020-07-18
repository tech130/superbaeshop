import axios from "axios";
import urls from "./urls"

const { CancelToken, create, isCancel } = axios;

const clientApi = create({
    baseURL: urls.baseURL,
});

export { CancelToken, isCancel };

export default clientApi;
