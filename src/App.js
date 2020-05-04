import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./Navbar/Navbar";
import { Banner} from "./Banner/Banner"
import { Menu } from "./Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family : 'Open Sans', sans-sarif;
    margin:0;
  },
  h1,h2,h3,h4 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner/>
      <Menu/>
      <div>Hello </div>

    </>
  );
}

export default App;
