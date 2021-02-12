import { useEffect, useState, useRef, useCallback } from "react";
import clientApi, { CancelToken, isCancel } from "../../apiService/clientApi";
import { toast } from "react-toastify";
import ajaxerrmsg from "../../utils/ajaxerrmsg";

const errToast = (errMsg) =>
    toast.error(errMsg || "Something went wrong", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

const useClientApi = () => {
    const [fetching, setfetching] = useState(false);
    const cancel = useRef();

    useEffect(() => {
        //cancel request on unmount
        return () => {
            if (cancel.current) {
                cancel.current();
            }
        };
    }, []);

    const submit = useCallback(async (config = {}, showErrToast = true) => {
        if (cancel.current) {
            //cancel old request
            cancel.current();
        }
        setfetching(true);
        return clientApi({
            ...config,
            //create new cancel token
            cancelToken: new CancelToken((c) => {
                cancel.current = c;
            }),
        })
            .then((res) => res.data)
            .catch((err) => {
                if (isCancel(err)) {
                    console.log("Request canceled", err.message);
                } else {
                    // handle error
                    const errMsg = err.response
                        ? ajaxerrmsg(err.response)
                        : "Something went wrong";
                    if (showErrToast) {
                        errToast(errMsg);
                    }
                    err.message = errMsg;
                    throw err;
                }
            })
            .finally(() => {
                setfetching(false);
            });
    }, []);

    return [fetching, submit];
};

export default useClientApi;
