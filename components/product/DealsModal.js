import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Block from "../styled/Block";
import Txt from "../styled/Txt";
import Flex, { FlexItem } from "../styled/Flex";
import Img from "../styled/Img";
import P from "../styled/P";
import Button from "../styled/Button";
import ModalHeader from "../modal/ModalHeader";
import EmptyList from "../common/EmptyList";
import { useProdCountry } from "../common/CountryLink";
import { useAddToCart } from "./ProductBuy";

export const ItemStyl = styled(Flex)`
    padding: 15px;
    border-bottom: solid 2px #f5f5f5;
    position: relative;
    align-items: center;
`;

const DealItem = ({ product = {} }) => {
    const productCountry = useProdCountry(product.product_country);
    const currencyType = productCountry.country.currency_type;
    const price = productCountry.selling_price || 0;

    const { fetching, onClick, btnText } = useAddToCart(product, {
        isOffer: true,
    });

    return (
        <ItemStyl>
            <Img
                margin="0px 15px 0px 0px"
                width="80px"
                src={product.thumbnail_image}
                alt={product.title}
            />
            <FlexItem flexGrow={1} flexShrink={0}>
                <Flex flexWrap justifyContent="space-between">
                    <FlexItem flexGrow={1} flexShrink={0}>
                        <P
                            lineHeight={1}
                            margin="0px 0px 5px 0px"
                            weight={500}
                            fontSize="16px"
                        >
                            {product.title}
                        </P>
                        <Flex flexWrap fontSize="16px">
                            <Txt
                                textDecor="line-through"
                                margin="0px 8px 0px 0px"
                                weight={300}
                            >
                                {currencyType}
                                {productCountry.original_price}
                            </Txt>
                            <Txt margin="0px 10px 0px 0px" weight={600}>
                                {currencyType}
                                {(price * 0.8).toFixed(2)}
                            </Txt>
                            <Txt fontSize="14px" weight={600} color="green">
                                Extra 20% off
                            </Txt>
                        </Flex>
                    </FlexItem>
                    <Button
                        onClick={onClick}
                        padding="5px 20px"
                        border="1px solid #cecece"
                        margin="5px 0px"
                        bg="#000"
                        disabled={fetching}
                    >
                        <Txt fontSize="13px" color="#fff" weight={500}>
                            {btnText}
                        </Txt>
                    </Button>
                </Flex>
            </FlexItem>
        </ItemStyl>
    );
};

const DealsModal = ({ closeModal }) => {
    const { products, product } = useSelector((state) => {
        return { products: state.headerProducts, product: state.product };
    });

    const list = useMemo(() => {
        const deals = [];
        products.forEach((prod) => {
            const cur = product[prod];
            if (cur && !cur.in_cart) {
                deals.push(cur);
            }
        });
        return deals;
    }, [products, product]);


    return (
        <>
            <ModalHeader
                closeModal={closeModal}
                title="Lightning Deals"
                desc="Offers exclusive for you. This offer is only valid for next 24 hours."
            />
            <div>
                {list.length === 0 ? (
                    <Block padding="15px 0px">
                        <EmptyList title="No deals found" />
                    </Block>
                ) : (
                    list.map((item) => (
                        <DealItem product={item} key={item.id} />
                    ))
                )}
            </div>
        </>
    );
};
export default DealsModal;
