import React, { useEffect } from "react";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import Flex from "../styled/Flex";
import styled from "styled-components";
import Txt from "../styled/Txt";
import { Row, Col } from "styled-bootstrap-grid";
import P from "../styled/P";
import EditProfile from "./EditProfile";
import EditProfilePic from "./EditProfilePic";
import { useDispatch, useSelector } from "react-redux";
import { addrTyps, fetchAddress } from "../../redux/user/address";
import getAddress from "../../utils/getAddress";
import { FormCol } from "../form/FieldCon";
import { ApiContent } from "../common/DynamicContent";
import { FormRow } from "../form/FieldArray";
import AddressLoder from "../address/AddressLoder";
import { AddressModalBtn } from "../address/CreateAddress";
import { LinkButton } from "../styled/Button";

const ProfileTop = styled(Flex)`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
`;

const ProfileDetails = ({ user, profile_pic }) => {
    const fullName = `${user.first_name || ""}${
        user.last_name ? ` ${user.last_name}` : ""
    }`;

    const dispatch = useDispatch();
    const list = useSelector((state) => state.addressList);

    useEffect(() => {
        dispatch(fetchAddress());
    }, []);

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
                <ProfileItem heading="Email" desc={user.email || ""} />
                <ProfileItem heading="Phone Number" desc={user.username} />
            </Row>
            <Flex justifyContent="space-between" margin="0px 0px 8px 0px">
                <Txt fontSize="14px">My Address</Txt>
                <AddressModalBtn
                    Btn={({ onClick }) => (
                        <LinkButton
                            textDecor="underline"
                            fontSize="13px"
                            onClick={onClick}
                        >
                            + Add Address
                        </LinkButton>
                    )}
                />
            </Flex>
            <ApiContent name={addrTyps.apiName} loader={<AddressLoder />}>
                {list.length > 0 && (
                    <FormRow>
                        {list.map((item) => (
                            <FormCol md={12} key={item.id}>
                                <AddressItem {...item} />
                            </FormCol>
                        ))}
                    </FormRow>
                )}
            </ApiContent>
        </>
    );
};

const AddressItem = ({ address_type = "", ...rest }) => {
    return (
        <Flex
            vertical
            padding="10px"
            border="2px solid #f5f5f5"
            margin="0px 0px 5px 0px"
            borderRadius="10px"
        >
            <Txt fontSize="14px" weight="500">
                {address_type}
            </Txt>
            <Txt fontSize="12px">{`${getAddress(rest)}`}</Txt>
        </Flex>
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
