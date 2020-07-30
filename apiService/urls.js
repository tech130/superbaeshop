const urls = {
    baseURL: "https://spaceandbeauty.billioncart.in/",
    //user
    logout: "auth/logout/",
    myProfile: "users/",
    verifyOtp: "auth/verify-otp/",
    wallet: "users/my-points/",
    //master
    master: "master-values/",
    //product
    products: "products/",
    productDetail: (id) => `products/${id}/`,
    //cart
    cart: "cart/",
    //address
    address: "users/address/",
    //checkout
    validateOffer: "offers/validate/",
    checkout: "orders/checkout/",
    cod: (id) => `orders/cod-confirm/${id}/`,
    paymentSuccess: "orders/payment-success/",
    myOrders: "orders/",
};

export default urls;
