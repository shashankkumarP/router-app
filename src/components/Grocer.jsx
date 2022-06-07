import React from 'react'
import { useEffect,useRef ,useState} from 'react';
import { useParams } from 'react-router-dom'

export const Grocer = () => {
  let {id} = useParams();
  let [item,setItem] =useState([]);
  useEffect(()=>{
    fetch(`http://localhost:8080/Grocries/${id}`).then((r)=>r.json()).then((r)=>{setItem(r)})
  },[id])
  return (
    <div>
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
      <img src={item.img} style={{width:"250px",height:"250px"}}/>
    </div>
  )
}
