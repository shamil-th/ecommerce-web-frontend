import React from 'react';
import NavCss from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    const home = () => {
        navigate('/admin_Home')
    }
    const category = () => {
        navigate('/category')
    }
    const products = () => {
        navigate('/products')
    }

    return (
        <div className={NavCss.header}>
            <div className='container'>
                <div className={NavCss.nav}>
                <ul className={NavCss.navbar}>
                    <li onClick={home}>Home</li>
                    <li onClick={category}>Category</li>
                    <li onClick={products}>Product</li>
                    <li>Orders</li>
                </ul>
                <div className={NavCss.logout}>
                <button>Cart</button>
                <button onClick={logout}>logout</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar