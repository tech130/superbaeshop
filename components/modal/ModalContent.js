import React from "react"

const ModalContent = ({ children, className, style = {} }) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}

export default ModalContent
