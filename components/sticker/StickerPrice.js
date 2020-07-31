import React from "react";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import {ProductPrices} from "../product/ProductPrice";
import Block from "../styled/Block";

const productId = 4;

const StickerPrice = () => {
    return (
        <Flex alignItems="center">
            <Block margin="0px 10px 0px 0px">
                <ProductPrices fontSize="18px" id={productId} />
            </Block>
            <ProductBuy productId={productId} />
        </Flex>
    );
};

export default StickerPrice;
