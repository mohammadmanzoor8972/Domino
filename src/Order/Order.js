import React from 'react';
import styled from 'styled-components';

import { DialogContent, DialogFooter, ConfirmButon } from '../FoodDialog/FoodDialog';

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
`;


export function Order({orders}){

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
                         <OrderItem>{order.name}</OrderItem> 
                          </OrderContainer>
                      ))}    
                </OrderContent>}
                <DialogFooter>
                <ConfirmButon>Checkout</ConfirmButon>
            </DialogFooter>
            
        </OrderStyled>
    )
} 