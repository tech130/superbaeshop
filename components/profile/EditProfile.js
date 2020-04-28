import React, { useState, useCallback, useEffect } from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import Modal from "../modal/Modal";
import Txt from "../styled/Txt";
import ModalHeader from "../modal/ModalHeader";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/user";
import { setValues } from "../../hooks/form/formReducer";

const EditProfile = () => {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                border="1px solid #000"
                padding="3px 20px"
                borderRadius="20px"
            >
                <Txt fontSize="13px">Edit Profile</Txt>
            </Button>
            <EditProfileModal isOpen={open} closeModal={closeModal} />
        </>
    );
};

const editForm = {
    inputs: {
        first_name: {
            name: "first_name",
            type: "text",
            placeholder: "Enter your first name",
        },
        last_name: {
            name: "last_name",
            type: "text",
            placeholder: "Enter your last name",
        },
        email: {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
        },
        // country: {
        //     name: "country",
        //     type: "countrySelect",
        //     placeholder: "Select your country",
        // },
    },
    uiProps: {
        first_name: {
            label: "First Name",
        },
        last_name: {
            label: "Last Name",
        },
        email: {
            label: "Email",
            md: 12,
        },
        // country: {
        //     label: "Country",
        // },
    },
    defaultUiProps: {
        md: 6,
        xs: 6,
    },
    allIds: ["first_name", "last_name", "email"],
    isOptional: ["first_name", "last_name", "email"],
};

const EditProfileModal = ({ closeModal, isOpen }) => {
    const dispatch = useDispatch();

    return (
        <Modal isOpen={isOpen} maxWidth="575px" overlayClick={closeModal}>
            <ModalHeader
                closeModal={closeModal}
                title="Edit Profile"
                desc="Lorem Ipsum is simply dummy text of the printing "
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    form={editForm}
                    config={{
                        url: "users/",
                        method: "POST",
                        processData: false,
                        mimeType: "multipart/form-data",
                        contentType: false,
                    }}
                    succFunc={(data) => {
                        closeModal();
                        dispatch(updateUser(data));
                    }}
                    formatData={(data) => {
                        let formData = new FormData();
                        if (data.first_name) {
                            formData.append("first_name", data.first_name);
                        }
                        if (data.last_name) {
                            formData.append("last_name", data.last_name);
                        }
                        if (data.email) {
                            formData.append("email", data.email);
                        }
                        return formData;
                    }}
                    renderForm={EditForm}
                />
            </Block>
        </Modal>
    );
};

const EditForm = ({ fetching, formDispatch }) => {
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        formDispatch(setValues({
            first_name: user.first_name || "",
            last_name: user.last_name || "",
        }))
    }, [])

    return (
        <>
            <FieldArray />
            <SubmitButton fetching={fetching}>Submit</SubmitButton>
        </>
    );
};

export default EditProfile;
