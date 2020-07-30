import React, { useState, useCallback } from "react";
import Input from "../form/Input";
import Block from "../styled/Block";
import HR from "../styled/Hr";
import Checkbox from "../form/Checkbox";
import Flex, { FlexItem } from "../styled/Flex";
import useSubmit from "../../hooks/http/useSubmit";
import SubmitButton from "../form/SubmitButton";
import urls from "../../apiService/urls";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IconButton } from "../styled/Button";
import CloseIcon from "../icons/CloseIcon";

const CouponP = styled.div`
    display: flex;
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    opacity: ${(props) => (props.hide ? 0.5 : 1)};
`;

const CouponIp = ({
    redeem,
    coupon,
    onCouponChange,
    onRedeemChange,
    walletPoints = 0,
}) => {
    const [val, set] = useState("");
    const [fetching, submit] = useSubmit((data = {}) => {
        onCouponChange({
            code: val,
            ...data,
        });
        set("");
        toast.success("VALID COUPON");
    });

    const onSubmit = (e) => {
        e.preventDefault();
        submit({
            url: urls.validateOffer,
            method: "POST",
            data: {
                coupon_code: val,
            },
        });
    };

    const setVal = useCallback((val) => {
        set(val);
    }, []);

    return (
        <Block margin="0px 0px 15px 0px">
            {coupon.id ? (
                <CouponP hide={redeem}>
                    {coupon.title}
                    <IconButton onClick={() => onCouponChange({})}>
                        <CloseIcon stroke="#cecece" />
                    </IconButton>
                </CouponP>
            ) : (
                <form onSubmit={onSubmit}>
                    <Flex>
                        <FlexItem flexGrow={1}>
                            <Input
                                disabled={redeem}
                                setValue={setVal}
                                value={val}
                                placeholder="Enter coupon code"
                            />
                        </FlexItem>
                        <FlexItem>
                            <SubmitButton
                                fetching={fetching}
                                disabled={redeem}
                                mb="0"
                            >
                                APPLY
                            </SubmitButton>
                        </FlexItem>
                    </Flex>
                </form>
            )}
            <HR dataTitle="OR" />
            <Flex justifyContent="center">
                <Checkbox
                    name="redeem"
                    setValue={onRedeemChange}
                    value={redeem}
                    placeholder={`Redeem wallet points. ${walletPoints} points available.`}
                />
            </Flex>
        </Block>
    );
};

export default CouponIp;
