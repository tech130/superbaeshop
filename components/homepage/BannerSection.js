import React, { useRef, memo } from "react";
import styled from "styled-components";
import Block from "../styled/Block";
import { H1, H2, H3 } from "../styled/Headings";
import P from "../styled/P";
import { useRouter } from "next/router";


const UnitWrapper = styled.div`
    position: relative;
    min-height:580px;
    overflow: hidden;

`;

const UnitWrapperText = styled.div`
text-align: center;
padding-top: 47px;
position: relative;
z-index: 4;
 h2{
    text-align: center;
    font-size: 46px;
    font-weight: 600;
    letter-spacing: -.005em;
    line-height: 1.07143;
    max-width: 500px;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
 }
 h3{
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin-top: 6px;
    max-width: 500px;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
 }
 p{
    color: #86868b;
    margin-bottom: 0rem;
 }
`;
const UnitWrapperImage = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
flex-grow: 1;
z-index: 1;
overflow: visible;
}
`;

const UnitWrapperImageFigure = styled.figure`
    width:  ${(props) => props.width || "3010px"};
    height: ${(props) => props.height || "624px"};
    background-size:  ${(props) => `${props.width} ${props.height}` || "3010px 624px"};
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
    background-image:  ${(props) => `url(${props.img})` || url('https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large.jpg')};
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
    background-color: #000;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    box-shadow: rgba(22, 53, 76, 0.18) 0px 7px 25px 0px;
`

const BannerSection = ({ dark, title, sub_title, desc, img, ...restProps }) => {
    const router = useRouter();
    const { country } = router.query;
    return (
        <Block padding="3px 0px" margin="0px -15px">


            <UnitWrapper>
                <UnitWrapperText>
                    <H2 color={dark ? "#fff" : "#000"}>
                        {title}
                    </H2>
                    <H3 color={dark ? "#fff" : "#000"}>
                        {sub_title}
                    </H3>
                    {
                        desc &&
                        <P>{desc}</P>
                    }
                    <CartButton onClick={()=>{
                        router.push("/[country]/product/lets-goal-2021-planner", `/${country}/product/lets-goal-2021-planner`);
                    }}>Buy</CartButton>

                </UnitWrapperText>
                <UnitWrapperImage>
                    <UnitWrapperImageFigure {...restProps} img={img}></UnitWrapperImageFigure>
                </UnitWrapperImage>
            </UnitWrapper>
        </Block>
    )
}

export default BannerSection;