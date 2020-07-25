import React from "react";
import Wallet from "./Wallet";
import WalletItem from "./WalletItem";
import useUser from "../../hooks/redux/user/useUser";
import { Col, Row, Container } from "styled-bootstrap-grid";
import Block from "../styled/Block";
import ProfileDetails from "./ProfileDetails";
import { H6 } from "../styled/Headings";

const MyProfile = () => {
    const user = useUser();
    return (
        <Block padding="35px 0px">
            <Container>
                {user.token ? (
                    <Row>
                        <Col lg={6}>
                            <ProfileDetails {...user} />
                        </Col>
                        <Col lg={6}>
                            <Wallet />
                            <H6>Wallet History</H6>
                            <WalletItem />
                            <WalletItem />
                            <WalletItem />
                            <WalletItem />
                            <WalletItem />
                        </Col>
                    </Row>
                ) : null}
            </Container>
        </Block>
    );
};

export default MyProfile;
