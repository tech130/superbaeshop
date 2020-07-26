import React from "react";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import ProductPrice from "../product/ProductPrice";
import Block from "../styled/Block";

const productId = 3;

const BundlePrice = () => {
    return (
        <Flex alignItems="center">
            <Block margin="0px 5px 0px 0px">
                <ProductPrice
                    weight={300}
                    fontSize="18px"
                    type="original_price"
                    id={productId}
                />
            </Block>
            <Block margin="0px 10px 0px 0px">
                <ProductPrice weight={500} fontSize="18px" id={productId} />
            </Block>
            <ProductBuy productId={productId} />
        </Flex>
    );
};

export default BundlePrice;
