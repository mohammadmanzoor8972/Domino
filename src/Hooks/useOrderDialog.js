import {useState } from 'react';   


export function useOrderDialog(){
    const [openOrderDialog, setOpenOrderDialog] = useState();

    function onClick(){
        setOpenOrderDialog(!openOrderDialog);
    }

    return {
        openOrderDialog, setOpenOrderDialog, onClickHandler:onClick
    }

}