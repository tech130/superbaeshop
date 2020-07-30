export default function rZPay(order, handleResponse) {
    var options = {
        key: order.api_key,
        amount: order.amount_in_paisa,
        name: "Let's goal 2020",
        description: `#${order.order_id || ""}`,
        order_id: order.order_id,
        // currency: "USD",
        image: "https://spaceandbeauty.com/images/logo-small.png",
        handler: (res) => {
            handleResponse(res);
        },
        prefill: {
            name: order.name,
            email: order.email,
            contact: order.phone,
        },
        theme: {
            color: "#faebe4",
        },
    };
    if (window && window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
}
