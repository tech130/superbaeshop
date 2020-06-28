import axios from "axios";

const { CancelToken, create, isCancel } = axios;

const baseURL = "https://spaceandbeauty.billioncart.in/";

const apiInstance = create({
    baseURL,
});

export { CancelToken, isCancel, baseURL };

export default apiInstance;
