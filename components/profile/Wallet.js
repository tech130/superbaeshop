import React from "react";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import Txt from "../styled/Txt";
import useUser from "../../hooks/redux/user/useUser";

const Wallet = () => {
    const { used_points, total_points } = useUser();
    const used = used_points || 0;
    const total = total_points || 0;
    const available = parseFloat(total) - parseFloat(used);

    return (
        <Block
            margin="0px 0px 15px 0px"
            borderRadius="10px"
            border="solid 2px #f5f5f5"
            padding="10px"
        >
            <H5>My Wallet</H5>
            <Block>
                <Txt margin="0px 15px 0px 0px">
                    Available Points:{" "}
                    <Txt fontWeight={500} color="green">
                        {available}
                    </Txt>
                </Txt>
                <Txt margin="0px 15px 0px 0px">
                    Used Points:{" "}
                    <Txt fontWeight={500} color="red">
                        {used}
                    </Txt>
                </Txt>
                <Txt>
                    Total Points:{" "}
                    <Txt fontWeight={500} color="#000">
                        {total_points || 0}
                    </Txt>
                </Txt>
            </Block>
        </Block>
    );
};

export default Wallet;
