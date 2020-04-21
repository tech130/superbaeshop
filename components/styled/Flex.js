import styled from "styled-components";
import Block from "./Block";

const Flex = styled(Block)`
    display: flex;
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
    flex: ${(props) => props.flex || "auto"};
`;

export default Flex;
