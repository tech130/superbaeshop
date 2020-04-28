import React, { useState, useCallback } from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import Modal from "../modal/Modal";
import Txt from "../styled/Txt";
import ModalHeader from "../modal/ModalHeader";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";

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
                    renderForm={({ fetching }) => (
                        <>
                            <FieldArray />
                            <SubmitButton fetching={fetching}>
                                Submit
                            </SubmitButton>
                        </>
                    )}
                />
            </Block>
        </Modal>
    );
};

export default EditProfile;
