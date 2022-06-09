import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../context/Cartcontext';

export const Groceries = () => {
  let [items,setItems] = useState([]);
  let [show,setShow]  = useState(false);
  let {cart,addtocart,removefromcart}= useContext(Cartcontext)
  let handlebutton = ()=>{
    if(show){
      addtocart();
    }
    else{
      removefromcart()
    }
    setShow(!show);
  }

  useEffect(()=>{
    fetch("http://localhost:8080/Grocries").then((r)=>r.json()).then((data)=>{setItems(data)})
  },[])
  return (
    <div>
      <div >
        {items.map((l)=>(
          <div key={l.id}>
            <Link to={`/grocries/${l.id}`}>{l.name}</Link>
            <button onClick={handlebutton}>{show ? "Remove from cart":"Add to cart"}</button>
          </div>
          
        ))}
      </div>
    </div>
  )
}
