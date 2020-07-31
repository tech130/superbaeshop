import React from "react";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import { ProductPrices } from "../product/ProductPrice";
import Block from "../styled/Block";

const slug = "ultimate-sticker-book";

const StickerPrice = () => {
    return (
        <Flex alignItems="center">
            <Block margin="0px 10px 0px 0px">
                <ProductPrices fontSize="18px" slug={slug} />
            </Block>
            <ProductBuy slug={slug} />
        </Flex>
    );
};

export default StickerPrice;
