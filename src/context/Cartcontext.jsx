import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Cartcontext = createContext();
export const CartcontextProvider = ({children})=>{
    let [cart,setCart] = useState(0);
    let [ids,setIds] = useState([])
    let [st,setSt] = useState(false);

    let addtocart = (a)=>{
        setCart(cart+1);
        setSt(true);
    }
    let removefromcart = ()=>{
        if(cart!==0){
            setCart(cart-1);
           
        }
    }



    return <Cartcontext.Provider value={{st,cart,addtocart,removefromcart}}>{children}</Cartcontext.Provider>
}
