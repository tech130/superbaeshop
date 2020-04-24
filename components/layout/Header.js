import React from "react";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";
import DotsMenu from "../icons/DotsMenu";
import Logo from "./Logo";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import HeaderDropdown from "./HeaderDropdown";
import Button from "../styled/Button";
import CountryList from "./CountryList";
import SignInDrop from "./SignInDrop";
import CountryLink from "../common/CountryLink";

const Hdr = styled.header`
    background: rgba(255, 255, 255, 0.67);
    border-bottom: 1px solid #eaeaea;
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
`;

// const HdrMobile = styled(Hdr)`
    
// `;

const Hdrli = styled.li`
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

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
                                <CountryLink href="/checkout">
                                    <Button as="a">
                                        <CartIcon size={20} />
                                    </Button>
                                </CountryLink>
                            </Hdrli>
                            <Hdrli>
                                <SignInDrop />
                            </Hdrli>
                            <Hdrli>
                                <CountryList />
                            </Hdrli>
                            <Hdrli>
                                <HeaderDropdown
                                    Btn={({ onClick }) => (
                                        <Button onClick={onClick}>
                                            <DotsMenu size={20} />
                                        </Button>
                                    )}
                                >
                                    <ul>
                                        <li>
                                            <CountryLink href="/privacy-policy">
                                                Privacy policy
                                            </CountryLink>
                                        </li>
                                        <li>
                                            <CountryLink href="/terms-and-conditions">
                                                Terms and conditions
                                            </CountryLink>
                                        </li>
                                        <li>
                                            <CountryLink
                                                href="/cancellations-and-return
                                                    policy"
                                            >
                                                Cancellations and return policy
                                            </CountryLink>
                                        </li>
                                        <li>
                                            <CountryLink href="/data-privacy">
                                                Data privacy
                                            </CountryLink>
                                        </li>
                                        <li>
                                            <CountryLink href="/contact-us">
                                                Contact us
                                            </CountryLink>
                                        </li>
                                    </ul>
                                </HeaderDropdown>
                            </Hdrli>
                        </Ul>
                    </Flex>
                </Container>
            </Hdr>
        </>
    );
};

export default Header;
