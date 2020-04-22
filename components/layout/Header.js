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
import Button from "../styled/Button";
import CountryList from "./CountryList";
import Txt from "../styled/Txt";
import P from "../styled/P";

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
    margin-left: 20px;
    display: flex;
    align-items: center;
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
                        <Ul alignItems="stretch">
                            <Hdrli>
                                <Link href="/checkout">
                                    <Button as="a">
                                        <CartIcon size={20} />
                                    </Button>
                                </Link>
                            </Hdrli>
                            <Hdrli>
                                <HeaderDropdown
                                    Btn={({ onClick }) => (
                                        <Button onClick={onClick}>
                                            <div>
                                                <P
                                                    lineHeight={1}
                                                    fontSize="12px"
                                                    weight={400}
                                                    margin="0px"
                                                >
                                                    Hello, Sign In
                                                </P>
                                                <Txt
                                                    lineHeight={1}
                                                    fontSize="14px"
                                                    weight={600}
                                                >
                                                    Your Account
                                                </Txt>
                                            </div>
                                        </Button>
                                    )}
                                >
                                    <ul>
                                        <li>
                                            <LoginModalBtn />
                                        </li>
                                    </ul>
                                </HeaderDropdown>
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
