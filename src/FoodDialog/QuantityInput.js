import React, { Component } from 'react';   


export function QuantityInput({onChange, value, quantity, setQuantity}){
    return(
         <div>Qutantiy : <input type="number" value={value} onChange={onChange}/></div>
    )
}