import React from "react";
import styled from "styled-components";

import {
  DialogContent,
  DialogFooter,
  ConfirmButon,
  getPrice
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { pizzaRed } from "../Styles/colors";

const OrderStyled = styled.div`
  right: 0px;
  top: 50px;
  position: fixed;
  width: 350px;
  height: calc(100% - 72px);
  z-index: 999;
  background-color: #ffff;
  box-shadow: 1px 1px 8px 0px black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const OrderHeader = styled.div`
  background-color: grey;
  padding: 5px;
  text-align: center;
`;

const OrderContent = styled(DialogContent)`
  padding: 5px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 20px 30px;
  justify-content: space-between;
  cursor:pointer;
`;

const OrderItemDelete = styled.div`
  cursor:pointer;
  color: ${pizzaRed};
  padding-right:5px;

`

const OrderTotal = styled.div`
  font-weight: bold;
`;

const OrderToppings = styled.span`
  font-size:.7rem;

`

const OrderClose = styled.span`
  font-size:.9rem;
  position: absolute;
  right: 10px;
  cursor: pointer;
  &:hover{
    opacity: .5;
  };
`

export function Order({ orders, setOrders, setOpenFood, toggle, setToggle, login, loggedIn }) {
  
  const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const GST = subTotal * 0.05;
  const grossTotal = GST + subTotal;

  const deleteOrder = index => {
    const newOrder = [...orders]
    newOrder.splice(index, 1);
    setOrders(newOrder);
  }

  if(!toggle){
    return null;
  }
  
  return (
    <OrderStyled onClick={()=>{

    }}>
      {orders.length === 0 ? (
        <OrderContent>Your order's looking empty... <OrderClose onClick={()=>{setToggle(false)}}>❌</OrderClose></OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your order are : <OrderClose onClick={()=>{setToggle(false)}}>❌</OrderClose></OrderContainer>{" "}
          {orders.map((order,index) => (
            <OrderContainer key={`${order.name}-${index}`}>
              <OrderItem>
                <div>{order.quantity}</div>
                <div onClick={()=>{setOpenFood({...order, index})}}>{order.name}</div>
                <div>{formatPrice(getPrice(order))}</div>
                <div/>
                <OrderItemDelete onClick={()=>deleteOrder(index)}>🗑️</OrderItemDelete>
              </OrderItem>
          <OrderToppings> {order.toppings && order.toppings.filter(t=>t.checked).map(topping=>topping.name).join(",")}</OrderToppings>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub Total</div>
              <OrderTotal>{formatPrice(subTotal)}</OrderTotal>
            </OrderItem>
            <OrderItem>
              <div />
              <div>GST</div>
              <OrderTotal>{formatPrice(GST)}</OrderTotal>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <OrderTotal>{formatPrice(grossTotal)}</OrderTotal>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButon onClick={()=>{
          if(loggedIn){

          } else {
            login();
          }
        }}>Checkout</ConfirmButon>
      </DialogFooter>
    </OrderStyled>
  );
}
