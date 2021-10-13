import React from "react";

import Block from "../styled/Block";
import MainHeading from "../styled/MainHeading";
import EmptyList from "../common/EmptyList";

const LaptopSkinsPage = () => {
    return (
        <>
            <Block padding="65px 0px 85px 0px">
                <MainHeading textAlign="center" mb="35px">
                Laptop Skins
                </MainHeading>
                <EmptyList title={"No products found"} />
            </Block>
        </>
    );
};

export default LaptopSkinsPage;
