import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-shadow: none;

    &:focus {
        outline: none;
        border: 1px solid #000;
    }
`;

export const CheckBox = styled.input`
    &[type="checkbox"] {
        display: none;
    }

    &[type="checkbox"] + label {
        display: block;
        position: relative;
        padding-left: 25px;
        margin-bottom: 0px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    &[type="checkbox"] + label:last-child {
        margin-bottom: 0;
    }

    &[type="checkbox"] + label:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 0;
        top: 4px;
        -webkit-transition: all 0.12s, border-color 0.08s;
        transition: all 0.12s, border-color 0.08s;
    }

    &[type="checkbox"]:checked + label:before {
        width: 10px;
        top: 0px;
        left: 5px;
        border-radius: 0;
        opacity: 1;
        border-top-color: transparent;
        border-left-color: transparent;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export default Input;
