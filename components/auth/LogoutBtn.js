import React from "react";
import Button from "../styled/Button";
import useSubmit from "../../hooks/http/useSubmit";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/user/user";
import Modal from "../modal/Modal";
import Loader from "../form/Loader";

const LogoutBtn = ({ children, ...props }) => {
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit(() => {
        dispatch(clearUser());
    });

    return (
        <>
            <Button
                {...props}
                onClick={() => {
                    submit({
                        url: "auth/logout/",
                        method: "POST",
                    });
                }}
                disabled={fetching}
            >
                {children}
            </Button>
            <Modal isOpen={fetching} bg="transparent" maxWidth="80px">
                <Loader size={80} />
            </Modal>
        </>
    );
};

export default LogoutBtn;
