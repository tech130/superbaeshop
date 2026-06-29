const urls = {
    baseURL:
        process.env.NEXT_PUBLIC_BASE_URL || "http://api.spaceandbeauty.com/",
    //users
    logout: "auth/logout/",
    myProfile: "users/",
    verifyOtp: "auth/verify-otp/",
    wallet: "users/my-points/",
    //master
    master: "master-values/",
    categories: (id) => `master-values/categories/${id}/`,
    //product
    headerProducts: "products/home_products/",
    products: "products/",
    productDetail: (id) => `products/${id}/`,
    similarProducts: (id) => `products/${id}/similar_products/`,
    productFilter: "products/category_filter/",
    //cart
    listCart: "cart/list_cart/",
    updateCart: "cart/update_create/",
    //address
    address: "users/address/",
    //checkout
    validateOffer: "offers/validate/",
    checkout: "orders/checkout/",
    cod: (id) => `orders/cod-confirm/${id}/`,
    paymentSuccess: "orders/payment-success/",
    myOrders: "orders/",
    trackOrder: (id) => `orders/order-tracking/${id}/`,
    // others
    newsletter: "others-api/newsletter/",
    terms: "others-api/html-content/1/",
    //Calculate Delivery
    deliveryCharge: (countryId, activeAddress) => activeAddress === '' || activeAddress === undefined ?
        `orders/calculate-delivery/?country=${countryId}` :
        `orders/calculate-delivery/?country=${countryId}&delivery_postcode=${activeAddress}`
};

export default urls;
