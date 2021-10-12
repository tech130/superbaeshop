import React, { useEffect, useState } from "react";
import Flex from "../styled/Flex";
import AnimateText from "../styled/AnimateText";
import Img from "../styled/Img";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";
import plannerPink from './images/cover3.png';
import plannerWhite from './images/planner white.png';
import plannerBlack from './images/planner black.png';

import styled, { css, keyframes } from "styled-components";

const MainCaption = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color:${(props) => props.color || 'black'};
  @media (max-width: 576px) {
    font-size: 2rem;
}
`;

// const SmallHeading = styled.div`
//   font-size: 24px;
//   line-height: 1.1;
//   font-weight: ${(props) => props.fontWeight || 500};
//   margin-top: ${(props) => props.marginTop || 0};
//   color:${(props) => props.color || 'black'};
//   @media (max-width: 576px) {
//     font-size: 1rem;
// }
// `;

const ColorSelector = styled.div`
  background: ${(props) => props.background || "red"};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: #d1d1d1 0px 0px 7px 2px;
`;

const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  align-self: flex-end;
`;


const MainSection = styled.div`
background: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 3rem ;
  overflow:hidden;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right:0

  animation:slidein;
  webkit-animation-duration: 1s;
  -webkit-animation-name: slidein;

  
  -moz-animation-duration: 1s;
  -moz-animation-name: slidein;


  -o-animation-duration: 1s;
  -o-animation-name: slidein;

  
  animation-duration: 1s;
  animation-name: slidein;
  
`;
const MainSectionOutside = styled.div`
background: ${(props) => props.bgColor2};
  position: relative;
  height: 640px;
  overflow: hidden;
  @media (max-width: 576px) {
    height: 85vw;
}
`;


const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
const ImageHeight = styled.div`
  height:200px;
`;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: space-evenly;
}
`;

const colorOptions = ["#ffdce2","#2a2a2a"];

export default function ColorPicker() {
  const [colorInd, setColor] = useState('#ffdce2');
  const [colorInd2, setColor2] = useState('#ffdce2');
  useEffect(() => {

  }, [colorInd]);
  return (
    <MainSectionOutside
      bgColor={colorInd}
      bgColor2={colorInd2}
    >
      
      {colorOptions.map((color, ind) => {
        return (
          <React.Fragment key ={ind}>
            {color === colorInd &&
              <MainSection
                key={ind}
                vertical
                bgColor={colorInd === "#ffdce2"? "#2a2a2a":colorInd === "#2a2a2a"? "#ffdce2":"#ffdce2"}
                bgColor2={colorInd2}
                margin="3rem 0"
                alignItems="center"
              >
               

                <ColorSelectorContainer >
                  {/* {
                    colorOptions.map((colorr, ind) => {
                      return (
                        <Flex
                          key={ind}
                          bgColor={colorInd === colorr ? "gray" : ""}
                          padding="1px"
                          borderRadius="4px"
                        >
                          <ColorSelector
                            background={colorr}
                            onClick={() => {
                              setColor(colorr);
                            }}
                          />
                        </Flex>
                      )
                    })
                  } */}

                </ColorSelectorContainer>
              </MainSection>
            }
          </React.Fragment>
        );
      })}
      <ContentSection className="container">
        <FirstSection>
          <MainHeading color={`${colorInd === '#ffdce2'? 'white':'black'}`}>Your Planner, Your <AnimateText> color</AnimateText> </MainHeading>

          <SmallHeading color={`${colorInd === '#ffdce2'? 'white':'black'}`}>
          3 Fresh colors that reflect your personality
          </SmallHeading>
        </FirstSection>
        {/* <ImageHeight > */}
        <Img src={ colorInd ==="#ffdce2" ? `${plannerPink}` : colorInd === '#2a2a2a' ? `${plannerBlack}`: `${plannerWhite}`} width="50%" />
        {/* </ImageHeight> */}
        <ColorSelectorContainer>
          {
            colorOptions.map((colorr, ind) => {
              return (
                <Flex
                  key={ind}
                  bgColor={colorInd === colorr ? "#cac7c799" : ""}
                  padding="6px"
                  borderRadius="12px"
                >
                  <ColorSelector
                    background={colorr}
                    onClick={() => {
                      setColor2(colorInd);
                      setColor(colorr);
                    }}
                  />
                </Flex>
              )
            })
          }

        </ColorSelectorContainer>
      </ContentSection>

    </MainSectionOutside>
  );
}
