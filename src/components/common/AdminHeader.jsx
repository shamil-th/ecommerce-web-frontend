import React from 'react';
import AdminCss from './AdminHome.module.css'
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/admin");
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
        <div className={AdminCss.header}>
            <div className='container'>
                <div className={AdminCss.nav}>
                <ul className={AdminCss.navbar}>
                    <li onClick={home}>Home</li>
                    <li onClick={category}>Category</li>
                    <li onClick={products}>Product</li>
                    <li>Orders</li>
                </ul>
                <div className={AdminCss.logout}>
                <button onClick={logout}>logout</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader