
import React, { useState } from 'react';
import styled from "styled-components";


const DisplayName = styled.span`
  cursor: pointer;
  position: absolute;
  background-color:grey;
  border: 1px solid grey;
  padding: 2px;
  right:50px;
  top: 50px;
  z-index:999;
`;






  export function withToolTip(Component, props) {
    return function WithToolTip() {
      const [isShow, setIsShow] = React.useState(false);
     
      const mouseOver = () => setIsShow(true);
      const mouseOut = () => setIsShow(false);
        return (
          <span
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            style={{ cursor: "pointer" }}
          >
            <Component {...props}/>
            {isShow && <DisplayName> {props.text}</DisplayName>}
          </span>
        );
    };
  }
  