import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background-color: yellow;
    font-family : 'Open Sans', sans-sarif;
  },

  h1,h2,h3,h4 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
        <h1>Hello Domino</h1>
        test
    </div>
        </>
  );
}

export default App;
