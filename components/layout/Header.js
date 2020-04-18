import React from "react";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";
import DotsMenu from "../icons/DotsMenu";
import LoginModal from "./LoginModal";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="d-flex justify-content-between align-items-center header-height">
                        <Link href="/">
                            <a>
                                <img
                                    className="logo"
                                    src="/images/logo.png"
                                    alt="space and beauty logo"
                                />
                            </a>
                        </Link>
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
                            <li className="dot-menu">
                                <button className="btn icon-btn ">
                                    <DotsMenu size={20} />
                                </button>
                                <ul className="header-dropdown">
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
                                                Cancellations and return policy
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
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <style jsx>{`
                .header {
                    background: #fff;
                    border-bottom: 1px solid var(--theme-border);
                }
                .header-height {
                    min-height: 60px;
                }
                .logo {
                    width: 220px;
                    height: auto;
                }
                .logo img {
                    width: 100%;
                }
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
                    padding: 6px;
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
                    right: 0;
                    background: #fff;
                    width: 230px;
                    box-shadow: 0px 11px 12px 8px rgba(0, 0, 0, 0.03);
                    z-index: 10;
                    list-style: none;
                    border: 1px solid var(--theme-border);
                    padding: 10px 5px 5px 5px;
                }
                .dot-menu:hover .header-dropdown {
                    display: block;
                }
                .header-dropdown li {
                    margin-bottom: 5px;
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
