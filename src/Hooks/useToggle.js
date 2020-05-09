import {useState } from 'react';   


export function useToogle(defaultToggle){
    const [toggle, setToggle] = useState(()=>defaultToggle);

    function onClick(){
        setToggle(!toggle);
    }

    return {
        toggle, setToggle, onClick
    }

}