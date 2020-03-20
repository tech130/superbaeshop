import React from "react";

const CartIcon: React.FC<{ size: number }> = ({ size }) => {
    return (
        <svg viewBox="0 0 485 485" width={size} height={size}>
            <path d="M331.35 116.05v-27.2C331.35 39.858 291.492 0 242.5 0s-88.85 39.858-88.85 88.85v27.2H64.5V485h356V116.05h-89.15zm-147.7-27.2c0-32.45 26.4-58.85 58.85-58.85s58.85 26.4 58.85 58.85v27.2h-117.7v-27.2zM390.5 455h-296V146.05h59.15v35h30v-35h117.7v35h30v-35h59.15V455z" />
        </svg>
    );
};

export default CartIcon;
