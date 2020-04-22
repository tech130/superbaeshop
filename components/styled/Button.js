import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
    font-family: inherit;
    line-height: inherit;

    &:focus {
        outline: none !important;
    }
`;

export const CartButton = styled(Button)`
    padding: 8px 30px;
    border-radius: 30px;
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    box-shadow: rgba(22, 53, 76, 0.18) 0px 7px 25px 0px;
`;

export const IconButton = styled(Button)`
    padding: 4px;
    border-radius: 50%;

    &:hover,
    &:focus {
        background: #f7f7f7;
    }
`;

export default Button;
