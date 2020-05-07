import {useState } from 'react';   


export function useQuantity(defaultQuantity){
    const [value, setValues] = useState(()=>defaultQuantity && 1);

    function onChange(e){
        setValues(+e.target.value);
    }

    return {
        value, setValues, onChange
    }

}