const urls = {
    baseURL: "https://spaceandbeauty.billioncart.in/",
    //user
    logout: "auth/logout/",
    myProfile: "users/",
    verifyOtp: "auth/verify-otp/",
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
    myOrders: "orders/",
};

export default urls;
