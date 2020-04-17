import React from "react";

function CloseIcon({ size = 24, ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-x"
            {...props}
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );
}

export default CloseIcon;
