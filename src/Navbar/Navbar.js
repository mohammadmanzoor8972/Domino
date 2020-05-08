import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
background-color: ${pizzaRed};
border-bottom: 2px solid grey;
position: fixed;
padding:10px;
width:100%;
z-index:999;
height:50px;
display: flex;
flex-direction : column;

`

const Logo = styled(Title)`
font-size: 20px;
color:white;
text-shadow: 2px 6px 6px black;
background-image : url('./img/dominos-logo-241x53.png');
background-repeat: no-repeat;
background-size: 200px;
height:100%;
cursor: pointer;
width:300px;
`


export function NavBar(){
    return <NavbarStyled>
        <Logo  role="img" aria-label="Domino Pizza">
        </Logo>
        
    </NavbarStyled>
}