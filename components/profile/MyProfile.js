import React, { useEffect } from "react";
import Wallet from "./Wallet";
import useUser from "../../hooks/redux/user/useUser";
import { Col, Row, Container } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import ProfileDetails from "./ProfileDetails";
import { H6 } from "../styled/Headings";
import WalletList from "./WalletList";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/user/user";

const MyProfile = () => {
    const dispatch = useDispatch();
    const user = useUser();
    const { token } = user;

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile());
        }
    }, [token]);

    return (
        <Block padding="35px 0px">
            <Container>
                {token ? (
                    <Row>
                        <Col lg={6}>
                            <ProfileDetails {...user} />
                        </Col>
                        <Col lg={6}>
                            <Wallet />
                            <H6>Wallet History</H6>
                            <WalletList />
                        </Col>
                    </Row>
                ) : null}
            </Container>
        </Block>
    );
};

export default MyProfile;
