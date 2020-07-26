import React from "react";
import Block from "../styled/Block";
import { H5 } from "../styled/Headings";
import Txt from "../styled/Txt";
// import useUser from "../../hooks/redux/user/useUser";

const Wallet = () => {

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
                        50
                    </Txt>
                </Txt>
                <Txt margin="0px 15px 0px 0px">
                    Used Points:{" "}
                    <Txt fontWeight={500} color="red">
                        100
                    </Txt>
                </Txt>
                <Txt>
                    Total Points:{" "}
                    <Txt fontWeight={500} color="#000">
                        100
                    </Txt>
                </Txt>
            </Block>
        </Block>
    );
};

export default Wallet;
