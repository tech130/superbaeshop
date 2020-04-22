import axios from "axios";

const { CancelToken, create, isCancel } = axios;

const apiInstance = create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "http://spaceandbeauty.billioncart.in/"
            : "http://spaceandbeauty.billioncart.in/"
});

export { CancelToken, isCancel };

export default apiInstance;
