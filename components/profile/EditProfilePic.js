import React, { useRef } from "react";
import Img from "../styled/Img";
import { RelativeBlock } from "../styled/Block";
import styled from "styled-components";
import EditIcon from "../icons/EditIcon";
import Button from "../styled/Button";
import Flex from "../styled/Flex";
import useSubmit from "../../hooks/http/useSubmit";
import Loader from "../form/Loader";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/user";

const EditBtn = styled(Button)`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
    position: absolute;
    top: -2px;
    right: -2px;
`;

const EditProfilePic = ({ profile_pic }) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [fetching, submit] = useSubmit((data) => dispatch(updateUser(data)));

    const onChange = () => {
        if (ref.current && ref.current.files && ref.current.files.length > 0) {
            let formData = new FormData();
            formData.append("profile_pic", ref.current.files[0]);
            submit({
                url: "users/",
                data: formData,
                method: "POST",
                processData: false,
                mimeType: "multipart/form-data",
                contentType: false,
            });
        }
    };

    return (
        <RelativeBlock>
            {!fetching && (
                <EditBtn as="label">
                    <input
                        type="file"
                        ref={ref}
                        onChange={onChange}
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    <EditIcon size={12} />
                </EditBtn>
            )}
            <Flex
                alignItems="center"
                justifyContent="center"
                width="80px"
                height="80px"
                borderRadius="50%"
            >
                {fetching ? (
                    <Loader size={25} fill="#000" />
                ) : (
                    <Img
                        width="80px"
                        height="80px"
                        round
                        src={profile_pic || "/images/account.svg"}
                        alt=""
                    />
                )}
            </Flex>
        </RelativeBlock>
    );
};

export default EditProfilePic;
