import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export const Clothes = () => {
  let [items,setItems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/clothes").then((r)=>r.json()).then((data)=>{setItems(data)})
  },[])
  return (
    <div>
      <div >
        {items.map((l)=>(
          <div key={l.id}>
            <Link to={`/clothes/${l.id}`}>{l.name}</Link>
          </div>
          
        ))}
      </div>
    </div>
  )
}
