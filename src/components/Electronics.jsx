import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import { Button } from '../context/Button';
import { Buttonelec } from '../context/Buttonelec';

export const Electronics = () => {

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
    fetch("http://localhost:8080/electronics").then((r)=>r.json()).then((data)=>{setItems(data);console.log(data)})
  },[])
  // console.log("items",items)
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr"}}>
        
          <div>
          
            {items.map((l)=>(
            <div key={l.id}>
              {/* <h1>{l.id}</h1> */}
              <Link to={`/electronics/${l.id}`}>{l.name}</Link>
             <Buttonelec />
              
            </div>
            
          ))}
        
            
          

          </div>
        
         
      </div>
       
      
    </div>
  )
}
