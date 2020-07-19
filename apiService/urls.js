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
};

export default urls;
