import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import { Button } from '../context/Button';

export const Clothes = () => {
  let [items,setItems] = useState([]);
  let [show,setShow]  = useState(false);
  let {cart,addtocart,removefromcart}= useContext(Cartcontext)
  // let handlebutton = (a)=>{
  //   if(show==false){
  //     addtocart();
  //   }
  //   else{
  //     removefromcart()
  //   }
  //   setShow(!show);
  // }

  useEffect(()=>{
    fetch("http://localhost:8080/clothes").then((r)=>r.json()).then((data)=>{setItems(data)})
  },[])
  return (
    <div>
      <div >
        {items.map((l)=>(
          <div key={l.id}>
            
            <Link to={`/clothes/${l.id}`}>{l.name}</Link>
            <Button />
          </div>
          
        ))}
      </div>
    </div>
  )
}
