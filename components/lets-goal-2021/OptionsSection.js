import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import P from "../styled/P";
import { H3 } from "../styled/Headings";
import BGImage2 from './images/walkthrough.png';
import roundText from './images/popUpText.png';
import ProductBuy from "../product/ProductBuy";
import AnimateText from "../styled/AnimateText";

const MainCaption = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.1;
`;

const SmallHeading = styled.div`
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
  padding: 4px 4px;
  border-radius: 0px 10px 10px 0px;
  background: #ffffff;
`;

const FirstOptionBlock = styled.div`
  color: black;
  background-color: ${(props) => props.backgroundColor || "#edf5fb"};
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
  padding: 0.6rem 0;
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
  "* Planner",
  "* Notebook",
  "* Sticker Book",
  "* Bookmarks",
  "* Pop socket",
  "* Enamel Pins",
  "* Wall Calendar",
  "* Desk Calendar",

];
const secondOptionSettings = [
  "* Planner",
  "* Notebook",
  "* Sticker Book",
  "* Bookmarks",
  "* Pop socket",
  "* Enamel Pins",
  "* Wall calendar",
  "* Desk Calendar",
  "* Tote Bag",

];

const OptionLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  border:1px solid #e0e0e0;
  background: white;
  height: 100%;
  background: linear-gradient(to left, #f7f5f5  50%, #c6e1f1 50%) right;
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
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: 13px 8px 50px 25px rgb(0 0 0 / 10%);
    position: absolute;
    bottom: 50px;
    right: 75px;
`;

const OptionRightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  border: 1px solid #e0e0e0;
  background: white;
  height: 100%;
  background: linear-gradient(to left, #d6bcbd 50%, #f7f5f5  50%) left;
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
height: 100px;
    
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    animation: ${zoom_in_zoom_out} 2s ease-out;
    position: absolute;
    left: -51%;
    bottom: 15px;
    @media (max-width: 576px) {
      height: 75px;
    width: 75px;
    left: -65px;
    bottom: 35px;
  }
`;
export default function OptionsSection() {
  return (
    <>
      <Flex height="660px" width="100%" vertical alignItems="center" margin="1rem 0 0 0">
        <Flex vertical alignItems="center" margin="2rem 0">
          <MainCaption>Two options to choose <AnimateText>from</AnimateText> </MainCaption>
          <SmallHeading Fs="24px">Which one will you choose? Even the little things are a big deal
          </SmallHeading>
        </Flex>

        <CardContainer>
          <OptionLeftContainer className="left-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#d6bcbd">

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
                <P fontSize="16px" weight="700" margin="0px 0px">
                  Try Ultimate Planner
                </P>
                <PopUp className="roundTxt">
                  <img src={roundText} />
                </PopUp>
              </OptionItems>
              <SmallHeading marginTop="0px" color="black" marginBottom="15px">
                * Peace of mind. Included
              </SmallHeading>
            </OptionCard>
            <CartButtonLeft>
              <ProductBuy slug={"lets-goal-2021-planner"} />
              
            </CartButtonLeft>
            <div className="pop-up-text">
              <div className="insider-outline">
                <div className="insider">
                  <H3>
                    To Choose
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
                  {firstOptionSettings.map((firstOptionSetting) => {
                    return (
                      <SmallHeadingLi key={firstOptionSetting} marginTop="0px">
                        {firstOptionSetting}
                      </SmallHeadingLi>
                    );
                  })}
                </div>
              </div>
            </div>
          </OptionLeftContainer>

          <OptionRightContainer className="right-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#c6e1f1">
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
                <P fontSize="16px" weight="700" margin="0px 0px">
                  Try Ultimate Bundle
                </P>
                <PopUp className="roundTxt">
                  <img src={roundText} />
                </PopUp>
              </OptionItems>
              <SmallHeading marginTop="15px" color="black" marginBottom="15px">
                *Peace of mind. Included
              </SmallHeading>
            </OptionCard>
            <CartButtonLeft>
            <ProductBuy slug={"lets-goal-2021-planner"} />
              
            </CartButtonLeft>
            <div className="pop-up-text right">
              <div className="insider-outline">
                <div className="insiderR">
                  <H3>
                    To Choose
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
                  {secondOptionSettings.map((firstOptionSetting) => {
                    return (
                      <SmallHeadingLi key={firstOptionSetting}>
                        {firstOptionSetting}
                      </SmallHeadingLi>
                    );
                  })}
                </div>
              </div>
            </div>
          </OptionRightContainer>
        </CardContainer>
      </Flex>
    </>
  );
}
