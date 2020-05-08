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

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner/>
      <FoodDialog {...openFood} {...orders}/>
      <Menu {...openFood}/>
      <Order {...orders} {...openFood}/>
    </>
  );
}

export default App;
