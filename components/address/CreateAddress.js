import React, { useState, useCallback } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import Modal from "../modal/Modal";
import urls from "../../apiService/urls";

const form = {
    inputs: {
        name: {
            name: "name",
            type: "text",
            placeholder: "Name",
        },
        phone_country: {
            name: "phone_country",
            type: "countrySelect",
            placeholder: "+91",
        },
        phone: {
            name: "phone",
            type: "text",
            placeholder: "Mobile Number",
        },
        door_no: {
            name: "door_no",
            type: "text",
            placeholder: "Door number",
        },
        street_address: {
            name: "street_address",
            type: "text",
            placeholder: "Street Address",
        },
        locality: {
            name: "locality",
            type: "text",
            placeholder: "Locality",
        },
        city: {
            name: "city",
            type: "text",
            placeholder: "City",
        },
        landmark: {
            name: "landmark",
            type: "text",
            placeholder: "landmark",
        },
        country: {
            name: "country",
            type: "countrySelect",
            placeholder: "Country",
        },
        postal_code: {
            name: "postal_code",
            type: "number",
            placeholder: "Zipcode",
        },
        address_type: {
            name: "address_type",
            type: "select",
            placeholder: "Address type",
            options: [
                {
                    label: "Home",
                    value: "Home",
                },
                {
                    label: "Work",
                    value: "Work",
                },
            ],
        },
    },
    uiProps: {
        name: {
            md: 12,
        },
        phone: {
            md: 8,
        },
        phone_country: {
            md: 4,
        },
    },
    defaultUiProps: {
        md: 6,
    },
    allIds: [
        "name",
        "phone_country",
        "phone",
        "door_no",
        "street_address",
        "locality",
        "city",
        "landmark",
        "country",
        "postal_code",
        "address_type",
    ],
};

const CreateAddress = ({ closeModal }) => {
    return (
        <>
            <ModalHeader
                title={"Add Address"}
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                <FormCon
                    config={{
                        url: urls.address,
                        method: "POST",
                    }}
                    form={form}
                    renderForm={RenderForm}
                />
            </Block>
        </>
    );
};

const RenderForm = ({ fetching }) => {
    return (
        <>
            <FieldArray />
            <SubmitButton fetching={fetching}>CONTINUE</SubmitButton>
        </>
    );
};

const AddressModal = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} maxWidth="575px">
            <CreateAddress closeModal={closeModal} />
        </Modal>
    );
};

export const AddressModalBtn = ({ Btn = () => null }) => {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Btn onClick={() => setOpen(!open)} />
            <AddressModal isOpen={open} closeModal={closeModal} />
        </>
    );
};

export default CreateAddress;
