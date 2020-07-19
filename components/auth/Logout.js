import React, { useEffect } from "react";
import useSubmit from "../../hooks/http/useSubmit";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/user";
import Loader from "../form/Loader";
import styled from "styled-components";
import urls from "../../apiService/urls";
import useUser from "../../hooks/redux/user/useUser";
import { useRouter } from "next/router";
import { removeTokenOnBrowser } from "../../utils/handleToken";

const AbsFull = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Logout = () => {
    const router = useRouter();
    const { token } = useUser();
    const dispatch = useDispatch();
    const [fetching, submit] = useSubmit(
        () => {
            handleLogout();
        },
        () => {
            handleLogout();
        }
    );

    const handleLogout = () => {
        removeTokenOnBrowser();
        dispatch(logout());
        router.replace("/");
        return;
    };

    useEffect(() => {
        if (token) {
            submit({
                url: urls.logout,
                method: "POST",
            });
        } else {
            handleLogout();
        }
    }, []);

    return <AbsFull>{fetching && <Loader size={80} />}</AbsFull>;
};

export default Logout;
