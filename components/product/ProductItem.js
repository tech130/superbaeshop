import styled from "styled-components";
import CountryLink, { useProdCountry } from "../common/CountryLink";
import { ProductPrices } from "./ProductPrice";
import Block from "../styled/Block";
import { AddToCart } from "./ProductBuy";
import ContentLoader from "react-content-loader";
import { useRef } from "react";
import useLazyImage from "../../hooks/layout/useLazyImage";

export const ItemLoader = () => (
    <ContentLoader
        speed={2}
        width={255}
        height={375}
        viewBox="0 0 255 375"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ width: "100%", height: "auto" }}
    >
        <rect x="0" y="0" rx="0" ry="0" width="255" height="255" />
        <rect x="0" y="277" rx="0" ry="0" width="227" height="15" />
        <rect x="0" y="306" rx="0" ry="0" width="49" height="10" />
    </ContentLoader>
);

const ImgCon = styled.div`
    margin-bottom: 10px;
    position: relative;

    .sold-out {
        position: absolute;
        padding: 0px 5px;
        background: #000;
        color: #fff;
        top: 0;
        right: 0;
        font-size: 12px;
    }
`;

const SquareImage = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    position: relative;
    padding-top: 100%;

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        display: ${(props) => (props.isLoading ? "none" : "block")};
    }
`;

const ProductLink = styled(CountryLink)`
    display: block;

    &:hover {
        text-decoration: underline;
    }
`;

const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
`;

export const CartBtn = styled(AddToCart)`
    font-size: 14px;
    text-transform: uppercase;
    border: 1px solid #000;
    width: 100%;
    padding: 5px 15px;
    background: #fff;
    color: #000;

    &:disabled {
        opacity: 1;
        cursor: not-allowed;
        color: #000;
    }

    &:hover {
        background: #000;
        color: #fff;
    }
`;

export const ProductImage = ({ src, alt = "" }) => {
    const ref = useRef(null);
    const isLoading = useLazyImage(ref, { src });

    return (
        <SquareImage ref={ref} isLoading={isLoading}>
            <picture>
                <img src={src} alt={alt} />
            </picture>
        </SquareImage>
    );
};

const ProductItem = ({ product = {} }) => {
    const { thumbnail_image, title, slug, product_country } = product;
    const productCountry = useProdCountry(product_country);

    return (
        <Block margin="0px 0px 25px 0px">
            <ProductLink
                href="/product/[productSlug]"
                asUrl={`/product/${slug}`}
            >
                <ImgCon>
                    <ProductImage src={thumbnail_image} alt={title} />
                </ImgCon>
                <Block>
                    <Title title={title}>{title}</Title>
                </Block>
            </ProductLink>
            {productCountry && productCountry.country && (
                <>
                    <Block margin="0px 0px 5px 0px">
                        <ProductPrices slug={slug} />
                    </Block>
                    <CartBtn product={product} />
                </>
            )}
        </Block>
    );
};

export default ProductItem;
