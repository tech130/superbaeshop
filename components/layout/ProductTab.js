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
    margin: 20px 0px;
`;
const FlexOutline = styled(Flex)`
    align-items: center;
    flex-direction: column; 
    margin: 0px 10px;
    span{
        font-size: 14px;
        font-weight: 600;
        color: black;
    }
    pointer-events:${(props) => props.events};
`;
const ImageBox = styled(Flex)`
    border-radius: 50%;
    overflow: hidden;
    background: white;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.borderColor};
    padding:4px;

`;
const ImageInside = styled(Flex)`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #d5d5d5;
    align-items: center;
    justify-content: center;
`;
const ProductTab = () => {
    const { pathname } = useRouter();

    return (
        <>
            <Block padding="20px 0px 30px 0px">
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
                                    <ImageBox borderColor={pathname === '/[country]/product/lets-goal-2021-planner' ? '#0190ff' : 'transparent'}>
                                        <CountryLink href="/product/lets-goal-2021-planner">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../lets-goal-2021/images/pinkNew.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/lets-goal-2021-planner">
                                        <span>Pink Planner</span>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/my-space-2022-planner-black' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/my-space-2022-planner-black' ? '#0190ff' : 'transparent'}>
                                        <CountryLink href="/product/my-space-2022-planner-black">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../lets-goal-2021/images/plannerblack.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/bundle-2021">
                                        <span>Black Planner</span>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/bundle-2021' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/bundle-2021' ? '#0190ff' : 'transparent'}>
                                        <CountryLink href="/product/bundle-2021">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../lets-goal-2021/images/pinkNew.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/bundle-2021">
                                        <span>Pink Bundle</span>
                                    </CountryLink>
                                </FlexOutline>
                                <FlexOutline events={pathname === '/[country]/product/ultimate-bundle-2022-black' ? 'none' : 'auto'}>
                                    <ImageBox borderColor={pathname === '/[country]/product/ultimate-bundle-2022-black' ? '#0190ff' : 'transparent'}>
                                        <CountryLink href="/product/ultimate-bundle-2022-black">
                                            <ImageInside>
                                                <ResponsiveImage
                                                    image={require("../lets-goal-2021/images/plannerblack.png?resize")}
                                                />
                                            </ImageInside>

                                        </CountryLink>
                                    </ImageBox>
                                    <CountryLink href="/product/ultimate-bundle-2022-black">
                                        <span>Black Bundle</span>
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
