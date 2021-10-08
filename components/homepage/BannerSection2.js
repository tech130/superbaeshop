import React, { useRef, memo } from "react";
import styled from "styled-components";
import Block from "../styled/Block";
import { H1, H2, H3 } from "../styled/Headings";
import P from "../styled/P";


const UnitWrapper = styled.div`
    position: relative;
    min-height:580px;
    overflow: hidden;

`;

const UnitWrapperText = styled.div`
text-align: center;
padding-top: 47px;
position: relative;
color:#f5f5f7;
z-index: 4;
 h2{
    text-align: center;
    font-size: 56px;
    font-weight: 600;
    letter-spacing: -.005em;
    line-height: 1.07143;
 }
 h3{
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin-top: 6px;
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
    width: 3010px;
    height: 624px;
    background-size: 3010px 624px;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
    background-image: url('https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg');
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
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;

    @media only screen and (max-width: 734px) {
        width: 734px;
        height: 548px;
        background-size: 734px 548px;
        left: calc(50% + 0px);
        background-image: url('https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_small_2x.jpg');
        
    }
`

const CartButton = styled.button`
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 8px 30px;
    border-radius: 30px;
    background-color: #f5f5f7;
    color: #000;
    font-weight: 600;
    font-size: 14px;
    box-shadow: rgba(22, 53, 76, 0.18) 0px 7px 25px 0px;
`

const BannerSection2 = () => {
    return (
        <Block padding="3px 0px">


            <UnitWrapper>
                <UnitWrapperText>
                    <H2>
                        iPhone 12
                    </H2>
                    <H3>
                        Blast past fast.
                    </H3>
                    <P>From $29.12/mo. for 24 mo. or $699 before trade‑in</P>
                    <P>Buy directly from Apple with special carrier offers</P>
                    <CartButton>Buy</CartButton>

                </UnitWrapperText>
                <UnitWrapperImage>
                    <UnitWrapperImageFigure></UnitWrapperImageFigure>
                </UnitWrapperImage>
            </UnitWrapper>
        </Block>
    )
}

export default BannerSection2;