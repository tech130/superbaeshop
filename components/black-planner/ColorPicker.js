import React, { useEffect, useState } from "react";
import AnimateText from "../styled/AnimateText";
import Img from "../styled/Img";
import MainHeading from "../styled/MainHeading";
// import SmallHeading from "../styled/SmallHeading";
// import plannerPink from './images/cover3.png';
// import plannerWhite from './images/planner white.png';
import ProPlannerPrice from "../professional-planner/ProPlannerPrice";
import ResponsiveImage from "../common/ResponsiveImage";

import styled from "styled-components";

// const MainCaption = styled.div`
//   text-align: center;
//   font-size: 48px;
//   font-weight: 700;
//   line-height: 1.1;
//   color:${(props) => props.color || 'black'};
//   @media (max-width: 576px) {
//     font-size: 2rem;
// }
// `;

// const ColorSelector = styled.div`
//   background: ${(props) => props.background || "red"};
//   height: 2.5rem;
//   width: 2.5rem;
//   border-radius: 50%;
//   cursor: pointer;
//   box-shadow: #d1d1d1 0px 0px 7px 2px;
// `;

const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  align-self: center;
  margin-top: -15px;
  flex-direction: row;
  align-items: center;
  h4{
    margin-bottom:0px;
    margin-right: 20px;
    @media (max-width: 576px) {
      margin-bottom:10px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
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
  height: 460px;
}
`;


const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
  }
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
    justify-content: center;
}
`;
const ImageHeight = styled.div`
  max-height: 450px;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
  div{
    height: 100%;
    width: auto;
  }
  img{
    height: 100%;
    width: auto;
  }
  @media (max-width: 768px) {
    max-height: 375px;
}
  @media (max-width: 768px) {
    max-height: 260px;
}
`;

const colorOptions = ["#ffdce2", "#2a2a2a"];

export default function ColorPicker({slug}) {
  const [colorInd, setColor] = useState('#ffdce2');
  const [colorInd2, setColor2] = useState('#ffdce2');
  useEffect(() => {

  }, [colorInd]);
  return (
    <MainSectionOutside
      bgColor={colorInd}
      bgColor2={colorInd}
    >

      {colorOptions.map((color, ind) => {
        return (
          <React.Fragment key={ind}>
            {color === colorInd &&
              <MainSection
                key={ind}
                vertical
                bgColor={colorInd === "#ffdce2" ? "#ffdce2" : colorInd === "#2a2a2a" ? "#2a2a2a" : "#ffdce2"}
                bgColor2={colorInd2}
                margin="3rem 0"
                alignItems="center"
              >
                <ColorSelectorContainer >


                </ColorSelectorContainer>
              </MainSection>
            }
          </React.Fragment>
        );
      })}
      <ContentSection className="container">
        <FirstSection>
          <MainHeading className="text-center" color={`${colorInd === '#ffdce2' ? 'black' : 'black'}`}>Black Edition - Once Gone, Gone for <AnimateText> ever</AnimateText> </MainHeading>

          {/* <SmallHeading className="text-sm-left text-center" color={`${colorInd === '#ffdce2' ? 'white' : 'black'}`}>
            2 Fresh colors that reflect your personality
          </SmallHeading> */}
        </FirstSection>
        <ImageHeight >
        <ResponsiveImage
                                            image={require("../lets-goal-2021/images/plannerblack.png?resize")}
                                        />
        {/* <Img src={colorInd === "#ffdce2" ? `${plannerBlack}` : colorInd === '#2a2a2a' ? `${plannerBlack}` : `${plannerBlack}`} width="50%" /> */}
        </ImageHeight>
        <ColorSelectorContainer>
          {/* {
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
          } */}
          <ProPlannerPrice slug={slug} />

        </ColorSelectorContainer>
      </ContentSection>

    </MainSectionOutside>
  );
}
