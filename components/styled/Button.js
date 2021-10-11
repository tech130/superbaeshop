import styled, { css } from "styled-components";

const Button = styled.button`
    ${(props) =>
        props.inline
            ? css`
                  display: inline;
              `
            : css`
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
              `}

    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: ${(props) => props.bg || "transparent"};
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `};
    ${(props) =>
        props.weight &&
        css`
            font-weight: ${props.weight};
        `};
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `};
    ${(props) =>
        props.lineHeight &&
        css`
            line-height: ${props.lineHeight};
        `};
    border: ${(props) => props.border || "1px solid transparent"};
    border-radius: ${(props) => props.borderRadius || "0px"};
    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
        `};
    ${(props) =>
        props.margin &&
        css`
            margin: ${props.margin};
        `};
    ${(props) =>
        props.textAlign &&
        css`
            text-align: ${props.textAlign};
        `};
    width: ${(props) => (props.block ? "100%" : "auto")};
    font-family: inherit;
    cursor: pointer;

    &:focus {
        outline: none !important;
    }
`;

export const LinkButton = styled.button`
    display: inline;
    margin: ${(props) => props.margin || "0px"};
    color: ${(props) => props.color || "inherit"};
    border: none !important;
    background: transparent;
    padding: 0;
    box-shadow: none !important;
    font-size: ${(props) => props.fontSize || "inherit"};
    font-weight: ${(props) => props.weight || "inherit"};
    color: ${(props) => props.color || "inherit"};
    line-height: ${(props) => props.lineHeight || "inherit"};
    text-decoration: ${(props) => props.textDecor || "none"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};

    &:focus {
        outline: none !important;
    }
`;

export const SubmitBtn = styled(Button)`
    background: #000;
    color: #fff;
    padding: 0 15px;
    text-transform: capitalize;
    font-size: 16px;
    min-height: 40px;
    width: 100%;
    margin-bottom: ${(props) => props.mb || "16px"};
    cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${(props) => props.disabled ? 0.5 : 1};
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
