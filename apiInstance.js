import axios from "axios";

const { CancelToken, create, isCancel } = axios;

// const baseURL = "https://spaceandbeauty.billiontags.com/";
const baseURL = "https://spaceandbeauty.billiontags.com/";

const apiInstance = create({
    baseURL,
});

export { CancelToken, isCancel, baseURL };

export default apiInstance;
