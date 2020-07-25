import React, { useState, useCallback } from "react";
import FormCon from "../form/FormCon";
import FieldArray from "../form/FieldArray";
import SubmitButton from "../form/SubmitButton";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import Modal from "../modal/Modal";
import urls from "../../apiService/urls";
import { useActiveCountry } from "../common/CountryLink";
import { useDispatch } from "react-redux";
import { addAddress } from "../../redux/user/address";

const form = (countries = []) => ({
    inputs: {
        name: {
            name: "name",
            type: "text",
            placeholder: "Name",
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
        state: {
            name: "state",
            type: "text",
            placeholder: "State",
        },
        landmark: {
            name: "landmark",
            type: "text",
            placeholder: "Landmark",
        },
        country_id: {
            name: "country_id",
            type: "select",
            placeholder: "Country",
            options: countries.map((x) => ({
                label: x.title,
                value: x.id,
                image: x.image,
            })),
        },
        postal_code: {
            name: "postal_code",
            type: "number",
            placeholder: "Zipcode",
        },
        address_type: {
            name: "address_type",
            type: "radiogroup",
            options: [
                {
                    title: "Home",
                    value: "Home",
                },
                {
                    title: "Work",
                    value: "Work",
                },
            ],
        },
    },
    uiProps: {
        address_type: {
            md: 12,
        },
        street_address: {
            md: 12,
        },
        locality: {
            md: 12,
        },
    },
    defaultUiProps: {
        md: 6,
    },
    allIds: [
        "address_type",
        "door_no",
        "landmark",
        "street_address",
        "locality",
        "city",
        "state",
        "country_id",
        "postal_code",
    ],
});

const CreateAddress = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { countries } = useActiveCountry();

    return (
        <>
            <ModalHeader
                title={"Add Address"}
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                closeModal={closeModal}
            />
            <Block padding="25px 15px 30px">
                {countries.length > 1 && (
                    <FormCon
                        config={{
                            url: urls.address,
                            method: "POST",
                        }}
                        form={form(countries)}
                        renderForm={RenderForm}
                        resetOnSuccess
                        succFunc={(data) => {
                            if (closeModal) {
                                closeModal();
                            }
                            dispatch(addAddress(data));
                        }}
                    />
                )}
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
