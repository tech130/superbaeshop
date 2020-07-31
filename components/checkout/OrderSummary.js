import React from "react";
import Txt from "../styled/Txt";

const OrderSummary = ({
    payment_type = "",
    shipping_charge = "",
    cod_charge = "",
    sub_total_amount = "",
    coupon_amount = "",
    coupon,
    is_wallet = false,
    coupon_code = "",
    pay_amount,
    address = {},
}) => {
    const { country } = address || {};
    const { currency_type } = country || {};

    return (
        <>
            <tr>
                <th>Total Amount:</th>
                <td>
                    {currency_type}
                    {sub_total_amount}
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
            {parseFloat(cod_charge) && (
                <tr>
                    <th>COD Charge</th>
                    <td>
                        + {currency_type}
                        {cod_charge}
                    </td>
                </tr>
            )}
            {is_wallet ? (
                <tr>
                    <th>Wallet Discount Amount:</th>
                    <td>
                        <Txt weight={600}>
                            - {currency_type}
                            {coupon_amount}
                        </Txt>
                    </td>
                </tr>
            ) : (
                coupon &&
                coupon_code && (
                    <>
                        <tr>
                            <th>Coupon:</th>
                            <td>{coupon_code}</td>
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
                )
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
        </>
    );
};

export default OrderSummary;
