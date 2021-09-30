import styled, { css } from "styled-components";

const HR = styled.hr`
    margin: ${(props) => props.margin || "10px 0px"};
    border-top: 1px solid #c7c7c7;
    height: 0px !important;
    color: #606060;
    opacity: 1;
    ${(props) =>
        props.dataTitle &&
        css`
            margin: 1.9em 0;
            text-align: center;

            &::before {
                content: "${props.dataTitle}";
                background: #fafafa;
                position: relative;
                bottom: 14px;
                font-size: 14px;
                padding: 0.92857143em;
            }
        `}
`;

export const InterSec = styled.div`
    background-image: url("/images/intersection.jpg");
    height: 50px;
    background-repeat: repeat;
`

export default HR;
