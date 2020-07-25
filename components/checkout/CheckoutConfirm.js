import React from "react";
import Modal from "../modal/Modal";
import ModalHeader from "../modal/ModalHeader";
import Block from "../styled/Block";
import styled from "styled-components";
import useDateFormat from "../../hooks/useDateFormat";
import Flex from "../styled/Flex";
import getAddress from "../../utils/getAddress";
import SubmitButton from "../form/SubmitButton";
import urls from "../../apiService/urls";
import useSubmit from "../../hooks/http/useSubmit";
import { useRouter } from "next/router";
import { useCountryParam } from "../common/CountryLink";

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
    }

    th {
        font-weight: 500;
    }
`;

const CheckoutConfirm = ({ closeModal, data = {} }) => {
    const router = useRouter();
    const country = useCountryParam();
    const createdOn = useDateFormat(data.created_on, "llll");

    const [fetching, submit] = useSubmit(() => {
        router.replace(`/[country]/orders`, `/${country}/orders`);
    });

    const onClick = () => {
        if (data.id && data.payment_type === "COD") {
            submit({
                url: urls.cod(data.id),
                method: "GET",
            });
        }
    };

    const currencyCode =
        data && data.address && data.address.country
            ? data.address.country.currency_type || ""
            : "";

    return (
        <>
            <ModalHeader
                title="Checkout Confirmation"
                desc={`Order Id: ${data.tracking_client_id || ""}`}
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
                                    +{data.dial_code} {data.phone}
                                </td>
                            </tr>
                        )}
                        {data.alt_phone && (
                            <tr>
                                <th>Alternate Phone Number</th>
                                <td>
                                    +{data.alt_dial_code} {data.alt_phone}
                                </td>
                            </tr>
                        )}
                        {createdOn && (
                            <tr>
                                <th>Created on</th>
                                <td>{createdOn}</td>
                            </tr>
                        )}
                        {data.payment_type && (
                            <tr>
                                <th>Payment Type</th>
                                <td>{data.payment_type}</td>
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
                        {data.coupon && (
                            <tr>
                                <th>Coupon Code</th>
                                <td>{data.coupon}</td>
                            </tr>
                        )}
                        {data.coupon_amount && (
                            <tr>
                                <th>Coupon Amount</th>
                                <td>
                                    {currencyCode}
                                    {data.coupon_amount}
                                </td>
                            </tr>
                        )}
                        {data.shipping_charge && (
                            <tr>
                                <th>Shipping Fee</th>
                                <td>
                                    {currencyCode}
                                    {data.shipping_charge}
                                </td>
                            </tr>
                        )}
                        {data.cod_charge && (
                            <tr>
                                <th>COD Charge</th>
                                <td>
                                    {currencyCode}
                                    {data.cod_charge}
                                </td>
                            </tr>
                        )}
                        {data.other_charge && (
                            <tr>
                                <th>Other Charges</th>
                                <td>
                                    {currencyCode}
                                    {data.other_charge}
                                </td>
                            </tr>
                        )}

                        {data.total_amount && (
                            <tr>
                                <th>Total Amount</th>
                                <td>
                                    {currencyCode}
                                    {data.total_amount}
                                </td>
                            </tr>
                        )}
                        {data.pay_amount && (
                            <tr>
                                <th>Pay Amount</th>
                                <td>
                                    {currencyCode}
                                    {data.pay_amount}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </DtTble>
                <SubmitButton fetching={fetching} onClick={onClick}>
                    CONFIRM
                </SubmitButton>
            </Block>
        </>
    );
};

const Address = ({
    address_type = "",
    ...rest
}) => {
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
