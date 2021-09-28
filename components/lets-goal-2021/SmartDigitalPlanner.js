import React, { useRef,useEffect } from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import Marquee from "react-fast-marquee";
import ResponsiveImage from "../common/ResponsiveImage";
import { Col, Row, Container } from "styled-bootstrap-grid";

const BGImage = require("./images/Bg1.jpg?resize");
// const BGImage2 = require("./images/bg2.jpg?resize");
import BGImage2 from './images/bg2.jpg';
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
  text-align: left;
  font-size: 4.5rem;
  font-weight: 700;
  color:#d8d8d8;
  line-height: 90px;
  margin-top:85px;
`;
const SubCaption = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  color:#d8d8d8;
  line-height: 28px;
  margin-top:25px;
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
    height: 200vh;
    position: relative;
    display: flex;
    align-items: center;
`;
const FadeContainer = styled.div`
    height: 90vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 60px;

`;


const SmartDigitalPlanner = () => {
    const domRef = useRef();
    const [isVisible, setVisible] = React.useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          // In your case there's only one element to observe:     
          console.log(entries)
          if (entries[0].isIntersecting) {
            // Not possible to set it back to false like this:
            setVisible(true);
            
            // No need to keep observing:
            observer.unobserve(domRef.current);
          }
        });
        
        observer.observe(domRef.current);
        
        return () => observer.unobserve(domRef.current);
      }, []);
    return (
        <Block padding="30px 0px" className="overflow-hidden">
            <StyledDiv>
                <OverHeight>
                    <OutlineDiv>
                        <Container>

                            <Row>
                                <Col lg={6}>
                                    <ContentDiv ref={ domRef }>
                                        <div data-aos="zoom-in-down"
                                             data-aos-anchor-placement="center-center" data-aos-duration="200"
                                            >
                                            <FadeContainer>

                                            <MainCaption>
                                                we’ve got
                                                your back.
                                            </MainCaption>
                                            <SubCaption>
                                                gain complete control over your credit card with CRED Protect.
                                                receive category-based analysis of your spends, detect hidden charges,
                                                and track your credit limit in real-time.
                                            </SubCaption>
                                            </FadeContainer>
                                        </div>
                                    </ContentDiv>
                                    <ContentDiv>
                                    <div data-aos="fade-in"
     data-aos-anchor-placement="center-center" data-aos-duration="1000"
                                            >
                                            <FadeContainer>

                                            <MainCaption>
                                                we’ve got
                                                your back.
                                            </MainCaption>
                                            <SubCaption>
                                                gain complete control over your credit card with CRED Protect.
                                                receive category-based analysis of your spends, detect hidden charges,
                                                and track your credit limit in real-time.
                                            </SubCaption>
                                            </FadeContainer>

                                        </div>
                                    </ContentDiv>
                                    <ContentDiv>
                                    <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                                            <FadeContainer>

                                            <MainCaption>
                                                we’ve got
                                                your back.
                                            </MainCaption>
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
                                    <MobDiv>

                                    </MobDiv>
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
