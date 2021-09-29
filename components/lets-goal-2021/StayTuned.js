import React, { useRef } from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import Marquee from "react-fast-marquee";
import ResponsiveImage from "../common/ResponsiveImage";

import styled, { keyframes } from "styled-components";

const rainbow_animation = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;
const MainCaption = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
}
@media (max-width: 576px) {
  font-size: 1.5rem;
}
`;
const MainDiv = styled.div`
  width:100%;
  height:230px !important;
  border-radius:10px;
  background:#dce8eb;
  margin:10px;
`;
const MainDiv2 = styled.div`
  width:100%;
  height:100% !important;
  display: flex;
  align-items: center;
`;
const FlexDiv = styled.div`
display: flex;
  over-flow:hidden;
`;

// background: linear-gradient(to right, #f4edf4 0%, #eef2fa 51%, #d7bcbd 100%);
// background: linear-gradient(to right,#6666ff,#0099ff,#00ff00,#ff3399,#6666ff);
const GradientText = styled.h1`
background: linear-gradient(90deg,#60bbf1,#c6e1f1,#f57e93,#b4a8ff,#c8f1ff,#eda5b2);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
animation: ${rainbow_animation} 4s ease-in-out infinite;
background-size: 400% 100%;
font-size: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
}
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom:0px;
}
`;

const scrollTexts = [
  "magical",
  "simple",
  "elegant",
  "practical",
  "Cute",
  "aesthetic",
  "stunning",
  "original",
  "magical",
  "simple",
  "elegant",
  "practical",
  "Cute",
  "aesthetic",
  "stunning",
  "original",
  "practical",
  "Cute",
  "aesthetic",
  "stunning",
  "original",
  "practical",
  "Cute",
  "aesthetic",
  "stunning",
  "original",
  "magical",
  "simple",
  "elegant",
  "practical",
  "Cute",
  "aesthetic",
  "stunning",
  "original",
  "magical",
  "simple",
  "elegant",
  "practical",
];
const StayTuned = () => {


  return (
    <Block padding="0px 0px 65px 0px" className="overflow-hidden">
      <Flex vertical width="100%" alignItems="center" margin="3rem 0">
        <Flex alignItems="center" margin="3rem 0" >
          <MainCaption>Stay tuned</MainCaption>
          <GradientText> @spaceandbeautyofficial </GradientText>
        </Flex>

        <Flex className="overflow-hidden">
          <Marquee
            speed={50}
            // gradientWidth={200}
            gradient={false}
            loop={0}
            delay={0}
            style={{
              padding: "0.6rem 0",
              overflow: "hidden",
            }}
          >
            {scrollTexts.map(( name, ind ) => {
              return (
                <MainDiv key={ind}>
                  <MainDiv2>
                    <ResponsiveImage
                      imgWidth="100%"
                      imgHeight="100%"
                      key={name}
                      image={require("../lets-goal-2021/images/free-inclusions/ikkigai-min.png?resize")}
                    />
                  </MainDiv2>
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
