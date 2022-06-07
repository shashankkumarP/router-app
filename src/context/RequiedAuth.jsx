 import React from 'react'
// import { Children } from 'react';
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Auth } from './Auth'
import { Navigate } from 'react-router-dom';
 
 export const RequiedAuth = ({children}) => {
     let navigate = useNavigate();
   let {loginc} = useContext(Auth);
   let {pathname} = useLocation();
   if(loginc){
       return children;
   }
   else{
       return <Navigate  to="/login" state={{from:pathname}} replace />
   }
 }
 