import styled from "styled-components";
import Block from "./Block";

const Flex = styled(Block)`
    display: flex;
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
    flex-direction: ${(props) => (props.vertical ? "column" : "row")};
    flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "nowrap")};
    position: ${(props) => (props.position ? props.position : "unset")};
    
`;

export const FlexItem = styled.div`
    flex-grow: ${(props) => props.flexGrow || "auto"};
    flex-shrink: ${(props) => props.flexShrink || "auto"};
    margin: ${(props) => props.margin || "0px"};
`;

export default Flex;
