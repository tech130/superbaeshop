import { useEffect, useState, useRef, useCallback } from "react";
import ajaxerrmsg from "../../utils/ajaxerrmsg";
import { toast } from "react-toastify";
import clientApi, { CancelToken, isCancel } from "../../apiService/clientApi";
import useUser from "../redux/user/useUser";

const useSubmit = (succFunc = null, errFunc = null) => {
    const { token } = useUser();
    const succHandler = useRef(null);
    const errHandler = useRef(null);

    useEffect(() => {
        succHandler.current = succFunc;
    }, [succFunc]);

    useEffect(() => {
        errHandler.current = errFunc;
    }, [errFunc]);

    //set req
    const [config, setConf] = useState(null);
    const [fetching, setfetching] = useState(false);

    useEffect(() => {
        let cancel = null;
        let didCancel = false;

        const fetchData = async () => {
            if (cancel) {
                cancel("cancelled by user");
            }
            setfetching(true);
            try {
                const res = await clientApi({
                    ...config.http,
                    cancelToken: new CancelToken((c) => (cancel = c)),
                });
                if (!didCancel) {
                    setfetching(false);
                    if (succHandler.current) {
                        succHandler.current(res.data);
                    }
                }
            } catch (err) {
                if (!isCancel(err)) {
                    if (!didCancel) {
                        setfetching(false);
                        const errMsg = err.response
                            ? ajaxerrmsg(err.response)
                            : "Something went wrong";
                        toast.error(errMsg || "Something went wrong", {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        if (errHandler.current) {
                            errHandler.current(errMsg);
                        }
                    }
                }
            }
        };

        if (config) {
            fetchData();
        }

        return () => {
            didCancel = true;
            if (cancel) {
                cancel("cancelled by user");
            }
        };
    }, [config]);

    const submit = useCallback(
        (config) => {
            if (!config) {
                return;
            }
            if (token) {
                config.headers = {
                    ...(config.headers || {}),
                    Authorization: `Token ${token}`,
                };
            }
            setConf({
                http: config,
                timeStamp: Date.now(),
            });
        },
        [token]
    );

    return [fetching, submit];
};

export default useSubmit;
