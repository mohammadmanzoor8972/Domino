import React, {useState} from "react";
import { NavBar } from "./Navbar/Navbar";
import { Banner} from "./Banner/Banner"
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
