import React from "react";
import { CartStyl, CartLdr } from "./CartItem";
import Block from "../styled/Block";
import Txt from "../styled/Txt";
import { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import { ProductPrices } from "../product/ProductPrice";
import slug from "../sticker/slug";
import useProduct from "../../hooks/redux/product/useProduct";
import Button from "../styled/Button";
import { useAddToCart } from "../product/ProductBuy";
import Loader from "../form/Loader";

const MaskDetailsItem = ({ product = {} }) => {
    const { fetching, onClick, btnText } = useAddToCart(product);

    return (
        <CartStyl alignItems="center">
            {fetching && (
                <CartLdr>
                    <Loader size={30} />
                </CartLdr>
            )}
            <Img
                margin="0px 15px 0px 0px"
                width="100px"
                src={product.thumbnail_image}
                alt={product.title}
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <P margin="0px" weight={500} fontSize="16px">
                    {product.title}
                </P>
                <Block>
                    <ProductPrices slug={slug} />
                </Block>
                <Button
                    onClick={onClick}
                    padding="5px 20px"
                    border="1px solid #cecece"
                    margin="5px 0px"
                    textDecor="underline"
                    borderRadius="20px"
                >
                    <Txt fontSize="13px" weight={500}>
                        {btnText.toUpperCase()}
                    </Txt>
                </Button>
            </FlexItem>
        </CartStyl>
    );
};

const MaskAddOn = () => {
    const product = useProduct(slug);

    if (
        product.id &&
        !product.in_cart &&
        !product.is_pre_order &&
        product.stock_status
    ) {
        return (
            <Block>
                <Block margin="10px 0px">
                    <Txt weight={500}>Frequently bought together</Txt>
                </Block>
                <MaskDetailsItem product={product} />
            </Block>
        );
    }
    return null;
};

export default MaskAddOn;
