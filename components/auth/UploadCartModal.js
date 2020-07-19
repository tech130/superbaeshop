import React from "react";
import Loader from "../form/Loader";
import { useSelector } from "react-redux";
import { UPLOAD_LOCAL_CART_APIDATA_KEY } from "../../redux/user/cart";
import Modal from "../modal/Modal";

const UploadCartModal = () => {
    const { fetching } = useSelector(
        (state) => state.apiData[UPLOAD_LOCAL_CART_APIDATA_KEY] || {}
    );

    return (
        <Modal isOpen={fetching} maxWidth="100px" bg="transparent">
            <Loader size={100} />
        </Modal>
    );
};

export default UploadCartModal;
