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
`

const Logo = styled(Title)`
font-size: 20px;
color:white;
text-shadow: 2px 6px 6px black;
`

export function NavBar(){
    return <NavbarStyled>
        <Logo>
        Domino Pizza 🍕
        </Logo>
    </NavbarStyled>
}