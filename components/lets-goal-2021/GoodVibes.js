import React, { useRef } from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import Marquee from "react-fast-marquee";
import ResponsiveImage from "../common/ResponsiveImage";

import styled,{keyframes} from "styled-components";

const rainbow_animation  = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;
const MainCaption = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 18px 70px;
  border-left: 1px solid #afafaf;
  border-right: 1px solid #afafaf;
  @media (max-width: 768px) {
    padding: 15px 15px;
    font-size: 1.6rem;
}
@media (max-width: 576px) {
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #afafaf;
  border-top: 1px solid #afafaf;
  font-size:24px;
  padding: 15px 15px;
}
`;
const SubCaption = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  width: 35%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
}
@media (max-width: 576px) {
  font-weight: 500;
  font-size:18px;
  width: 100%;
  
}
`;



// background: linear-gradient(to right, #f4edf4 0%, #eef2fa 51%, #d7bcbd 100%);
// background: linear-gradient(to right,#6666ff,#0099ff,#00ff00,#ff3399,#6666ff);
const StyledDiv = styled.div`
background: linear-gradient(45deg, #fff6f1, #eef7ff, #fff2f1, #fff6f1, #eef7ff, #fff2f1);
-webkit-background-clip: text;
color: black;
animation: ${rainbow_animation} 4s ease-in-out infinite;
background-size: 400% 100%;
  font-weight: 700;
  background-clip: border-box;
    margin: 0px 20px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    height:300px;
    @media (max-width: 576px) {
      margin: 0px 0px;
      padding:20px 50px;
      
    flex-direction: column;
    justify-content: space-evenly;
    }
`;

const GoodVibes = () => {


    return (
        <Block padding="65px 0px"  className="overflow-hidden"> 
            <StyledDiv
      >
          <SubCaption>
            {" "}
            Making things happen<br />
          {/* <span className="font-weight-normal">WE’LL REFUND YOU.</span> */}
            
          </SubCaption>

        <MainCaption>Keep track of your activities on the go and achieve more goals with our planner.</MainCaption>
        <SubCaption>
          {" "}
          Building a better you<br />
          {/* <span className="font-weight-normal">WE’LL REFUND YOU.</span> */}
            
          </SubCaption>
      </StyledDiv>
        </Block>
    );
};



export default GoodVibes;
