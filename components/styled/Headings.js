import styled from "styled-components";

export const H1 = styled.h1`
    font-size: ${(props) => props.fontSize || "2.5rem"};
    font-weight: ${(props) => props.weight || 500};
    line-height: 1.2;
    margin-bottom: ${(props) => props.mb || "8px"};
    text-align: ${(props) => props.textAlign || "left"};
`;

export const H2 = styled.h2`
    font-size: ${(props) => props.fontSize || "2rem"};
    font-weight: ${(props) => props.weight || 500};
    line-height: 1.2;
    margin-bottom: ${(props) => props.mb || "8px"};
    text-align: ${(props) => props.textAlign || "left"};
    @media (max-width: 768px) {
        font-size:32px;
    }
`;

export const H3 = styled.h3`
    font-size: ${(props) => props.fontSize || "1.75rem"};
    font-weight: ${(props) => props.weight || 500};
    line-height: 1.2;
    margin-bottom: ${(props) => props.mb || "8px"};
    text-align: ${(props) => props.textAlign || "left"};
`;

export const H4 = styled.h4`
    font-size: ${(props) => props.fontSize || "1.5rem"};
    font-weight: ${(props) => props.weight || 500};
    line-height: 1.2;
    margin-bottom: ${(props) => props.mb || "8px"};
    text-align: ${(props) => props.textAlign || "left"};
    @media (max-width: 768px) {
        font-size:1.25rem;
        margin-bottom: 8px;
    }
`;

export const H5 = styled.h5`
    font-size: ${(props) => props.fontSize || "1.25rem"};
    font-weight: ${(props) => props.weight || 500};
    margin-bottom: ${(props) => props.mb || "8px"};
    line-height: 1.2;
    text-align: ${(props) => props.textAlign || "left"};
`;

export const H6 = styled.h6`
    font-size: ${(props) => props.fontSize || "1rem"};
    font-weight: ${(props) => props.weight || 500};
    margin-bottom: ${(props) => props.mb || "8px"};
    line-height: 1.2;
    text-align: ${(props) => props.textAlign || "left"};
`;
