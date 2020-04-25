import React from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import ProfileDetails from "../../components/profile/ProfileDetails";
import Wallet from "../../components/profile/Wallet";
import { H6 } from "../../components/styled/Headings";
import WalletItem from "../../components/profile/WalletItem";

const Profile = () => {
    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <ProfileDetails />
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
                </Container>
            </Block>
        </Layout>
    );
};

export default Profile;
