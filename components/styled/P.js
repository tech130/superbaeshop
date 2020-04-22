import styled from "styled-components";

const P = styled.p`
    font-size: ${(props) => props.fontSize || "inherit"};
    font-weight: ${(props) => props.weight || "inherit"};
    color: ${(props) => props.color || "inherit"};
    line-height: ${(props) => props.lineHeight || "inherit"};
    text-decoration: ${(props) => props.textDecor || "none"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px 0px 15px 0px"};
    text-align: ${(props) => props.textAlign || "left"};
`;

export default P;
