import React from "react";
import Modal from "./Modal";
import Loader from "../form/Loader";

const ModalLoader = ({ isOpen }) => {
    return (
        <Modal
            overlayStyle={{ zIndex: 100 }}
            id="modal-loader"
            isOpen={isOpen}
            maxWidth="100px"
            bg="transparent"
        >
            <Loader size={100} />
        </Modal>
    );
};

export default ModalLoader;
