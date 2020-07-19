import React, { useEffect } from "react";
import Modal from "../modal/Modal";
import useSubmit from "../../hooks/http/useSubmit";
import urls from "../../apiService/urls";
import Loader from "../form/Loader";

const SaveCart = () => {
    const [fetching, submit] = useSubmit();

    useEffect(() => {
        submit({
            url: urls.cart,
            method: "POST",
        });
    }, []);

    return (
        <Modal isOpen={fetching}>
            <Loader size={50} />
        </Modal>
    );
};

export default SaveCart;
