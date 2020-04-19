import React from "react";
import Header from "./Header";
import ProductNav from "./ProductNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="top-bar">
                <div className="container">Organize your Life on the Go!</div>
            </div>
            <div className="app-con">
                <Header />
                <div className="page-con">
                    <ProductNav />
                    {children}
                </div>
                <Footer />
            </div>
            <style jsx>{`
                .top-bar {
                    background: #000;
                    padding: 8px 20px;
                    font-size: 13px;
                    text-align: center;
                    color: #fff;
                }
                .app-con {
                    position: relative;
                }
                .page-con {
                    overflow-x: auto;
                }
            `}</style>
        </>
    );
};

export default Layout;
