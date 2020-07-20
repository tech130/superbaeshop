import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import Input from "../form/Input";
import { SubmitBtn } from "../styled/Button";
import Block from "../styled/Block";
import HR from "../styled/Hr";
import Checkbox from "../form/Checkbox";
import Flex, { FlexItem } from "../styled/Flex";
// import useSubmit from "../../hooks/http/useSubmit";

const CouponIp = ({ redeem, coupon, onCouponChange, onRedeemChange }) => {
    return (
        <Block padding="10px 0px">
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
                    <SubmitBtn disabled={redeem} mb="0">CHECK</SubmitBtn>
                </FlexItem>
            </Flex>
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
