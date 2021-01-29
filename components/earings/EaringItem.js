import styled from "styled-components";
import CountryLink from "../common/CountryLink";
import { ProductPrices } from "../product/ProductPrice";
import Block from "../styled/Block";
import Button from "../styled/Button";
import Img from "../styled/Img";
import Txt from "../styled/Txt";

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

const EaringItem = ({ thumbnail_image, title, slug }) => {
    return (
        <Block margin="0px 0px 25px 0px">
            <EaringLink href="/product/earings/detail">
                <ImgCon>
                    <Img src={thumbnail_image} />
                </ImgCon>
                <Block>
                    <Txt weight={600}>{title}</Txt>
                </Block>
            </EaringLink>
            <Block margin="0px 0px 5px 0px">
                <ProductPrices slug={slug} />
            </Block>
            <Button
                fontSize="14px"
                padding="5px 15px"
                block
                border="1px solid #000"
            >
                ADD TO CART
            </Button>
        </Block>
    );
};

export default EaringItem;
