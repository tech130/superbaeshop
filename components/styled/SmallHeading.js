import styled from "styled-components";

const SmallHeading = styled.div`
    text-align:  ${(props) => props.textAlign || "left"};
    color:  ${(props) => props.color || "#000"};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.1;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 22px;
    }
`;


export default SmallHeading;