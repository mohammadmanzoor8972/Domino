import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family : 'Open Sans', sans-sarif;
    margin:0;
  },
  h1,h2,h3,h4 {
    font-family: 'Righteous', cursive;
  }
`;
