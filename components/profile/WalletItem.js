import React from "react";
import Flex from "../styled/Flex";
import P from "../styled/P";
import Txt from "../styled/Txt";

const WalletItem = ({ points }) => {
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
                Order ID: #123456789
            </P>
            <Txt fontSize="14px" weight={500} color="red">
                -10
            </Txt>
        </Flex>
    );
};

export default WalletItem;
