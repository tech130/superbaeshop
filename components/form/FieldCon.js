import React from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";

export const FormCol = styled(Col)`
    padding-right: 5px;
    padding-left: 5px;
`;

export const FormGroup = styled(Col)`
    padding-right: 5px;
    padding-left: 5px;
    margin-bottom: 16px;

    .input-messages {
        font-size: 13px;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .input-messages li {
        padding: 0px 5px;
        margin-top: 2px;
    }

    .form-label {
        font-size: 15px;
        font-weight: 400;
    }

    .form-asterix {
        position: relative;
        top: 0;
        color: red;
    }

    .form-err {
        font-size: 14px;
        color: red;
    }

    .font-infoText {
        font-size: 14px;
        color: #777;
    }
`;

const FieldCon = ({
    required = false,
    label = "",
    infoText = "",
    err = "",
    children,
    className,
    ...rest
}) => {
    return (
        <FormGroup className={className} {...rest}>
            {label && (
                <label className="form-label">
                    {label}{" "}
                    {required && <span className="form-asterix">*</span>}
                </label>
            )}
            {children}
            <ul className="input-messages">
                {infoText && <li className="form-info">{infoText}</li>}
                {err && <li className="form-err">{err}</li>}
            </ul>
        </FormGroup>
    );
};

export default FieldCon;
