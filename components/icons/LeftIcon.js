import React from "react";

const LeftIcon = ({ size = 24 }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
    );
};

export default LeftIcon;
