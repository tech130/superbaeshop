import styled from "styled-components";

const MainHeading = styled.div`
    text-align:  ${(props) => props.textAlign || "left"};
    color:  ${(props) => props.color || "#000"};
    margin-bottom: ${(props) => props.mb || "10px"};
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 35px;
        margin-bottom: 5px;
    }
`;


export default MainHeading;