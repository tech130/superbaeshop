import React from "react";
import Layout from "../components/layout/Layout";
import ThrashIcon from "../components/icons/ThrashIcon";

const Checkout = () => {
    return (
        <Layout>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <CheckoutSummary />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className="col-lg-5">
                            <h4 className="font-weight-bold mb-3">
                                Checkout Details
                            </h4>
                            <div className="row form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Id"
                                        />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>+91</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="checkbox" id="sameAs" />
                                        <label htmlFor="sameAs">
                                            Same as registered number
                                        </label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>+91</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Alternate Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Street address"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Locality"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="State"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Country"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Pin Code"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon Code"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="checkbox"
                                            id="redeemWallet"
                                        />
                                        <label htmlFor="redeemWallet">
                                            Redeem wallet points
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button className="btn btn-submit">
                                            PAY NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const CheckoutSummary = () => {
    return (
        <>
            <div className="checkout-summary mb-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Cart Total</h6>
                    <div>₹1536</div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Delivery Charge</h6>
                    <div>+ ₹0</div>
                </div>
                <hr className="checkout-summary-divider mb-1 mt-2" />
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="font-weight-bold m-0">Grand Total</h6>
                    <div className="font-weight-bold">₹1536</div>
                </div>
            </div>
            <style jsx>{`
                .checkout-summary {
                    padding: 10px;
                    border: 2px solid #f5f5f5;
                    border-radius: 10px;
                }
                .checkout-summary-divider {
                    border-top: 1px solid #f5f5f5;
                    height: 0px;
                }
            `}</style>
        </>
    );
};

const CartItem = () => {
    return (
        <>
            <div className="cart-item d-flex align-items-stretch mb-3">
                <img
                    className="cart-img"
                    src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                    alt=""
                />
                <div className="flex-grow-1">
                    <h5 className="cart-product-title mb-1">Let's Goal 2021</h5>
                    <div className="mb-2">
                        <span className="cart-original-price mr-1">₹500 </span>
                        <span className="cart-offer-price"> ₹600 </span>
                        <span> (40% off)</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn cart-qty-btn">-</button>
                        <div className="cart-quantity">1</div>
                        <button className="btn cart-qty-btn">+</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center pl-2 pr-2">
                    <button className="btn">
                        <ThrashIcon size={18} strokeWidth={1} />
                    </button>
                </div>
            </div>
            <style jsx>{`
                .cart-item {
                    padding: 10px;
                    border: solid 2px #f5f5f5;
                    border-radius: 10px;
                }
                .cart-img {
                    width: 100px;
                    margin-right: 15px;
                    height: auto;
                }
                .cart-product-title {
                    font-size: 16px;
                    font-weight: 500;
                }
                .cart-offer-price {
                    font-weight: 600;
                    font-size: 16px;
                }
                .cart-original-price {
                    font-weight: 300;
                    text-decoration: line-through;
                    font-size: 14px;
                }
                .cart-qty-btn {
                    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    text-align: center;
                    border: 1px solid #cecece;
                    font-weight: 600;
                    line-height: 0;
                }
                .cart-quantity {
                    height: 25px;
                    width: 40px;
                    text-align: center;
                    border: 1px solid #cecece;
                    font-weight: 500;
                    margin: 0px 10px;
                    font-size: 14px;
                }
            `}</style>
        </>
    );
};

export default Checkout;
