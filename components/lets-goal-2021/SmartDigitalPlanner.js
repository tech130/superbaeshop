import React, { useRef, useEffect } from "react";
import Block from "../styled/Block";
import { Col, Row, Container } from "styled-bootstrap-grid";

const BGImage = require("./images/Bg1.jpg?resize");
import BGImage2 from './images/bg2.jpg';
import styled,{keyframes} from "styled-components";

const animate = keyframes`
0%,
100% {
  clip-path: polygon(
    0% 45%,
    16% 44%,
    33% 50%,
    54% 60%,
    70% 61%,
    84% 59%,
    100% 52%,
    100% 100%,
    0% 100%
  );
}

50% {
  clip-path: polygon(
    0% 60%,
    15% 65%,
    34% 66%,
    51% 62%,
    67% 50%,
    84% 45%,
    100% 46%,
    100% 100%,
    0% 100%
  );
}
`;

const MainCaption = styled.div`
  text-align: left;
  font-size: 4rem;
  font-weight: 700;
  color:#d8d8d8;
  line-height: 1.1;
  position: absolute;
  transform: translate(-50%, -50%);
  color: transparent;
  -webkit-text-stroke: 2px #03a9f4;
  white-space: nowrap;
 @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 45px;
    margin-top:55px;
}
`;
const MainCaption2 = styled.div`
  text-align: left;
  font-size: 4rem;
  font-weight: 700;
  color:#d8d8d8;
  line-height: 1.1;
  position: absolute;
  transform: translate(-50%, -50%);
  color: #03a9f4;
  animation: ${animate} 4s ease-in-out infinite;
  white-space: nowrap;
 @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 45px;
    margin-top:55px;
}
`;
const SubCaption = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  color:#d8d8d8;
  line-height: 28px;
  margin-top:15px;
  margin-bottom:85px;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
}
`;
const StyledDiv = styled.div`
background-image: url(${BGImage});
  background-position:center;
  background-size: 100% 100%;
  position: relative;
  height:100%;
  background-attachment: fixed;
`;
const OverHeight = styled.div`
position: static;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  height:100%;
  background:black;
`;
const MobDiv = styled.div`
position: absolute;
    bottom: 0;
    right: 0;
    height: 400px;
    background: white;
    width: 300px;
`;
const OutlineDiv = styled.div`
  height: 100%;
  position:relative;

`;
const StyledDivMinHeight = styled.div`
background-image: url(${BGImage2});
  background-position:center;
  background-size: 100% 100%;
  position: relative;
  background-attachment: fixed;
  height:400px;
`;
const ContentDiv = styled.div`
    height: ${(props)=>props.width|| '150vh'};
    position: relative;
    display: flex;
    align-items: flex-end;
    @media (max-width: 768px) {
        height: 200vh;
    }
`;
const FadeContainer = styled.div`
    height: 50vh;
    position: relative;
    display: flex;
    align-items:center;
    flex-direction: column;
    margin: 0px 0px 0px 90px;
    justify-content: end;
    @media (max-width: 768px) {
        padding: 0px 30px 0px 30px;
        align-items: center;
    }
`;
const PopUp = styled.div`
    height: 40px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 0px 0px 90px;
    justify-content: end;
`;
const Position = styled.div`
    height: 10px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 0px 0px 90px;
    justify-content: end;
`;


const SmartDigitalPlanner = () => {
    // const domRef = useRef();
    // const [isVisible, setVisible] = React.useState(false);
    
    return (
        <Block padding="30px 0px" className="overflow-hidden">
            <StyledDiv>
                <OverHeight>
                    <OutlineDiv>
                        <Container >

                            <Row>
                                <Col lg={6}>
                                    <ContentDiv width="80vh">
                                        <div data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="700"
                                        >
                                            <FadeContainer>
                                                {/* <div className=""> */}
                                                <Position>
                                                    <MainCaption>
                                                        Ooooh! One more.
                                                    </MainCaption>
                                                    <MainCaption2>
                                                        Ooooh! One more.
                                                    </MainCaption2>
                                                </Position>
                                                {/* </div> */}
                                                <SubCaption>
                                                    The Smart Digital Planner
                                                    One app. 1000s of options. Endless Possibilities.
                                                    Clearly Smarter than any other app

                                                </SubCaption>
                                                
                                            </FadeContainer>
                                        </div>
                                    </ContentDiv>
                                    <ContentDiv>
                                    <div data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="700"
                                        >
                                            <FadeContainer>

                                            <Position>
                                                    <MainCaption>
                                                        Ooooh! One more.
                                                    </MainCaption>
                                                    <MainCaption2>
                                                        Ooooh! One more.
                                                    </MainCaption2>
                                                </Position>
                                                <SubCaption>
                                                    gain complete control over your credit card with CRED Protect.
                                                    receive category-based analysis of your spends, detect hidden charges,
                                                    and track your credit limit in real-time.
                                                </SubCaption>
                                            </FadeContainer>

                                        </div>
                                    </ContentDiv>
                                    <ContentDiv>
                                    <div data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="700"
                                        >
                                            <FadeContainer>

                                            <Position>
                                                    <MainCaption>
                                                        Ooooh! One more.
                                                    </MainCaption>
                                                    <MainCaption2>
                                                        Ooooh! One more.
                                                    </MainCaption2>
                                                </Position>
                                                <SubCaption>
                                                    gain complete control over your credit card with CRED Protect.
                                                    receive category-based analysis of your spends, detect hidden charges,
                                                    and track your credit limit in real-time.
                                                </SubCaption>
                                            </FadeContainer>

                                        </div>
                                    </ContentDiv>

                                </Col>
                                <Col lg={6}>
                                    {/* <MobDiv>

                                    </MobDiv> */}
                                </Col>
                            </Row>

                        </Container>

                    </OutlineDiv>
                </OverHeight>

            </StyledDiv>
            <StyledDivMinHeight>
                fgf
            </StyledDivMinHeight>

        </Block>
    );
};



export default SmartDigitalPlanner;
