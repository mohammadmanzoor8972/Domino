import {useState } from 'react';   


export function useTopings(defaultToppings){
  
    const [toppings, setToppings] = useState(defaultToppings);


    function checkTopping(index){
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;

    }

    return {
        toppings, checkTopping, setToppings
    }

}