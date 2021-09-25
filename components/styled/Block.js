import styled, { css } from "styled-components";

const Block = styled.div`
    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `};
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};
    ${(props) =>
        props.minHeight &&
        css`
            min-height: ${props.minHeight};
        `};
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
    ${(props) =>
        props.border &&
        css`
            border: ${props.border};
        `};
    ${(props) =>
        props.borderRadius &&
        css`
            border-radius: ${props.borderRadius};
        `};
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `};
    ${(props) =>
        props.bgColor &&
        css`
            background-color: ${props.bgColor};
        `};
    ${(props) =>
        props.bgGround &&
        css`
            background: ${props.bgGround};
        `};
`;

export const RelativeBlock = styled(Block)`
    position: relative;
`;

export default Block;
