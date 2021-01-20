import styled from "styled-components";
import CountryLink from "../common/CountryLink";
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

    .img-2 {
        display: none;
    }

    &:hover .img-2 {
        display: block;
    }

    &:hover .img-1 {
        display: none;
    }
`;

const EaringLink = styled(CountryLink)`
    display: block;
    
    &:hover {
        text-decoration: underline;
    }
`;

const EaringItem = () => {
    return (
        <Block margin="0px 0px 25px 0px">
            <EaringLink href="/product/earings/detail">
                <ImgCon>
                    {/* <div className="sold-out">
                    SOLD OUT
                </div> */}
                    <div className="img-1">
                        <Img src="https://cdn.shopify.com/s/files/1/2203/0177/products/OG_optimised_0013_Layer129-Copy_590x.jpg?v=1594303830" />
                    </div>
                    <div className="img-2">
                        <Img src="https://cdn.shopify.com/s/files/1/2203/0177/products/OG_optimised_0049_Layer93_590x.jpg?v=1594303830" />
                    </div>
                </ImgCon>
                <Block>
                    <Txt weight={600}>The Goldie Earrings</Txt>
                </Block>
            </EaringLink>
            <Block margin="0px 0px 5px 0px">
                <Txt margin="0px 8px 0px 0px" textDecor="line-through">
                    ₹200
                </Txt>
                <Txt weight={600}>₹100</Txt>
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
