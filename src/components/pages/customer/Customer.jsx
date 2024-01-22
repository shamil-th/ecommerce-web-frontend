import React from 'react';
import SignupCustomer from './SignupCustomer';
import LoginCustomer from './LoginCustomer';
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