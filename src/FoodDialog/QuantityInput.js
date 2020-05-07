import React, { Component } from 'react';   


export function QuantityInput({onChange, value, quantity}){
    return(
         <div>Qutantiy : <input type="number" value={value} onChange={onChange}/></div>
    )
}