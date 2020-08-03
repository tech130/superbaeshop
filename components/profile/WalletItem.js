import React from "react";
import Flex from "../styled/Flex";
import P from "../styled/P";
import Txt from "../styled/Txt";
import { useSelector } from "react-redux";

const WalletItem = ({ id }) => {
    const walletItem = useSelector((state) => {
        return state.wallet[id] || {};
    });

    if (!walletItem.id) {
        return null;
    }
    const { is_credit, point, description } = walletItem;
    return (
        <Flex
            border="solid 2px #f5f5f5"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="10px"
            margin="0px 0px 15px"
            padding="15px"
        >
            <P fontSize="14px" margin="0px">
                {description}
            </P>
            <Txt
                fontSize="14px"
                weight={500}
                color={is_credit ? "green" : "red"}
            >
                {is_credit ? "+" : "-"}
                {point}
            </Txt>
        </Flex>
    );
};

export default WalletItem;
