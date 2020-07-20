import React from "react";
import styled from "styled-components";

const FormStyl = styled.form`
    display: block;
`;

const Form = ({ children, onSubmit = null, as = "form" }) => {
    return (
        <FormStyl
            noValidate
            onSubmit={(e) => {
                e.preventDefault();
                if (typeof onSubmit === "function") {
                    onSubmit();
                }
            }}
            as={as}
        >
            {children}
        </FormStyl>
    );
};

export default Form;
