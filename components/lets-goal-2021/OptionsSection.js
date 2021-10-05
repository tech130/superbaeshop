import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import P from "../styled/P";
import { H3 } from "../styled/Headings";
import BGImage2 from './images/walkthrough.png';
import roundText from './images/popUpText.png';
import roundText2 from './images/popUpText2.png';
import ProductBuy from "../product/ProductBuy";
import AnimateText from "../styled/AnimateText";
import MainHeading from "../styled/MainHeading";
import SmallHeading from "../styled/SmallHeading";

import bookmark from './images/icons/bookmark-white.png';
import calendar from './images/icons/calendar.png';
import year from './images/icons/icons8-new-year-calendar-50.png';
import wall from './images/icons/icons8-wall-socket-with-plug-50.png';
import office from './images/icons/office-push-pin.png';
import shopping from './images/icons/shopping-bag.png';
import wedding from './images/icons/wedding-planner.png';
import writing from './images/icons/writing.png';

const MainCaption = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
`;

const SmallHeadingSet = styled.div`
  font-size: ${(props) => props.Fs || '16px'};
  line-height: 1.1;
  font-weight: ${(props) => props.fontWeight || 500};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
const SmallHeadingLi = styled.div`
  font-size: ${(props) => props.Fs || '16px'};
  line-height: 1.1;
  font-weight: ${(props) => props.fontWeight || 500};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || '10px'};
  border: 1px solid white;
  padding:6px 5px;
  border-radius: 0px 10px 10px 0px;
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  span{
    width: 16px;
    height: 16px;
    margin-right: 7px;
  }
`;

const FirstOptionBlock = styled.div`
  color: black;
  background-color: ${(props) => props.backgroundColor || "#FFF"};
  padding: 1rem 2rem;
  font-size: 24px;
    font-weight: 600;
    height: 100px;
    position:relative;
    width:100%;
`;

const OptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 55px;
  box-shadow: 35px 22px 40px 25px rgb(0 0 0 / 15%);
  width:220px;
`;

const OptionItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.6rem;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  height: 230px;
  color: #000000;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  align-items: center;
  overflow: hidden;
  @media (max-width: 992px) {
    flex-direction: column;
    height: 100%;
}
`;


const firstOptionSettings = [
  { item: "Planner", icon:wedding },
  { item: "Notebook", icon:writing },
  { item: "Bookmarks", icon:bookmark },
  { item: "Sticker Book", icon:writing },
  { item: "Pop socket", icon:wall },
  { item: "Enamel Pins", icon:office },
  { item: "Wall Calendar", icon:calendar },
  { item: "Desk Calendar", icon:year }
];
const secondOptionSettings = [
  { item: "Planner", icon:wedding },
  { item: "Notebook", icon:writing },
  { item: "Bookmarks", icon:bookmark },
  { item: "Sticker Book", icon:writing },
  { item: "Pop socket", icon:wall },
  { item: "Enamel Pins", icon:office },
  { item: "Wall Calendar", icon:year },
  { item: "Desk Calendar", icon:calendar },
  { item: "Tote Bag", icon:shopping },

];

const OptionLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  border:1px solid #e0e0e0;
  background: white;
  height: 100%;
  background: linear-gradient(to left,#c6e1f1 50%,#ffffff 50%) right;
  background-size: 200%;
  transition: 0.8s ease-out;
  position: relative;
  &:hover {
    background-position: left;
    width: 80%;
  }
  @media (max-width: 992px) {
    width: 100%;
    padding: 30px 0px;
    &:hover {
      width: 100%;
    }
}
`;

const CartButtonLeft = styled.button`
    border-radius: 30px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    position: absolute;
    bottom: 50px;
    right: 75px;
    @media (max-width: 576px) {
      bottom: 35px;
      right: 50%;
      margin-right: -60px;
    }
`;

const OptionRightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  border: 1px solid #e0e0e0;
  background: white;
  height: 100%;
  background: linear-gradient(to left, #ffffff 50%, #ffdce2  50%) left;
  background-size: 200%;
  transition: 0.8s ease-out;
  position: relative;
  
  &:hover {
    background-position: right;
    width: 80%;
  }
  @media (max-width: 992px) {
    width: 100%;
    padding: 30px 0px;
    &:hover {
      width: 100%;
    }
}
`;
const ImgContainer = styled.div`
background-image: url(${BGImage2});
  background-position:center;
  background-position: center;
  background-size: 100% auto;
  position: relative;
  height: 100px;
  bottom: -50px;
  z-index: 9;
  
`;
const zoom_in_zoom_out = keyframes`
0% {
    transform: scale(0, 0);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const PopUp = styled.div`
height: 85px;
    
    width: 85px;
    border-radius: 50%;
    overflow: hidden;
    animation: ${zoom_in_zoom_out} 2s ease-out;
    position: absolute;
    left: -54px;
    bottom: 5px;
    @media (max-width: 576px) {
      height: 75px;
      width: 75px;
    left: -65px;
    bottom: 25px;
  }
`;
const FlexNew = styled.div`
height: 100%;
width:100%;
flex-direction:column;
justify-content: start;
flex-wrap: nowrap;
align-items: center;
margin: 15px 0 65px 0;
    @media (max-width: 992px) {
      height: 100%;
  }
    @media (max-width: 768px) {
      height: 100%;
  }
    @media (max-width: 576px) {
      height: 100%;
  }
`;
export default function OptionsSection() {
  return (
    <>
      <FlexNew >
        <Flex vertical alignItems="center" margin="2rem 0">
          <MainHeading textAlign="center">Two options to choose <AnimateText>from</AnimateText> </MainHeading>
          <SmallHeading textAlign="center">Which one will you choose? Even the little things are a big deal
          </SmallHeading>
        </Flex>

        <CardContainer>
          <OptionLeftContainer className="left-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#FFF">

                <ImgContainer>

                </ImgContainer>
              </FirstOptionBlock>
              <OptionItems justifyContent="center">
                {/* {firstOptionSettings.map((firstOptionSetting) => {
                  return (
                    <SmallHeading key={firstOptionSetting} marginTop="5px">
                      {firstOptionSetting}
                    </SmallHeading>
                  );
                })} */}
                <P fontSize="24px" weight="700" margin="10px 0px 0px 0px" >
                  Ultimate Planner
                </P>
                <P textAlign="center" fontSize="16px" weight="700" margin="0px 0px">
                Plan your activities ahead and Go stress- free with our ultimate planner!
                </P>
                <PopUp className="roundTxt">
                  <img src={roundText} />
                </PopUp>
              </OptionItems>
              <SmallHeadingSet marginTop="0px" color="black" marginBottom="15px">
              Try ultimate planner now
              </SmallHeadingSet>
            </OptionCard>
            <CartButtonLeft>
              <ProductBuy slug={"lets-goal-2021-planner"} />
              
            </CartButtonLeft>
            <div className="pop-up-text">
              <div className="insider-outline">
                <div className="insider">
                  <H3>
                    {" "}
                  </H3>
                  <Txt lineHeight={1} fontSize="14px" weight={500}>
                    With highest quality print <br />
                    Which one will you choose?
                  </Txt>
                </div>
              </div>
            </div>
            <div className="pop-up-list left">
              <div className="insider-outline1">
                <div className="insider1">
                  {firstOptionSettings.map((firstOptionSetting,index) => {
                    return (
                      <SmallHeadingLi key={index} marginTop="0px">
                        <span>
                        <img src={firstOptionSetting.icon} />
                        </span>
                        {firstOptionSetting.item}
                      </SmallHeadingLi>
                    );
                  })}
                </div>
              </div>
            </div>
          </OptionLeftContainer>

          <OptionRightContainer className="right-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#FFF">
                <ImgContainer>

                </ImgContainer>
              </FirstOptionBlock>
              <OptionItems justifyContent="center">
                {/* {secondOptionSettings.map((firstOptionSetting) => {
                  return (
                    <SmallHeading key={firstOptionSetting}>
                      {firstOptionSetting}
                    </SmallHeading>
                  );
                })} */}
                <P fontSize="24px" weight="700" margin="10px 0px 0px 0px" >
                Ultimate Bundle
                </P>
                <P  textAlign="center"fontSize="16px" weight="700" margin="0px 0px">
                  All happy goodies bundled together!
                </P>
                <PopUp className="roundTxt">
                  <img src={roundText2} />
                </PopUp>
              </OptionItems>
              <SmallHeadingSet marginTop="15px" color="black" marginBottom="15px">
              Try Ultimate Bundle now
              </SmallHeadingSet>
            </OptionCard>
            <CartButtonLeft>
            <ProductBuy slug={"lets-goal-2021-planner"} />
              
            </CartButtonLeft>
            <div className="pop-up-text right">
              <div className="insider-outline">
                <div className="insiderR">
                  <H3>
                    { " "}
                  </H3>
                  <Txt lineHeight={1} fontSize="14px" weight={500}>
                    With highest quality print <br />
                    Which one will you choose?
                  </Txt>
                </div>
              </div>
            </div>
            <div className="pop-up-list right">
              <div className="insider-outline1">
                <div className="insider1">
                  {secondOptionSettings.map((firstOptionSetting,index) => {
                    return (
                      <SmallHeadingLi key={index}>
                        <span>
                        <img src={firstOptionSetting.icon} />
                        </span>
                        {firstOptionSetting.item}
                      </SmallHeadingLi>
                    );
                  })}
                </div>
              </div>
            </div>
          </OptionRightContainer>
        </CardContainer>
      </FlexNew>
    </>
  );
}
