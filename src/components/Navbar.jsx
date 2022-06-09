import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../context/Auth'
import { Cartcontext } from '../context/Cartcontext'

export const Navbar = () => {
  let {loginc,login,logout} = useContext(Auth);
  let navigate = useNavigate();
  let {cart}= useContext(Cartcontext)
  
  let handleclick= (e)=>{
    if(loginc){
      logout();
      
    }
    else{
      navigate("/login")
    }
  }

  return (
    <div style={{display:"flex"}}>
        <Link to="/"> Home</Link>
        <Link to="/grocries">Growceries</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/electronics">Electronics</Link>
        <p>{cart}</p>

        <button  onClick={handleclick}>{loginc ? "Logout":"Login"}</button>
    </div>
  )
}
