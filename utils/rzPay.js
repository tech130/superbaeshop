export default function rZPay(order, handleResponse) {
    var options = {
        key: order.api_key,
        amount: order.amount_in_paisa,
        name: "Space & Beauty",
        description: order.tracking_client_id,
        order_id: order.transaction_id,
        // currency: "USD",
        image: "https://spaceandbeauty.com/images/logo-small.png",
        handler: (res) => {
            handleResponse(res);
        },
        prefill: {
            name: order.name,
            email: order.email,
            contact: `+${order.dial_code} ${order.phone}`,
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
