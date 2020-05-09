import React, { Component } from 'react';  
import styled from 'styled-components';


const TopingGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
`;


const TopingCheckbox = styled.input`
margin-right:10px;
cursor: pointer;
`;

const TopingCheckboxLabel = styled.label`
cursor: pointer;
`;


export function Topings({toppings, checkTopping}){

    return(
    <TopingGrid>

        {toppings && toppings.map((topping, i)=>(<TopingCheckboxLabel key={topping+"_"+i}>
            <TopingCheckbox type="checkbox" checked={topping.checked} onClick={()=>{
                checkTopping(i);
            }}/>
            {topping.name}
        </TopingCheckboxLabel>))}
    </TopingGrid>
    )

}