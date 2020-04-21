import React from "react";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";
import DotsMenu from "../icons/DotsMenu";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";

const Hdr = styled.header`
    background: rgba(255, 255, 255, 0.67);
    border-bottom: 1px solid var(--theme-border);
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 99;
    font-size: 14px;
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
                        <ul className="header-right d-flex align-items-center">
                            <li>
                                <Link href="/checkout">
                                    <a className="btn icon-btn">
                                        <CartIcon size={20} />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <LoginModal />
                            </li>
                            <li className="dropdown">
                                <button className="btn">
                                    <img
                                        width={18}
                                        height={13}
                                        className="mr-1"
                                        src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                                        alt=""
                                    />
                                    <span>INR</span>
                                    <span className="ml-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="header-dropdown">
                                    <ul className="header-dropdown-list">
                                        <li>
                                            <button>
                                                <img
                                                    width={18}
                                                    height={13}
                                                    className="mr-1"
                                                    src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                                                    alt=""
                                                />
                                                <span>INR</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img
                                                    width={18}
                                                    height={13}
                                                    className="mr-1"
                                                    src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                                                    alt=""
                                                />
                                                <span>USD</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img
                                                    width={18}
                                                    height={13}
                                                    className="mr-1"
                                                    src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                                                    alt=""
                                                />
                                                <span>JPY</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown">
                                <button className="btn icon-btn ">
                                    <DotsMenu size={20} />
                                </button>
                                <div className="header-dropdown">
                                    <ul className="header-dropdown-list">
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
                                </div>
                            </li>
                        </ul>
                    </Flex>
                </Container>
            </Hdr>
            <style jsx>{`
                .header-right {
                    list-style: none;
                }
                .header-right li {
                    margin-left: 10px;
                    position: relative;
                }
                .icon-btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 4px;
                    border-radius: 50%;
                }
                .icon-btn:hover,
                .icon-btn:focus {
                    background: #f7f7f7;
                }
                .header-dropdown {
                    display: none;
                    position: absolute;
                    top: 36px;
                    right: 0px;
                    z-index: 10;
                    box-shadow: 0px 11px 12px 8px rgba(0, 0, 0, 0.03);
                    width: max-content;
                    max-width: 230px;
                }
                .header-dropdown-list {
                    background: #fff;
                    list-style: none;
                    border: 1px solid var(--theme-border);
                    padding: 8px 0px;
                    border-radius: 3px;
                    position: realtive;
                }
                .dropdown {
                    position: relative;
                }
                .dropdown:hover .header-dropdown {
                    display: block;
                }
                .header-dropdown li {
                    padding: 8px 20px;
                    font-size: 14px;
                }
                .header-dropdown li a {
                    color: #000 !important;
                    text-decoration: none !important;
                }
            `}</style>
        </>
    );
};

export default Header;
