import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  border-bottom: 2px solid grey;
  position: fixed;
  padding: 10px;
  width: 100%;
  z-index: 999;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 2px 6px 6px black;
  background-image: url("./img/dominos-logo-241x53.png");
  background-repeat: no-repeat;
  background-size: 100px;
  height: 100%;
  cursor: pointer;
  width: 300px;
`;

const Cart = styled.div`
  width: 50px;
  height: 36px;
  background-image: url(https://img.icons8.com/cotton/64/000000/mine-cart.png);
  background-repeat: no-repeat;
  background-size: 39px;
  background-position: 2px -4px;
  cursor: pointer;
  margin-right: 10px;
`;

const CartBadge = styled.span`
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  width: 22px;
  font-size: 0.8rem;
  text-align: center;
  bottom: 25px;
  right: 55px;
  color: ${pizzaRed};
`;

const RightAction = styled.div`
  display: flex;
`;

const UserStatus = styled.div`
  margin-right: 20px;
  color: #fff;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function NavBar({ setToggle, toggle, orders, login, logout, loggedIn }) {
  return (
    <NavbarStyled>
      <Logo role="img" aria-label="Domino Pizza" />
      <RightAction>
        <UserStatus>
          {loggedIn ? (
            <>
              {loggedIn.displayName}
              <LoginButton onClick={logout}> Logout</LoginButton>
            </>
          ) : (
            <LoginButton onClick={login}>Sign / Signup</LoginButton>
          )}
        </UserStatus>

        <Cart
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <CartBadge>{orders.length}</CartBadge>
        </Cart>
      </RightAction>
    </NavbarStyled>
  );
}
