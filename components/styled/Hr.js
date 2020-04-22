import styled from "styled-components";

const HR = styled.hr`
    margin: ${(props) => props.margin || "10px 0px"};
    border-color: #f5f5f5;
    border-top-width: 1px;
    border-top-style: solid;
    height: 0px;
`;


export default HR