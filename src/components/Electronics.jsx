import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export const Electronics = () => {

  let [items,setItems] = useState([]);

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
              
            </div>
            
          ))}
        
            
          

          </div>
        
         
      </div>
       
      
    </div>
  )
}
