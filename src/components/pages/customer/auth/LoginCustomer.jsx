import React, { useState } from 'react';
import LoginCss from './Login.module.css';
import { useDispatch } from 'react-redux';
import { customerlogin } from '../../../../features/customer/customerSlice';
import { useNavigate } from 'react-router-dom';


const LoginCustomer = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const login = () => {
        const data = {
            email,
            password,
        }
        dispatch(customerlogin(data))
    }

    const signup = () => {
        navigate('/signup')
    }

    return (
        <div className={LoginCss.auth_center}>
            <div className={LoginCss.login_form}>
                <h2>Login</h2>
                <div className={LoginCss.input_fields}>
                    <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                <button onClick={() => login()}>Login</button>
                </div>
                <div>
                    <p>don't have an account <span className={LoginCss.link} onClick={()=>signup()}>Signup</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginCustomer