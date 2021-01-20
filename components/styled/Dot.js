import styled from "styled-components";

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 15px;
    background-color: ${(props) => props.bg || "#F8D9C7"};
`;

export default Dot;