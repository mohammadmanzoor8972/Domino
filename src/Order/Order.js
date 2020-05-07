import React from 'react';
import styled from 'styled-components';

import { DialogContent, DialogFooter, ConfirmButon, getPrice } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';

const OrderStyled = styled.div`
    right: 0px;
    top: 50px;
    position: fixed;
    width: 300px;
    height: calc(100% - 50px);
    z-index: 999;
    background-color: #ffff;
    box-shadow: 1px 1px 8px 0px black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const OrderHeader = styled.div`
    background-color:grey;
    padding:5px;
    text-align:center;
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
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const OrderTotal = styled.div`
    font-weight: bold;
`


export function Order({orders}){
    const subTotal = orders.reduce((total, order)=>{
       return  total + getPrice(order);
    },0)

    const GST = subTotal * .05;
    const grossTotal = GST+subTotal;
    return(
        <OrderStyled>
                {orders.length === 0 ? 
                <OrderContent>
                    Your order's looking empty...
                </OrderContent> : 
                <OrderContent>
                  <OrderContainer>Your order are : </OrderContainer>{ " "}
                      {orders.map(order=> (
                      <OrderContainer>
                         <OrderItem>
                      <div>{order.quantity}</div>
                          <div>{order.name}</div>
                         <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem> 
                          </OrderContainer>
                      ))}    
                      <OrderContainer>
                      <OrderItem>
                          <div/> 
                           <div>
                            Sub Total
                          </div>
                          <OrderTotal>
                          {formatPrice(subTotal)}
                          </OrderTotal>
                          </OrderItem>
                          <OrderItem>
                          <div/> 
                           <div>
                            GST
                          </div>
                          <OrderTotal>
                          {formatPrice(GST)}
                          </OrderTotal>
                          </OrderItem>
                          <OrderItem>
                          <div/> 
                           <div>
                            Total
                          </div>
                          <OrderTotal>
                          {formatPrice(grossTotal)}
                          </OrderTotal>
                          </OrderItem>
                      </OrderContainer>
                </OrderContent>}
                <DialogFooter>
                      <ConfirmButon>Checkout</ConfirmButon>
            </DialogFooter>
            
        </OrderStyled>
    )
} 