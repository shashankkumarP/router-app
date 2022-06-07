import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../context/Auth';

export const Login = () => {
    let navigate = useNavigate();
    let {loginc,login} = useContext(Auth);

    let [form,setForm] = useState({})
    let handlesubmit = (e)=>{
        e.preventDefault();
        // console.log(form)
        login();
        
        

    }
    let handlechange = (e)=>{
        let {name,value} =e.target;
        setForm({...form,[name]:value})
        // console.log(name,value)
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="email" name='email' value={form.name} onChange={handlechange}/>
            <br />
            <input type="password" name='password' value={form.name} onChange={handlechange} placeholder='password' />
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
