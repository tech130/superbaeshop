import styled from "styled-components";

const Block = styled.div`
    height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.minHeight || "1px"};
    width: ${(props) => props.width || "100%"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
`;

export default Block;
