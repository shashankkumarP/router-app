import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';

export const Electro = () => {
  let {id} = useParams();
  let [item,setItem] =useState([]);
  useEffect(()=>{
   fetch( `http://localhost:8080/electronics/${id}`).then((r)=>r.json()).then((r)=>{console.log(r);setItem(r)})
  },[id])
  return (
    <div>
      {/* <Outlet> */}
         <h3>{item.id}</h3>
        <h5>{item.name}</h5>
        <h4>{item.price}</h4>
      {/* </Outlet> */}

        
    </div>
  )
}
