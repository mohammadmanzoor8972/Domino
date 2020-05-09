import React, {useState} from "react";
import { NavBar } from "./Navbar/Navbar";
import { Banner} from "./Banner/Banner"
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useToogle } from "./Hooks/useToggle";
import { useAuthentication } from "./Hooks/useAuthentication";

const Database = window.firebase.database();

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const toggle = useToogle(false);
  const login = useAuthentication();

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <NavBar {...toggle} {...orders} {...login}/>
      <Banner/>
      <FoodDialog {...openFood} {...orders}/>
      <Menu {...openFood} {...toggle}/>
      <Order {...orders} {...openFood} {...toggle} {...login}/>
    </>
  );
}

export default App;
