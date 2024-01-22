import React from 'react';
import SignupCustomer from './auth/SignupCustomer';
import LoginCustomer from './auth/LoginCustomer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const Customer = () => {

    const token = localStorage.getItem("token");

    return (
        <div>
            <Routes>
                <Route path='/signup' element={<SignupCustomer />} />
                <Route path='/login' element={<LoginCustomer />} />
                {token&&<Route path='/home' element={<Home/>}/>}
            </Routes>
        </div>
    )
}

export default Customer