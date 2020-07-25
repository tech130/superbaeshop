import React from "react";
import Flex from "../styled/Flex";
import Img from "../styled/Img";
import { H5 } from "../styled/Headings";

const EmptyList = ({ title = "" }) => {
    return (
        <Flex alignItems="center" vertical justifyContent="center">
            <Img width="280px" src="/images/meanwhile.jpeg" alt="" />
            <H5 textAlign="center">{title}</H5>
        </Flex>
    );
};

export default EmptyList;
