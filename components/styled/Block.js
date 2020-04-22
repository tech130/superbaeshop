import styled from "styled-components";

const Block = styled.div`
    height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.minHeight || "1px"};
    width: ${(props) => props.width || "auto"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
    text-align: ${(props) => props.textAlign || "left"};
`;

export default Block;
