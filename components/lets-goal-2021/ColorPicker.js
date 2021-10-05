import React, { useEffect, useState } from "react";
import Flex from "../styled/Flex";
import AnimateText from "../styled/AnimateText";
import Img from "../styled/Img";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";

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
  overflow:hiden;

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
    height: 75vw;
}
`;


const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
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
`;

const colorOptions = ["#ffdce2","black","white"];

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
                bgColor={colorInd}
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
          <MainHeading color={`${colorInd === 'black'? 'white':'black'}`}>Your Planner, Your <AnimateText> color</AnimateText> </MainHeading>

          <SmallHeading color={`${colorInd === 'black'? 'white':'black'}`}>
          2 Fresh colors that reflect your personality
          </SmallHeading>
        </FirstSection>

        <Img src="/images/cutest-planner/book-pen.png" width="50%" />
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
