import React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import Block from "../styled/Block";
import Button, { IconButton } from "../styled/Button";
import ThrashIcon from "../icons/ThrashIcon";
import Txt from "../styled/Txt";

const CartStyl = styled(Flex)`
    padding: 10px;
    border: solid 2px #f5f5f5;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const QtyBtn = styled(Button)`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #cecece;
    font-weight: 600;
    line-height: 0;
`;

const CartQty = styled.div`
    height: 25px;
    width: 40px;
    text-align: center;
    border: 1px solid #cecece;
    font-weight: 500;
    margin: 0px 10px;
    font-size: 14px;
`;

const CartItem = () => {
    return (
        <CartStyl alignItems="center">
            <Img
                margin="0px 15px 0px 0px"
                width="100px"
                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                alt=""
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <P margin="0px" weight={500} fontSize="16px">
                    Let's Goal 2021
                </P>
                <Block margin="0px 0px 5px 0px">
                    <Txt
                        weight={300}
                        textDecor="line-through"
                        fontSize="14px"
                        margin="0px 5px 0px 0px"
                    >
                        ₹500
                    </Txt>
                    <Txt weight={600} fontSize="16px">
                        ₹600
                    </Txt>
                    <span> (40% off)</span>
                </Block>
                <Flex alignItems="center">
                    <QtyBtn className="btn cart-qty-btn">-</QtyBtn>
                    <CartQty>1</CartQty>
                    <QtyBtn className="btn cart-qty-btn">+</QtyBtn>
                </Flex>
            </FlexItem>
            <IconButton>
                <ThrashIcon size={18} strokeWidth={1} />
            </IconButton>
        </CartStyl>
    );
};

export default CartItem;
