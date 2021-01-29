import styled from "styled-components";
import CountryLink, { useProdCountry } from "../common/CountryLink";
import { ProductPrices } from "../product/ProductPrice";
import Block from "../styled/Block";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import { AddToCart } from "../product/ProductBuy";
import ContentLoader from "react-content-loader";

export const ItemLoader = () => (
    <ContentLoader
        speed={2}
        width={255}
        height={375}
        viewBox="0 0 255 375"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
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

const EaringLink = styled(CountryLink)`
    display: block;

    &:hover {
        text-decoration: underline;
    }
`;

export const CartBtn = styled(AddToCart)`
    font-size: 14px;
    text-transform: uppercase;
    border: 1px solid #000;
    width: 100%;
    padding: 5px 15px;
    background: #fff;

    &:disabled {
        opacity: 1;
        cursor: not-allowed;
    }

    &:hover {
        background: #000;
        color: #fff;
    }
`;

const EaringItem = ({ product = {} }) => {
    const { thumbnail_image, title, slug, product_country } = product;
    const productCountry = useProdCountry(product_country);

    return (
        <Block margin="0px 0px 25px 0px">
            <EaringLink
                href="/product/earrings/[earingSlug]"
                asUrl={`/product/earrings/${slug}`}
            >
                <ImgCon>
                    <Img src={thumbnail_image} />
                </ImgCon>
                <Block>
                    <Txt weight={600}>{title}</Txt>
                </Block>
            </EaringLink>
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

export default EaringItem;
