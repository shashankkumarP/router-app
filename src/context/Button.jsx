import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Cartcontext } from './Cartcontext';

export const Button =()=>{
    let [btn,setBtn] = useState(false);
    let {addtocart,removefromcart,cart} = useContext(Cartcontext)
    let handleclick = (e)=>{
        if(btn){
            removefromcart();
            setBtn(false);

        }
        else{
            addtocart();
            setBtn(true);
        }
    }

    

    return(
        <div>
            <button onClick={handleclick}>{btn ? "Remove from cart":"Add to cart"}</button>
        </div>
    )

}