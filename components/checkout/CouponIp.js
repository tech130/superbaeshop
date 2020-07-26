import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import Input from "../form/Input";
import { SubmitBtn } from "../styled/Button";
import Block from "../styled/Block";
import HR from "../styled/Hr";
import Checkbox from "../form/Checkbox";
import Flex, { FlexItem } from "../styled/Flex";
import useSubmit from "../../hooks/http/useSubmit";
import SubmitButton from "../form/SubmitButton";
import urls from "../../apiService/urls";
import { toast } from "react-toastify";

const CouponIp = ({ redeem, coupon, onCouponChange, onRedeemChange }) => {
    const [fetching, submit] = useSubmit(() => {
        toast.success("VALID COUPON");
    });

    const onSubmit = (e) => {
        e.preventDefault();
        submit({
            url: urls.validateOffer,
            method: "POST",
            data: {
                coupon_code: coupon,
            },
        });
    };

    return (
        <Block padding="10px 0px">
            <form onSubmit={onSubmit}>
                <Flex>
                    <FlexItem flexGrow={1}>
                        <Input
                            disabled={redeem}
                            setValue={onCouponChange}
                            value={coupon}
                            placeholder="Enter coupon code"
                        />
                    </FlexItem>
                    <FlexItem>
                        <SubmitButton
                            fetching={fetching}
                            disabled={redeem}
                            mb="0"
                        >
                            CHECK
                        </SubmitButton>
                    </FlexItem>
                </Flex>
            </form>
            <HR dataTitle="OR" />
            <Flex justifyContent="center">
                <Checkbox
                    name="redeem"
                    setValue={onRedeemChange}
                    value={redeem}
                    placeholder="Redeem wallet points"
                />
            </Flex>
        </Block>
    );
};

export default CouponIp;
