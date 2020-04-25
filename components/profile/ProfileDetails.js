import React from "react";
import Img from "../styled/Img";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import Flex from "../styled/Flex";
import Button from "../styled/Button";
import styled from "styled-components";
import Txt from "../styled/Txt";
import { Row, Col } from "styled-bootstrap-grid";
import P from "../styled/P";

const ProfileTop = styled(Flex)`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
`;

const ProfileDetails = () => {
    return (
        <>
            <ProfileTop alignItems="center">
                <Img
                    width="80px"
                    height="80px"
                    round
                    src="/images/dilip.jpg"
                    alt=""
                />
                <Block margin="0px 0px 0px 15px">
                    <H5>Dilip Ashokkumar</H5>
                    <Button
                        border="1px solid #000"
                        padding="3px 20px"
                        borderRadius="20px"
                    >
                        <Txt fontSize="13px">Edit Profile</Txt>
                    </Button>
                </Block>
            </ProfileTop>
            <Row>
                <ProfileItem 
                    heading="Name"
                    desc="Dilip Ashokkumar"
                />
                <ProfileItem 
                    heading="Email"
                    desc="dilip@billiontags.com"
                />
                <ProfileItem 
                    heading="Phone Number"
                    desc="918610074983"
                />
                <ProfileItem 
                    heading="Alternate Phone Number"
                    desc="918610074983"
                />
                <ProfileItem 
                    heading="Street Address"
                    desc="Test Address"
                />
                <ProfileItem 
                    heading="Locality"
                    desc="Test Locality"
                />
                <ProfileItem 
                    heading="City"
                    desc="Cheannai"
                />
                <ProfileItem 
                    heading="State"
                    desc="Chennai"
                />
                <ProfileItem 
                    heading="Country"
                    desc="India"
                />
                <ProfileItem 
                    heading="Pincode"
                    desc="625001"
                />
            </Row>
        </>
    );
};

const ProfileItem = ({ heading = "", desc = "" }) => {
    return (
        <Col md={6}>
            <Txt fontSize="14px">{heading}</Txt>
            <P weight={600}>{desc}</P>
        </Col>
    );
};

export default ProfileDetails;
