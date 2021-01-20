import React from "react";
import { CartStyl, CartLdr } from "./CartItem";
import Block from "../styled/Block";
import Txt from "../styled/Txt";
import { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import { ProductPrices } from "../product/ProductPrice";
import slug from "../mask-bundle/slug";
import useProduct from "../../hooks/redux/product/useProduct";
import Button from "../styled/Button";
import { useAddToCart } from "../product/ProductBuy";
import Loader from "../form/Loader";

const MaskDetailsItem = ({ id, thumbnailImage, title }) => {
    const { fetching, onClick } = useAddToCart(id);

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
                src={thumbnailImage}
                alt=""
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <P margin="0px" weight={500} fontSize="16px">
                    {title}
                </P>
                <Block>
                    <ProductPrices slug={slug} />
                </Block>
                <Button
                    onClick={onClick}
                    padding="2px 10px"
                    border="1px solid #cecece"
                    margin="5px 0px"
                    textDecor="underline"
                    borderRadius="15px"
                >
                    <Txt fontSize="12px">ADD TO CART</Txt>
                </Button>
            </FlexItem>
        </CartStyl>
    );
};

const MaskAddOn = () => {
    const { id, is_pre_order, in_cart, thumbnail_image, title } = useProduct(slug);

    if (id && !in_cart && !is_pre_order) {
        return (
            <Block>
                <Block margin="10px 0px">
                    <Txt weight={500}>Frequently bought together</Txt>
                </Block>
                <MaskDetailsItem id={id} thumbnailImage={thumbnail_image} title={title} />
            </Block>
        );
    }
    return null;
};

export default MaskAddOn;
