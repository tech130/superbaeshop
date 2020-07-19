import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Block from "../../components/styled/Block";
import { Container, Col, Row } from "styled-bootstrap-grid";
import ProfileDetails from "../../components/profile/ProfileDetails";
import Wallet from "../../components/profile/Wallet";
import { H6 } from "../../components/styled/Headings";
import WalletItem from "../../components/profile/WalletItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/user/user";
import { fetchMaster } from "../../redux/master";
import getToken from "../../utils/getToken";
import { useRouter } from "next/router";
import { common } from "../../redux/handlePages";

const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token, isLoaded, ...restUser } = useSelector((state) => state.user);

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile());
        } else {
            router.replace("/");
        }
    }, [token]);

    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    {token ? (
                        <Row>
                            <Col lg={6}>
                                <ProfileDetails {...restUser} />
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
                    ) : isLoaded ? null : null}
                </Container>
            </Block>
        </Layout>
    );
};

Profile.getInitialProps = async (ctx) => {
    await common(ctx);
};

export default Profile;
