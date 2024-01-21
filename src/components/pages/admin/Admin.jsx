import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome';
import NotFound from '../../common/NotFound'
import Category from './Category';
import Products from './Products';
import ProductCategory from './products/ProductCategory';

const Admin = () => {

    const token = localStorage.getItem("token");

    return (
        <div>
            <Routes>
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='/admin_home' element={token ? <AdminHome /> : <NotFound />} />
                <Route path='/category' element={<Category />} />
                <Route path='/products' element={<Products />} />
                <Route path='/productlist' element={<ProductCategory />} />
            </Routes>

        </div>
    )
}

export default Admin