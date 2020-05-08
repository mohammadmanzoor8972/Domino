import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";
import { useQuantity } from "../Hooks/useQuantity";
import { QuantityInput } from "./QuantityInput";
import { Topings } from "./Toppings";
import { useTopings } from "../Hooks/useTopings";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  margin: 0px auto;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  box-shadow: 4px 4px 15px black;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;


`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding:5px;
  padding-bottom: 10px;
`;

export const DialogFooter = styled.div`
  height: 60px;
  box-shadow: 0px 2px 20px 0px grey;
  display: flex;
  justify-content: center;
`;

export const ConfirmButon = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  &:hover {
    filter: contrast(90%);
  }
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

const DialogClose = styled.div`
  padding: 5px;
  font-size: 20px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  background-color: ${pizzaRed};
  width: 36px;
  text-align: center;
  color: #fff;
  transition-property: filter;
  transition-duration: 0.1s;
  filter: contrast(70%);
  &:hover {
    filter: contrast(100%);
  }
`;

const AddtoCartButton = styled(ConfirmButon)`
  ${({ quantity }) =>
    quantity <= 0 &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}};
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-size: cover;
  background-position: center;
`;

const FoodTitle = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

const priceTopping = .25;
export function getPrice(order) {
  const basePrice = order.toppings ? order.toppings.filter(t=>t.checked).length * priceTopping : 0;
  return order.quantity * ((order.defaultCrustPrice || order.defaultPrice) + basePrice);
}


export function hasToppings(food){
  //debugger; 
  return food.crust && food.crust.length>0
}
export function FoodDialogContainer({
  openFood,
  setOpenFood,
  setOrders,
  orders
}) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useTopings(openFood && openFood.crust)
  const isEditing = openFood.index > -1;

 

  const closeDialog = () => {
    setOpenFood();
  };

  const order = {
    ...openFood,
    quantity: quantity.value,
    total: quantity.value * (openFood.defaultCrustPrice || openFood.defaultPrice),
    toppings: toppings.toppings
  };

  const editOrders = () =>{
    const newOrders = [...orders];
    newOrders[order.index] = order;
    setOrders(newOrders);
    closeDialog();

  }

  const addToOrderHandler =()=>{
    setOrders([...orders, order]);
    closeDialog();
  }

  return (
    <>
      <DialogShadow onClick={closeDialog}></DialogShadow>
      <Dialog>
        <DialogBanner img={`https://images.dominos.co.in/${openFood.image}`} >
          <DialogClose onClick={closeDialog}>x</DialogClose>
          <FoodTitle>{openFood.name}</FoodTitle>
        </DialogBanner>
        <DialogContent>
          <QuantityInput {...quantity} />
         {hasToppings(openFood) && <> <h3>Would you like to add Toppings ?</h3>
          <Topings {...toppings}/>
         </>
          }
        </DialogContent>
        <DialogFooter>
          <AddtoCartButton
            quantity={order.quantity}
            onClick={isEditing ? editOrders :  addToOrderHandler}
          >
           {isEditing ?  "Edit order" : "Add to order"} : {formatPrice(getPrice(order))}
          </AddtoCartButton>
        </DialogFooter>
      </Dialog>
    </>)
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
