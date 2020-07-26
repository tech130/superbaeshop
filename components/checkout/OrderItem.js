import React from "react";
import Button from "../styled/Button";
import Flex, { FlexItem } from "../styled/Flex";
import { H6 } from "../styled/Headings";
import { Col, Row, Container } from "styled-bootstrap-grid";
import Txt from "../styled/Txt";
import CalenderIcon from "../icons/CalenderIcon";
import OrderIcon from "../icons/OrderIcon";
import Block from "../styled/Block";
import styled from "styled-components";
import P from "../styled/P";
import { useSelector } from "react-redux";
import useDateFormat from "../../hooks/useDateFormat";
import getAddress from "../../utils/getAddress";

const OrderImg = styled.img`
    width: 80px;
    margin-right: 15px;
    height: auto;
`;

const OrderSumSty = styled.table`
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;

    td,
    th,
    tr {
        border: 0;
    }

    td,
    th {
        vertical-align: top;
        padding-bottom: 5px;
    }

    th {
        font-weight: 400;
    }

    td {
        text-align: right;
    }
`;

const OrderHr = styled.div`
    border-top: 1px solid #f5f5f5;
`;

const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const DelP = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`;

const OrderItem = ({
    tracking_client_id = "",
    payment_type = "",
    shipping_charge = "",
    other_charge = "",
    total_amount = "",
    coupon_amount = "",
    coupon,
    pay_amount,
    order_items = [],
    address = {},
    created_on = "",
    name = "",
    phone = "",
    alt_phone = "",
    dial_code = "",
    alt_dial_code = "",
    status = "",
    email = "",
}) => {
    const { country } = address || {};
    const { currency_type } = country || {};

    const created = useDateFormat(created_on, "lll");

    return (
        <Block
            padding="15px 0px"
            border="solid 2px #f5f5f5"
            borderRadius="10px"
            margin="0px 0px 15px 0px"
        >
            <Container fluid>
                <OrderHeader>
                    <Flex alignItems="center" padding="0px 0px 10px 0px">
                        <OrderIcon size={14} strokeWidth={1} />
                        <Txt fontSize={14} margin="0px 5px">
                            Order ID: <Txt weight={600}>{tracking_client_id}</Txt>
                        </Txt>
                    </Flex>
                    <Flex alignItems="center" padding="0px 0px 10px 0px">
                        <CalenderIcon size={14} strokeWidth={1} />
                        <Txt fontSize={14} margin="0px 5px">
                            {created}
                        </Txt>
                    </Flex>
                </OrderHeader>
                <OrderHr />
                <Row>
                    <Col md={4}>
                        <Block padding="10px 0px">
                            {Array.isArray(order_items) &&
                                order_items.map((item) => (
                                    <OrderCartItem {...item} key={item.id} />
                                ))}
                        </Block>
                    </Col>
                    <Col md={4}>
                        <Block padding="10px 0px">
                            <H6>Delivery Details</H6>
                            <DelP>{name}</DelP>
                            <DelP>{email}</DelP>
                            <DelP>
                                +{dial_code}
                                {phone}
                            </DelP>
                            {alt_dial_code && alt_phone && (
                                <DelP>
                                    +{dial_code}
                                    {phone}
                                </DelP>
                            )}
                            <DelP>{`${getAddress(address)}`}</DelP>
                        </Block>
                    </Col>
                    <Col md={4}>
                        <Block padding="10px 0px">
                            <H6>Order Summary</H6>
                            <OrderSumSty>
                                <tbody>
                                    <tr>
                                        <th>Total Amount:</th>
                                        <td>
                                            {currency_type}
                                            {total_amount}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Payment Type:</th>
                                        <td>{payment_type}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping Charge:</th>
                                        <td>
                                            + {currency_type}
                                            {shipping_charge}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Other Charges:</th>
                                        <td>
                                            + {currency_type}
                                            {other_charge}
                                        </td>
                                    </tr>
                                    {coupon && (
                                        <>
                                            <tr>
                                                <th>Coupon:</th>
                                                <td>{coupon}</td>
                                            </tr>
                                            <tr>
                                                <th>Coupon Amount:</th>
                                                <td>
                                                    <Txt weight={600}>
                                                        - {currency_type}
                                                        {coupon_amount}
                                                    </Txt>
                                                </td>
                                            </tr>
                                        </>
                                    )}

                                    <tr>
                                        <th>Final Payable:</th>
                                        <td>
                                            <Txt weight={600}>
                                                {currency_type}
                                                {pay_amount}
                                            </Txt>
                                        </td>
                                    </tr>
                                </tbody>
                            </OrderSumSty>
                        </Block>
                    </Col>
                </Row>
                <OrderHr />
                <OrderHeader alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" padding="10px 0px 0px 0px">
                        <Button
                            margin="0px 10px 0px 0px"
                            border="1px solid #e3e3e3"
                            padding="2px 20px"
                        >
                            {status}
                        </Button>
                    </Flex>
                </OrderHeader>
            </Container>
        </Block>
    );
};

const OrderCartItem = ({ product = {}, unit_price, quantity, currency }) => {
    const { title, thumbnail_image } = product || {};
    const { currency_type } = currency || {};
    return (
        <Flex alignItems="center" margin="0px 0px 15px 0px">
            <OrderImg className="order-img" src={thumbnail_image} alt={title} />
            <FlexItem flexgrow={1}>
                <P margin="0px" weight={500} fontSize="16px">
                    {title}
                </P>
                <Block margin="0px 0px 5px 0px">
                    <Txt weight={300} fontSize="14px" margin="0px 5px 0px 0px">
                        {quantity} x {currency_type}
                        {unit_price} =
                    </Txt>
                    <Txt weight={600} fontSize="14px">
                        {currency_type}
                        {parseFloat(unit_price) * parseInt(quantity, 10)}
                    </Txt>
                </Block>
            </FlexItem>
        </Flex>
    );
};

export const OrderItemCnt = ({ id }) => {
    const order = useSelector((state) => state.orders[id] || {});
    if (order.id) {
        return <OrderItem {...order} />;
    }
    return null;
};

export default OrderItem;
