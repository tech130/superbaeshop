import React from "react";
import Flex from "../styled/Flex";
import ProductBuy from "../product/ProductBuy";
import ProductPrice from "../product/ProductPrice";
import Block from "../styled/Block";

// const slug = "bundle-2021";

const BundlePrice = ({slug}) => {
    return (
        <Flex alignItems="center" className="flex-column flex-sm-row">
            <Block margin="10px 0px 10px 0px">
                <Block margin="0px 5px 0px 0px">
                    <ProductPrice
                    className="mr-3"
                        weight={300}
                        fontSize="18px"
                        type="original_price"
                        slug={slug}
                        margin="0px 5px 0px 0px"
                    />
                    <ProductPrice weight={500} fontSize="18px" slug={slug} />
                </Block>
                {/* <Block margin="0px 10px 0px 0px">
                    <ProductPrice weight={500} fontSize="18px" slug={slug} />
                </Block> */}
            </Block>
            <ProductBuy slug={slug} />
        </Flex>
    );
};

export default BundlePrice;
