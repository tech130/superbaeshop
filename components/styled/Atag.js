import styled from "styled-components";

const Atag = styled.a`
    display: inline;
    margin: ${(props) => props.margin || "0px"};
    color: ${(props) => props.color || "inherit"};
    cursor: pointer;
    font-size: ${(props) => props.fontSize || 'inherit'};
    font-weight: ${(props) => props.weight || 'inherit'};
    line-height: ${(props) => props.lineHeight || 'inherit'};
    text-decoration: ${(props) => props.textDecor || 'none'};
`;

export default Atag;
