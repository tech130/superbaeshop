import styled from "styled-components";

const Block = styled.div`
    height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.minHeight || "1px"};
    width: ${(props) => props.width || "auto"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
    text-align: ${(props) => props.textAlign || "left"};
    border: ${(props) => props.border || "0px"};
    border-radius: ${(props) => props.borderRadius || "0px"};
    font-size: ${(props) => props.fontSize || "inherit"};
`;

export const RelativeBlock = styled(Block)`
    position: relative;
`;

export default Block;
