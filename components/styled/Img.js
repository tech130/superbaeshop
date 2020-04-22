import styled from "styled-components";

const Img = styled.img`
    max-width: 100%;
    border-radius: ${(props) => (props.round ? "50%" : props.br || "0px")};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
`;

export default Img;
