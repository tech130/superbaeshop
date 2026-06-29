import React from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import Marquee from "react-fast-marquee";
import MainHeading from "../styled/MainHeading";
import image1 from './images/testimonials/testify1.png';
import image2 from './images/testimonials/testify2.png';
import image3 from './images/testimonials/testify3.png';
import image4 from './images/testimonials/testify4.png';
import image5 from './images/testimonials/testify5.png';
import image6 from './images/testimonials/testify6.png';
import image7 from './images/testimonials/testify7.png';
import image8 from './images/testimonials/testify8.png';
import image9 from './images/testimonials/testify9.png';
import image10 from './images/testimonials/testify10.png';

import styled, { keyframes } from "styled-components";

const rainbow_animation = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;

const MainDiv = styled.div`
  height:250px !important;
  border-radius:10px;
  margin: 10px 0px;
  display: flex;
`;
const MainDiv2 = styled.div`
  height:100% !important;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  img{
    width:250px;
  }
`;
const FlexDiv = styled.div`
display: flex;
  over-flow:hidden;
`;
const GradientText = styled.span`
background: linear-gradient(90deg,#60bbf1,#c6e1f1,#f57e93,#b4a8ff,#c8f1ff,#eda5b2);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
animation: ${rainbow_animation} 4s ease-in-out infinite;
background-size: 400% 100%;
margin-bottom:0px;
 
  @media (max-width: 576px) {
    margin-bottom:0px;
}
`;

const scrollTexts = [
  {
    key: [image1,
      image2,
      image3,
      image4,
      image5]
  },

  {
    key: [image6,
      image7,
      image8,
      image9,
      image10]
  }
];
const StayTuned = () => {


  return (
    <Block padding="0px 0px 0px 0px" className="overflow-hidden">
      <Flex vertical width="100%" alignItems="center" margin="0">
        <Flex alignItems="center" margin="30px 0" >
          <MainHeading textAlign="center" mb="0px">Stay tuned  <GradientText>@superbae.shop </GradientText></MainHeading>

        </Flex>

        <Flex className="overflow-hidden">
          <Marquee
            speed={50}
            // gradientWidth={200}
            gradient={false}
            // loop={0}
            delay={0}
            style={{
              padding: "0.6rem 0",
              overflow: "hidden",
            }}
          >
            {scrollTexts.map((name, ind) => {
              return (

                <MainDiv key={ind}>
                  {
                    name.key.map((item, ind) => {
                      return (
                        <MainDiv2 key={ind}>


                          <img src={item} />
                        </MainDiv2>
                      )
                    })
                  }

                </MainDiv>
              );
            })}
          </Marquee>
        </Flex>
      </Flex>
    </Block>
  );
};



export default StayTuned;
