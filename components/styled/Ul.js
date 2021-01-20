import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: ${(props) => props.vertical ? "column" : "row"};
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
`;

export default Ul
