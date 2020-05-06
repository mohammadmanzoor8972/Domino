import React from 'react';
import styled from "styled-components";
import { foods } from '../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
height: 1000px;
margin: 0px 20px 50px 20px;
`

export function Menu({setOpenFood}){
return <MenuStyled>
    {Object.entries(foods).map(([sectionName, foods]) => 
    <>
        <h2>{sectionName}</h2>
        <FoodGrid>
            {foods.map(food=>(
                <Food img={food.img} onClick={()=>{
                    setOpenFood(food)
                }}>
                    <FoodLabel>
                    {food.name}
                    </FoodLabel>
                </Food>
            ))}
        </FoodGrid>
    </>
    )}
</MenuStyled>
}

