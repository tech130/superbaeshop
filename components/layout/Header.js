import React from "react";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";
import DotsMenu from "../icons/DotsMenu";
import LoginModalBtn from "./LoginModalBtn";
import Logo from "./Logo";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import HeaderDropdown from "./HeaderDropdown";
import { IconButton } from "../styled/Button";
import CountryList from "./CountryList";

const Hdr = styled.header`
    background: rgba(255, 255, 255, 0.67);
    border-bottom: 1px solid #eaeaea;
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
`;

const Hdrli = styled.li`
    margin-left: 10px;
`;

const Header = ({ isLoggedIn = false }) => {
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
                        <Logo />
                        <Ul alignItems="center">
                            <Hdrli>
                                <Link href="/checkout">
                                    <IconButton as="a">
                                        <CartIcon size={20} />
                                    </IconButton>
                                </Link>
                            </Hdrli>
                            <Hdrli>
                                <LoginModalBtn />
                            </Hdrli>
                            <Hdrli>
                                <CountryList />
                            </Hdrli>
                            <Hdrli>
                                <HeaderDropdown
                                    Btn={({ onClick }) => (
                                        <IconButton onClick={onClick}>
                                            <DotsMenu size={20} />
                                        </IconButton>
                                    )}
                                >
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Privacy policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Terms and conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    Cancellations and return
                                                    policy
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Data privacy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Contact us</a>
                                            </Link>
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
