import React from "react";
import Modal from "../modal/Modal";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import styled from "styled-components";
import Flex from "../styled/Flex";
import getAddress from "../../utils/getAddress";
import SubmitButton from "../form/SubmitButton";
import urls from "../../apiService/urls";
import useSubmit from "../../hooks/http/useSubmit";
import { useRouter } from "next/router";
import { useCountryParam } from "../common/CountryLink";
import Txt from "../styled/Txt";
import useScript from "../../hooks/useScript";
import rZPay from "../../utils/rzPay";
import ModalLoader from "../modal/ModalLoader";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/user/cart";
import OrderSummary from "./OrderSummary";

const DtTble = styled.table`
    border-collapse: collapse;
    width: 100%;
    font-size: 15px;
    margin-bottom: 15px;

    td,
    th,
    tr {
        border: 0;
    }

    td,
    th {
        vertical-align: top;
        padding-bottom: 10px;
        padding-left: 5px;
        padding-right: 5px;
        min-width: 145px;
    }

    th {
        font-weight: 500;
    }
`;

const CheckoutConfirm = ({ closeModal, data = {} }) => {
    return (
        <>
            <ModalHeader
                title="Checkout Confirmation"
                desc={
                    <>
                        Order Id:{" "}
                        <Txt weight={500}>{data.tracking_client_id || ""}</Txt>`
                    </>
                }
                closeModal={closeModal}
            />
            <Block padding="15px 15px">
                <DtTble>
                    <tbody>
                        {data.name && (
                            <tr>
                                <th>Name</th>
                                <td>{data.name}</td>
                            </tr>
                        )}
                        {data.email && (
                            <tr>
                                <th>Email</th>
                                <td>{data.email}</td>
                            </tr>
                        )}
                        {data.phone && (
                            <tr>
                                <th>Phone Number</th>
                                <td>
                                    +{data.dial_code} {data.phone}{" "}
                                    {data.alt_phone && data.alt_dial_code
                                        ? `/ +${data.alt_dial_code} ${data.alt_phone}`
                                        : ""}
                                </td>
                            </tr>
                        )}
                        {data.address && data.address.id && (
                            <tr>
                                <th>Address</th>
                                <td>
                                    <Address {...data.address} />
                                </td>
                            </tr>
                        )}
                        <OrderSummary {...data} />
                    </tbody>
                </DtTble>
                {data.payment_type === "Online" && data.id ? (
                    <OnlineCheckout data={data} />
                ) : data.payment_type === "COD" && data.id ? (
                    <CodCheckout id={data.id} />
                ) : null}
            </Block>
        </>
    );
};

const CodCheckout = ({ id }) => {
    const router = useRouter();
    const country = useCountryParam();
    const dispatch = useDispatch();

    const [fetching, submit] = useSubmit(() => {
        dispatch(clearCart());
        router.replace(`/[country]/thank-you`, `/${country}/thank-you`);
    });

    const onClick = () => {
        submit({
            url: urls.cod(id),
            method: "GET",
        });
    };

    return (
        <>
            <SubmitButton fetching={fetching} onClick={onClick}>
                CONFIRM
            </SubmitButton>
            <ModalLoader isOpen={fetching} />
        </>
    );
};

const OnlineCheckout = ({ data }) => {
    const [loaded] = useScript("https://checkout.razorpay.com/v1/checkout.js");
    const router = useRouter();
    const country = useCountryParam();
    const dispatch = useDispatch();

    const [fetching, submit] = useSubmit(() => {
        dispatch(clearCart());
        router.replace(`/[country]/thank-you`, `/${country}/thank-you`);
    });

    const handleSuccess = (data) => {
        submit({
            url: urls.paymentSuccess,
            method: "POST",
            data,
        });
    };

    const onClick = () => {
        if (loaded) {
            rZPay(data, handleSuccess);
        }
    };

    return (
        <>
            <SubmitButton
                disabled={!loaded}
                fetching={fetching}
                onClick={onClick}
            >
                CONFIRM
            </SubmitButton>
            <ModalLoader isOpen={fetching} />
        </>
    );
};

const Address = ({ address_type = "", ...rest }) => {
    return (
        <Flex vertical>
            <div>{address_type}</div>
            <div>{`${getAddress(rest)}`}</div>
        </Flex>
    );
};

export const CheckoutConfirmModal = ({ isOpen, closeModal, data = {} }) => {
    return (
        <Modal isOpen={isOpen}>
            <CheckoutConfirm data={data} closeModal={closeModal} />
        </Modal>
    );
};

export default CheckoutConfirm;
