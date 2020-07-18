import React from "react";
import CartIcon from "../icons/CartIcon";
import Logo from "./Logo";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import CountryList from "./CountryList";
import SignInDrop from "./SignInDrop";
import CountryLink from "../common/CountryLink";
import LoginModalBtn from "./LoginModalBtn";
import Txt from "../styled/Txt";

const Hdr = styled.header`
    background: rgba(255, 255, 255, 0.67);
    border-bottom: 1px solid #eaeaea;
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;

    @media only screen and (max-width: 575px) {
        display: none;
    }
`;

const HdrMobile = styled(Hdr)`
    display: none;

    @media only screen and (max-width: 575px) {
        display: block;
    }
`;

const Hdrli = styled.li`
    margin-left: 20px;
    display: flex;
    align-items: center;
    position: relative;
`;

const CartCountStl = styled.span`
    display: inline-block;
    text-align: center;
    border-radius: 16px;
    line-height: 16px;
    height: 16px;
    min-width: 16px;
    background: #000;
    color: #fff;
    font-size: 10px;
    position: absolute;
    top: 2px;
    left: 12px;
`

const Header = () => {
    return (
        <>
            <Hdr>
                <Container>
                    <Flex
                        as="nav"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight="50px"
                    >
                        <Logo width="220px" />
                        <Ul alignItems="stretch">
                            <Hdrli>
                                <CartCountStl>3</CartCountStl>
                                <CountryLink href="/checkout">
                                    <CartIcon size={20} />
                                </CountryLink>
                            </Hdrli>
                            <Hdrli>
                                <SignInDrop />
                            </Hdrli>
                            <Hdrli>
                                <CountryList />
                            </Hdrli>
                        </Ul>
                    </Flex>
                </Container>
            </Hdr>
            <HdrMobile>
                <Container fluid>
                    <Flex
                        as="nav"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight="50px"
                    >
                        <Logo small width="45px" />
                        <Ul alignItems="stretch">
                            <Hdrli>
                                <LoginModalBtn>
                                    <Txt fontSize={14} weight={500}>
                                        Sign In
                                    </Txt>
                                </LoginModalBtn>
                            </Hdrli>
                            <Hdrli>
                                <CountryList />
                            </Hdrli>
                            <Hdrli>
                                <CountryLink href="/checkout">
                                    <CartIcon size={20} />
                                </CountryLink>
                            </Hdrli>
                        </Ul>
                    </Flex>
                </Container>
            </HdrMobile>
        </>
    );
};

export default Header;
