import React from "react";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="d-flex justify-content-between align-items-center header-height">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/logo.png" />
                            </a>
                        </Link>
                        {/* <ul className="nav-list">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul> */}
                        <a href="#">
                            <CartIcon size={22} />
                        </a>
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
                    flex: 0 0 220px;
                }
                .logo img {
                    width: 100%;
                }
                .nav-list {
                    flex: 1;
                    list-style: none;
                    display: flex;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    justify-content: space-evenly;
                }
                .nav-list li a {
                    color: #000;
                    padding: 0px 20px;
                    font-size: 16px;
                    font-weight: 600;
                }
                .nav-list li a:hover {
                    color: #000;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};

export default Header;
