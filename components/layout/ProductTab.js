import React from "react";
import Block from "../styled/Block";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Flex from "../styled/Flex";
import styled from "styled-components";
import ResponsiveImage from "../common/ResponsiveImage";
import SmallHeading from "../styled/SmallHeading";
import { useRouter } from "next/router";
import CountryLink from "../common/CountryLink";

const FlexBox = styled(Flex)`
    align-items: center;
    justify-content: center;
    margin: 20px 10px;
    @media only screen and (max-width: 575px) {
        margin: 20px 10px 0px 10px;
    }
`;
const FlexOutline = styled(Flex)`
    align-items: center;
    flex-direction: column; 
    margin: 0px 30px;
    span{
        font-size: 14px;
        font-weight: 600;
        color: ${(props) => props.events ==='none' ? ' #004b85':'#000'};
        display: block;
        line-height: 1;
        margin: 5px 0px 0px 0px;    
    }
    pointer-events:${(props) => props.events};
    a{
        text-align:center;
    }
    .sub-text{
        font-size: 14px;
        color: #4c4c4c;
    }
   
    @media only screen and (max-width: 992px) {
        margin: 0px 20px;
    }
    @media only screen and (max-width: 768px) {
        margin: 0px 15px;
    }
    @media only screen and (max-width: 575px) {
        a{
            text-align:center;
        }
        margin: 0px 8px;
    }
`;
const ImageBox = styled(Flex)`
    border-radius: 50%;
    overflow: hidden;
    background: white;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.borderColor};
    padding:4px;

`;
const ImageInside = styled(Flex)`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    align-items: center;
    justify-content: center;
    padding: 8px;
    @media only screen and (max-width: 575px) {
        width: 58px;
        height: 58px;
    }
    
`;
const ProductTab = () => {
    const { pathname } = useRouter();

    return (
        <>
            <Block padding="20px 0px 20px 0px">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <SmallHeading textAlign="center">
                                My Space 2022 planner
                                {/* <AnimateText>planner</AnimateText> */}
                            </SmallHeading>
                        </Col>
                        <Col lg={12}>
                            <FlexBox>
                                <FlexOutline events={pathname === '/[country]/product/lets-goal-2021-planner' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/lets-goal-2021-planner'  ? '#d14e9a' : 'transparent'}>
                                        <CountryLink href="/product/lets-goal-2021-planner">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../lets-goal-2021/images/cover.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/lets-goal-2021-planner">
                                        <span>Pink Planner</span>
                                        <div className="sub-text">11 Freebies</div>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/my-space-2022-planner-black' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/my-space-2022-planner-black' ? '#d14e9a' : 'transparent'}>
                                        <CountryLink href="/product/my-space-2022-planner-black">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../black-planner/images/Plannerblack.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/my-space-2022-planner-black">
                                        <span>Black Planner</span>
                                        <div className="sub-text">11 Freebies</div>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/bundle-2021' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/bundle-2021' ? '#d14e9a' : 'transparent'}>
                                        <CountryLink href="/product/bundle-2021">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../bundle/images/pinkbundle.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/bundle-2021">
                                        <span>Pink Bundle</span>
                                        <div className="sub-text">17 Freebies</div>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/ultimate-bundle-2022-black' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/ultimate-bundle-2022-black' ? '#d14e9a' : 'transparent'}>
                                        <CountryLink href="/product/ultimate-bundle-2022-black">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../black-bundle/images/Blackbundle.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/ultimate-bundle-2022-black">
                                        <span>Black Bundle</span>
                                        <div className="sub-text">17 Freebies</div>
                                    </CountryLink>
                                </FlexOutline>
                            </FlexBox>
                        </Col>
                    </Row>
                </Container>
            </Block>


        </>
    );
};

export default ProductTab;
