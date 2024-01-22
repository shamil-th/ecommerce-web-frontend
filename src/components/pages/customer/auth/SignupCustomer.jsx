import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { customerSignup } from '../../../../features/customer/customerSlice';

const SignupCustomer = () => {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  // let navigate = useNavigate();
  let dispatch = useDispatch();

  const register = () => {
    const data = {
      firstName,
      lastName,
      phone,
      email,
      password
    }
    dispatch(customerSignup(data));
  }

  return (
    <div>
      <div >
        <input type="text" placeholder='first name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder='last name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <input type="text" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div><button onClick={register}>Sign up</button></div>
      </div>
    </div>
  )
}

export default SignupCustomer