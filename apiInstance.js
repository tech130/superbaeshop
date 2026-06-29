import axios from "axios";

const { CancelToken, create, isCancel } = axios;

const baseURL = "https://api.spaceandbeauty.com";
// const baseURL = "http://localhost:8000/";

const apiInstance = create({
    baseURL,
});

export { CancelToken, isCancel, baseURL };

export default apiInstance;
