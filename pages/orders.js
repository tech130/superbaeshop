import React from "react";
import Layout from "../components/layout/Layout";
import OrderIcon from "../components/icons/OrderIcon";
import CalenderIcon from "../components/icons/CalenderIcon";

const Orders = () => {
    return (
        <Layout>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const OrderItem = () => {
    return (
        <>
            <div className="order-item mb-3">
                <div className="row">
                    <div className="col-md-12 order-id-con d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                            <OrderIcon size={14} strokeWidth={1} />
                            <span className="ml-1">Order ID: #1265868686</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <CalenderIcon size={14} strokeWidth={1} />
                            <span className="ml-1">12 Feb 2020, 1:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center mb-2">
                            <img
                                className="order-img"
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                            <div className="flex-grow-1">
                                <h5 className="order-product-title mb-1">
                                    Let's Goal 2021
                                </h5>
                                <div className="mb-1">
                                    <span className="order-offer-price">
                                        1 x ₹600 = ₹600
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <img
                                className="order-img"
                                src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                                alt=""
                            />
                            <div className="flex-grow-1">
                                <h5 className="order-product-title mb-1">
                                    Let's Goal 2021
                                </h5>
                                <div className="mb-1">
                                    <span className="order-offer-price">
                                        1 x ₹600 = ₹600
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h6>Delivery Details</h6>
                        <p className="mb-1">Dilip Ashokkumar</p>
                        <p className="mb-1">dilip@billiontags.com</p>
                        <p className="mb-1">8610074983, 9715868154</p>
                        <p className="mb-1">
                            123, test street, test city, test country, 123456
                        </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h6>Order Summary</h6>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Sub Total: </span>
                            <span className="ml-2">₹1,010</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Other Charges: </span>
                            <span className="ml-2">₹10</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Coupon Applied: </span>
                            <span className="ml-2">COUPON10</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Coupon Amount: </span>
                            <span className="ml-2">₹100</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span>Payment mode: </span>
                            <span className="ml-2">COD</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Grand Total: </span>
                            <span className="ml-2 font-weight-bold">
                                ₹10,000
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="mt-0 mb-3 order-divider" />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-track mr-2">Track Order</button>
                        <div>Delivery by 26th April 2020</div>
                    </div>
                    <button className="btn btn-track">Need help</button>
                </div>
            </div>
            <style jsx>{`
                .order-item {
                    padding: 10px;
                    border: solid 2px #f5f5f5;
                    border-radius: 10px;
                    font-size: 14px;
                }
                .order-divider {
                    border-top: 1px solid #f5f5f5;
                    height: 0px;
                }
                .order-img {
                    width: 80px;
                    margin-right: 15px;
                    height: auto;
                }
                .order-product-title {
                    font-size: 16px;
                    font-weight: 500;
                }
                .order-offer-price {
                    font-weight: 400;
                    font-size: 16px;
                }
                .btn-track {
                    border: 1px solid #000;
                    padding: 5px 20px;
                }
            `}</style>
        </>
    );
};

export default Orders;
