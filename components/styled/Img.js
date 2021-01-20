import styled, { css } from "styled-components";

const Img = styled.img`
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
        `}
    max-width: 100%;
    border-radius: ${(props) => (props.round ? "50%" : props.br || "0px")};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
`;

export default Img;
