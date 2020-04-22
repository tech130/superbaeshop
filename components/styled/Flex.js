import styled from "styled-components";
import Block from "./Block";

const Flex = styled(Block)`
    display: flex;
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
    flex-direction: ${(props) => (props.vertical ? "column" : "row")};
    flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

export default Flex;
