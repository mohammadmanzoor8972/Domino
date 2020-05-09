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


const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();
/*
auth.signInWithPopup(provider);
auth.onAuthStateChanged((user)=>{
console.log(user);
}, (error)=>{
  console.log(error);
});*/

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const toggle = useToogle(false);

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <NavBar {...toggle} {...orders}/>
      <Banner/>
      <FoodDialog {...openFood} {...orders}/>
      <Menu {...openFood} {...toggle}/>
      <Order {...orders} {...openFood} {...toggle}/>
    </>
  );
}

export default App;
