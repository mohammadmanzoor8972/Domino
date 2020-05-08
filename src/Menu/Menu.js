import React from 'react';
import styled from "styled-components";
import { foods,formatPrice, DominoData } from '../Data/FoodData';
import { FoodGrid, Food, FoodLabel, FoodDescription} from './FoodGrid';

const MenuStyled = styled.div`
height: 1000px;
margin: 0px 400px 50px 20px;
`

export function Menu({setOpenFood}){
return <MenuStyled>
    {DominoData.map(({categoryName, data}) => 
    <>
        
        <h2>{categoryName} </h2>
        <FoodGrid>
            {data.map(food=>(
                <div>
                <Food img={`https://images.dominos.co.in/${food.image}`} onClick={()=>{
                    setOpenFood(food)
                }}>
                    <FoodLabel>
                    <div>{food.name}</div> 
                    <div>{formatPrice(food.defaultCrustPrice)}</div>
                    </FoodLabel>
                </Food>
            <FoodDescription>{food.description}</FoodDescription>
                </div>
            ))}
        </FoodGrid>
    </>
    )}
</MenuStyled>
}

