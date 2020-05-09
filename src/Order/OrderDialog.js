import React, { Component } from 'react';       
import { Dialog, DialogShadow, DialogContent, DialogFooter, AddtoCartButton } from '../FoodDialog/FoodDialog';
import styled from 'styled-components';
import { Title } from '../Styles/title';


export const FoodTitle = styled(Title)`
  top: 100px;
  font-size: 1.2rem;
  padding: 25px 40px;
  text-align:center;

`;

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){

  return openOrderDialog ?  (
    <>
      <DialogShadow onClick={()=>{}}></DialogShadow>
      <Dialog>
        <DialogContent>
            <FoodTitle>Your Order is on the way...</FoodTitle>
            <p>you have been email for confirmation of your order !</p>
        </DialogContent>
        <DialogFooter>
          <AddtoCartButton
            onClick={()=>{
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
           I'am still hungry
          </AddtoCartButton>
        </DialogFooter>
      </Dialog>
    </>) : <div/>
}