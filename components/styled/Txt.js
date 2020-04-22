import styled from "styled-components";

export const Txt = styled.span`
    font-size: ${(props) => props.fontSize || 'inherit'};
    font-weight: ${(props) => props.weight || 'inherit'};
    color: ${(props) => props.color || 'inherit'};
    line-height: ${(props) => props.lineHeight || 'inherit'};
    text-decoration: ${(props) => props.textDecor || 'none'};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
`;

export default Txt
