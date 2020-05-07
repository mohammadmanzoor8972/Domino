import React, {useState} from "react";
import { NavBar } from "./Navbar/Navbar";
import { Banner} from "./Banner/Banner"
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <Menu setOpenFood={setOpenFood}/>
      <Order/>
    </>
  );
}

export default App;
