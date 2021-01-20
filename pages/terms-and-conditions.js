import React from "react";
import Link from "next/link";
import TermsContent from "../components/static-content/TermsContent";

export default function Terms() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="d-flex justify-content-center align-items-center header-height">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/logo.png" />
                            </a>
                        </Link>
                    </nav>
                </div>
            </header>
            <div className="product-bg text-center policy-header d-flex align-items-center justify-content-center">
                <h1>Terms and Conditions</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-10">
                        <TermsContent />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .header {
                    background: #fff;
                    border-bottom: 1px solid var(--theme-border);
                }
                .header-height {
                    min-height: 60px;
                }
                .logo {
                    width: 260px;
                }
                .product-bg {
                    background: #faebe4;
                    color: #fff;
                }
                .policy-header {
                    height: 250px;
                    margin-bottom: 45px;
                }
                .policy-header h1 {
                    font-size: 56px;
                    font-weight: 700;
                }
            `}</style>
        </>
    );
}
