import React from "react";
import styled from "styled-components";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import { H3 } from "../styled/Headings";

const MainCaption = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const SmallHeading = styled.div`
  font-size: 1rem;
  
  font-weight: ${(props) => props.fontWeight || 500};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

const FirstOptionBlock = styled.div`
  color: black;
  background-color: ${(props) => props.backgroundColor || "#edf5fb"};
  padding: 1rem 2rem;
  font-size: 24px;
    font-weight: 600;
`;

const OptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 75px;
  box-shadow: 35px 22px 40px 25px rgb(0 0 0 / 15%);
`;

const OptionItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  height: 100%;
  color: gray;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  align-items: center;
`;

const firstOptionSettings = [
  "Planner",
  "Notebook",
  "Sticker Book",
  "Bookmarks",
  "Pop socket",
  "Enamel Pins",
  "Wall Calendar",
  "Desk Calendar",
  
];
const secondOptionSettings = [
  "Planner",
  "Notebook",
  "Sticker Book",
  "Bookmarks",
  "Pop socket",
  "Enamel Pins",
  "Wall calendar",
  "Desk Calendar",
  "Tote Bag",
  
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
`;

const CartButtonLeft = styled.button`
    padding: 8px 40px;
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
const CartButtonRight = styled.button`
    padding: 8px 40px;
    border-radius: 30px;
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: 13px 8px 50px 25px rgb(0 0 0 / 10%);
    position: absolute;
    bottom: 50px;
    left: 75px;
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
`;

export default function OptionsSection() {
  return (
    <>
      <Flex width="100%" vertical alignItems="center" margin="1rem 0 0 0">
        <Flex vertical alignItems="center" margin="2rem 0">
          <MainCaption>Two options to choose from.</MainCaption>
          <SmallHeading>Which one will you choose?</SmallHeading>
        </Flex>

        <CardContainer>
          <OptionLeftContainer className="left-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#d6bcbd">Ultimate Planner</FirstOptionBlock>
              <OptionItems>
                {firstOptionSettings.map((firstOptionSetting) => {
                  return (
                    <SmallHeading key={firstOptionSetting} marginTop="5px">
                      {firstOptionSetting}
                    </SmallHeading>
                  );
                })}
              </OptionItems>
              <SmallHeading  marginTop="15px" color="black"  marginBottom="15px">
                *Peace of mind. Included
                  </SmallHeading>
            </OptionCard>
            <CartButtonLeft>
              BUY
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
          </OptionLeftContainer>

          <OptionRightContainer  className="right-pop-slide">
            <OptionCard>
              <FirstOptionBlock backgroundColor="#c6e1f1">
                Ultimate Planner
              </FirstOptionBlock>
              <OptionItems justifyContent="center">
                {secondOptionSettings.map((firstOptionSetting) => {
                  return (
                    <SmallHeading key={firstOptionSetting}>
                      {firstOptionSetting}
                    </SmallHeading>
                  );
                })}
              </OptionItems>
                <SmallHeading   marginTop="15px" color="black"  marginBottom="15px">
                *Peace of mind. Included
                  </SmallHeading>
            </OptionCard>
            <CartButtonLeft>
              BUY
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
          </OptionRightContainer>
        </CardContainer>
      </Flex>
    </>
  );
}
