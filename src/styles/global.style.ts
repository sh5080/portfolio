import { createGlobalStyle, keyframes } from "styled-components";
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }
  .fade-in {
    animation: ${fadeInAnimation} 0.7s ease-in forwards;
  }
`;

export default GlobalStyle;
