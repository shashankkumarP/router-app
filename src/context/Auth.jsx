import React, { useContext } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Auth = createContext();

export const AuthProvider = ({children})=>{

   let [loginc,setLoginc] = useState(false);
   let [myp,setMyp] = useState("")
   let navigate = useNavigate();
   let {state,pathname} = useLocation();
   let login = ()=>{
     setLoginc(true);
       if(state){
        navigate(state.from,{replace:true})
        console.log(state,pathname)
       }
       else{
           console.log(myp,"myp")
           navigate(`${myp}`)
           console.log(state,pathname)
          
       }
           
           
       
   }
   let logout  = ()=>{
    setLoginc(false);;
    navigate("/login")
    console.log(state,pathname)
    setMyp(pathname)
    console.log("myp",myp)
   }

    return <Auth.Provider value={{loginc,login,logout}}>{children}</Auth.Provider>
}