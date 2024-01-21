import React, { useState } from 'react';
import AdminCss from './AdminLogin.module.css';
import { adminLogin } from '../../../features/admin/adminSlice';
import { useDispatch } from 'react-redux';

const AdminLogin = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();

  const login = () => {
    const data = { email, password};
    dispatch(adminLogin(data));
    console.log(data)
  }

  return (
    <div className={AdminCss.Login_page}>
      <form className={AdminCss.Login_form}>
        <h3>Login</h3>
        <input type="text" value={email} placeholder='enter email..' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='enter password..'  onChange={(e) => setPassword(e.target.value)}/>
        <button type='button'  onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin