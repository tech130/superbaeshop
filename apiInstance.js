import axios from "axios";

const { CancelToken, create, isCancel } = axios;

const apiInstance = create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://api.letsgoal2020.com/"
            : "https://api.letsgoal2020.com/"
});

export { CancelToken, isCancel };

export default apiInstance;
