import React, { useRef, memo } from "react";
import styled from "styled-components";
import Block from "../styled/Block";
import { H1, H2, H3 } from "../styled/Headings";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import P from "../styled/P";
import { useRouter } from "next/router";
import AnimateText from "../styled/AnimateText";


const UnitWrapper = styled.div`
    position: relative;
    min-height:580px;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        min-height: 480px;
    }
`;

const UnitWrapperText = styled.div`
    text-align: center;
    padding: 50px 0px 0px 0px;
    position: relative;
    z-index: 4;
    @media only screen and (max-width: 575px) {
        padding: 25px 0px ;
    }
 .main_sample{
    // text-align: center;
    // font-size: 46px;
    // font-weight: 600;
    letter-spacing: -.005em;
    line-height: 1.07143;
    max-width: 600px;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
 }
 .small_sample{
    // text-align: center;
    // font-size: 28px;
    // font-weight: 400;
    margin-top: 6px;
    max-width: 500px;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
 }
 p{
    color: #86868b;
    margin-bottom: 0rem;
 }

`;
const UnitWrapperImage = styled.div`
    overflow: hidden;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height:100%;
    }
    @media only screen and (max-width: 734px) {
        height: auto;
    }
}
`;


const UnitWrapperImageFigure = styled.figure`
    width:  ${(props) => props.width || "3010px"};
    height: ${(props) => props.height || "624px"};
    background-size:  ${(props) => `${props.width} ${props.height}` || "3010px 624px"};
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
    // background-image:  ${(props) => `url(${props.img})` || url('https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large.jpg')};
    z-index: 1;
    border: 0;
    margin: 0;
    padding: 0;
    left: calc(50% + 0px);
    right: auto;
    bottom: 0px;
    top: auto;
    -webkit-transform: translatex(-50%);
    transform: translatex(-50%);

    @media only screen and (max-width: 734px) {
        width: 734px;
        height: 548px;
        background-size: 734px 548px;
        left: calc(50% + 0px);
        background-image: ${(props) => `url(${props.img2})` || url('https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_small_2x.jpg')};
        
    }
`

const CartButton = styled.button`
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 8px 30px;
    border-radius: 30px;
    // background-color: #000;
    // color: #fff;
    // font-weight: 600;
    // font-size: 14px;
    // box-shadow: rgba(22, 53, 76, 0.18) 0px 7px 25px 0px;
    
    background: linear-gradient(118deg, rgba(209,78,154,1) 14%, rgba(255,86,109,1) 60%);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: rgb(255 86 109) 0px 8px 25px 0px;
    border: 1px solid transparent;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 20px;
    }
`

const BannerSection2 = ({ dark, title, sub_title, desc, img, animateText = '',slug="", ...restProps }) => {
    const router = useRouter();
    const { country } = router.query;
    return (
        <Block padding="3px 0px" margin="0px -15px">


            <UnitWrapper>
                <UnitWrapperText>
                    <MainHeading className="main_sample" textAlign="center" color={dark ? "#fff" : "#000"}>
                        {title}{" "}
                        {animateText &&
                            <AnimateText>
                                {animateText}
                            </AnimateText>
                        }
                    </MainHeading>
                    <SmallHeading className="small_sample" textAlign="center" color={dark ? "#fff" : "#000"}>
                        {sub_title}
                    </SmallHeading>
                    {
                        desc &&
                        <P>{desc}</P>
                    }
                    <CartButton onClick={() => {
                        router.push(`/[country]/product${slug}`, `/${country}/product${slug}`);
                    }}>Buy Now</CartButton>

                </UnitWrapperText>
                <UnitWrapperImage>
                    <img src={img} />
                    {/* <UnitWrapperImageFigure {...restProps} img={img}></UnitWrapperImageFigure> */}
                </UnitWrapperImage>
            </UnitWrapper>
        </Block>
    )
}

export default BannerSection2;