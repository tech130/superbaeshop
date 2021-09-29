import styled, { css } from "styled-components";

const Txt = styled.span`
    ${(props) => props.fontSize && css`font-size: ${props.fontSize}`};
    ${(props) => props.weight && css`font-weight: ${props.weight}`};
    ${(props) => props.color && css`color: ${props.color}`};
    ${(props) => props.lineHeight && css`line-height: ${props.lineHeight}`};
    ${(props) => props.textDecor && css`text-decoration: ${props.textDecor}`};
    ${(props) => props.padding && css`padding: ${props.padding}`};
    ${(props) => props.margin && css`margin: ${props.margin}`};
    @media (max-width: 768px) {
        font-size:1rem;
    }
`;

export default Txt;
