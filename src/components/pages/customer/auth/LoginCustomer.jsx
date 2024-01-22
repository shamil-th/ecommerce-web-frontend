import React, { useState } from 'react';
import LoginCss from './Login.module.css';
import { useDispatch } from 'react-redux';
import { customerlogin } from '../../../../features/customer/customerSlice';


const LoginCustomer = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let dispatch = useDispatch();

    const login = () => {
        const data = {
            email,
            password,
        }
        dispatch(customerlogin(data))

    }

  return (
    <div>
        <div className={LoginCss.input_field}>
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>login()}>Login</button>
        </div>
    </div>
  )
}

export default LoginCustomer