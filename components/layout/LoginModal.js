import React, { useState } from "react";
import Modal from "../modal/Modal";
import CloseIcon from "../icons/CloseIcon";

const LoginModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className="btn login-btn">
                Login/Sign up
            </button>
            <Modal
                isOpen={open}
                overlayClick={() => setOpen(false)}
                contentStyle={{ maxWidth: "375px" }}
            >
                <div>
                    <div className="login-header">
                        <button
                            className="btn btn-login-close"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon size={20} />
                        </button>
                        <h2 className="font-weight-bold">Login</h2>
                        <div className="login-header-desc">
                            Get access to your Orders, Wishlist and
                            Recommendations
                        </div>
                    </div>
                    <div className="login-body">
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                placeholder="Enter your mobile number"
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-black">
                                Request Otp
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <style jsx>{`
                .login-btn {
                    border: 1px solid #000;
                    padding: 5px 20px;
                    border-radius: 20px;
                    color: #000;
                    font-size: 14px;
                }
                .login-header {
                    padding: 25px 15px;
                    background: #fff;
                    color: #000;
                    position: relative;
                    border-bottom: solid 4px #f5f5f5;
                }
                .btn-login-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    color: #000;
                }
                .login-header-desc {
                    font-size: 14px;
                    font-weight: 300;
                }
                .login-body {
                    padding: 25px 15px 30px;
                }
                .btn-black {
                    background: #000;
                    color: #fff;
                    width: 100%;
                    padding: 8px 15px;
                    text-transform: uppercase;
                    font-size: 14px;
                    min-height: 45px;
                }
            `}</style>
        </>
    );
};

export default LoginModal;
