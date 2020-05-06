import React from "react";
import styled from "styled-components";
import {FoodLabel} from '../Menu/FoodGrid'

const Dialog = styled.div`
  width: 500px;
  height: 2500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  margin : 0px auto;
  max-height: calc(100% - 100px);
  left : calc(50% - 250px);
  box-shadow: 4px 4px 15px black;
  border-radius : 5px;
  overflow: auto;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
${({img})=>`background-image: url(${img});`}
background-size: cover;
    background-position: center;
`;

const FoodTitle = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px; 
`;

export function FoodDialog({ openFood, setOpenFood }) {
  console.log(openFood);
  return openFood ? (
    <>
      <DialogShadow onClick={()=>{
        setOpenFood();
      }}></DialogShadow>
      <Dialog>
        <DialogBanner img={openFood.img}>
    <FoodTitle>{openFood.name}</FoodTitle>

        </DialogBanner>
      </Dialog>
    </>
  ) : null
}
