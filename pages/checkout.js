import React from "react";
import Layout from "../components/layout/Layout";

const Checkout = () => {
    return (
        <Layout>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
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
                                        <label className="d-flex align-items-center m-0">
                                            <input
                                                type="checkbox"
                                                className="simple-checkbox"
                                            />
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
                                        <label className="d-flex align-items-center m-0">
                                            <input
                                                type="checkbox"
                                                className="simple-checkbox"
                                            />
                                            Redeem wallet points
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button className="btn btn-submit">
                                            Checkout
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

const CartItem = () => {
    return (
        <>
            <div className="cart-item d-flex mb-3">
                <img
                    className="cart-img"
                    src="https://letsgoal2020.com/static/media/front.e7158c6a.png"
                    alt=""
                />
                <div>
                    <h5 className="mb-1">Let's Goal 2021</h5>
                </div>
            </div>
            <style jsx>{`
                .cart-item {
                    border: 1px solid var(--theme-border);
                    padding: 20px;
                }
                .cart-img {
                    width: 150px;
                    margin-right: 15px;
                    height: auto;
                }
            `}</style>
        </>
    );
};

export default Checkout;
