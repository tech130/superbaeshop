import React from "react";
import Layout from "../components/layout/Layout";

const Profile = () => {
    return (
        <Layout>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center profile-top">
                                <img
                                    className="profile-img"
                                    src="/images/dilip.jpg"
                                    alt=""
                                />
                                <div className="ml-3">
                                    <h5>Dilip Ashokkumar</h5>
                                    <button className="btn btn-edit-profile">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className="row profile-details">
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">Name</div>
                                    <div className="font-weight-bold">
                                        Dilip Ashokkumar
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">Email</div>
                                    <div className="font-weight-bold">
                                        dilip@billiontags.com
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Phone Number
                                    </div>
                                    <div className="font-weight-bold">
                                        +918610074983
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Alternate Phone Number
                                    </div>
                                    <div className="font-weight-bold">
                                        +919715868154
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Street Address
                                    </div>
                                    <div className="font-weight-bold">
                                        123 street
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Locatity
                                    </div>
                                    <div className="font-weight-bold">
                                        Test Locality
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">City</div>
                                    <div className="font-weight-bold">
                                        Chennai
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">State</div>
                                    <div className="font-weight-bold">
                                        Tamil nadu
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Country
                                    </div>
                                    <div className="font-weight-bold">
                                        India
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="profile-heading">
                                        Pincode
                                    </div>
                                    <div className="font-weight-bold">
                                        625001
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wallet-header mb-3">
                                <h5>My Wallet</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        Available Points - <b>50</b>
                                    </span>
                                    <span>
                                        Total Points - <b>150</b>
                                    </span>
                                </div>
                            </div>
                            <h6>Wallet History</h6>
                            <div className="wallet-history d-flex justify-content-between align-items-center mb-3">
                                <div>Order ID - #123456789</div>
                                <div>
                                    Points Rewarded - <b>10</b>
                                </div>
                            </div>
                            <div className="wallet-history d-flex justify-content-between align-items-center mb-3">
                                <div>Order ID - #123456789</div>
                                <div>
                                    Points Rewarded - <b>10</b>
                                </div>
                            </div>
                            <div className="wallet-history d-flex justify-content-between align-items-center mb-3">
                                <div>Order ID - #123456789</div>
                                <div>
                                    Points Rewarded - <b>10</b>
                                </div>
                            </div>
                            <div className="wallet-history d-flex justify-content-between align-items-center mb-3">
                                <div>Order ID - #123456789</div>
                                <div>
                                    Points Rewarded - <b>10</b>
                                </div>
                            </div>
                            <div className="wallet-history d-flex justify-content-between align-items-center mb-3">
                                <div>Order ID - #123456789</div>
                                <div>
                                    Points Rewarded - <b>10</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .profile-img {
                    height: 80px;
                    width: 80px;
                    border-radius: 50%;
                }
                .btn-edit-profile {
                    font-size: 13px;
                    padding: 3px 20px;
                    border-radius: 20px;
                    border: 1px solid #000;
                }
                .profile-top {
                    padding-bottom: 15px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid var(--theme-border);
                }
                .profile-heading {
                    font-weight: 400;
                    font-size: 14px;
                }
                .wallet-header {
                    padding: 10px;
                    border: solid 2px #f5f5f5;
                    border-radius: 10px;
                    font-size: 16px;
                }
                .wallet-history {
                    padding: 10px;
                    border: solid 2px #f5f5f5;
                    border-radius: 10px;
                    font-size: 14px;
                }
            `}</style>
        </Layout>
    );
};

export default Profile;
