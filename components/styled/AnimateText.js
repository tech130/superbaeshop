import styled,{keyframes} from "styled-components";

const rainbow_animation = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;
const AnimateText = styled.span`
    background: linear-gradient(90deg,#60bbf1,#c6e1f1,#f57e93,#b4a8ff,#c8f1ff,#eda5b2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbow_animation} 4s ease-in-out infinite;
    background-size: 300% 100%;

`;


export default AnimateText;