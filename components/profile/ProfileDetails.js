import React from "react";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import Flex from "../styled/Flex";
import styled from "styled-components";
import Txt from "../styled/Txt";
import { Row, Col } from "styled-bootstrap-grid";
import P from "../styled/P";
import EditProfile from "./EditProfile";
import EditProfilePic from "./EditProfilePic";
// import { useSelector } from "react-redux";

const ProfileTop = styled(Flex)`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
`;

const ProfileDetails = ({ user, profile_pic }) => {
    const fullName = `${user.first_name || ""}${
        user.last_name ? ` ${user.last_name}` : ""
    }`;

    return (
        <>
            <ProfileTop alignItems="center">
                <EditProfilePic profile_pic={profile_pic} />
                <Block margin="0px 0px 0px 20px">
                    <H5>Welcome, {fullName || "User"}</H5>
                    <EditProfile />
                </Block>
            </ProfileTop>
            <Row>
                <ProfileItem heading="Name" desc={fullName} />
                <ProfileItem heading="Email" desc="" />
                <ProfileItem heading="Phone Number" desc={user.username} />
                <ProfileItem heading="Alternate Phone Number" desc="" />
                <ProfileItem heading="Street Address" desc="" />
                <ProfileItem heading="Locality" desc="" />
                <ProfileItem heading="City" desc="" />
                <ProfileItem heading="State" desc="" />
                <ProfileItem heading="Country" desc="" />
                <ProfileItem heading="Pincode" desc="" />
            </Row>
        </>
    );
};

const ProfileItem = ({ heading = "", desc = "" }) => {
    return (
        <Col md={6}>
            <Txt fontSize="14px">{heading}</Txt>
            <P weight={600}>{desc || "-"}</P>
        </Col>
    );
};

export default ProfileDetails;
