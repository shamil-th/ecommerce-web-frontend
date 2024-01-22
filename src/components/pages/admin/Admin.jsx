import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome';
import NotFound from '../../common/NotFound'
import Category from './Category';
import Products from './Products';
import ProductCategory from './products/ProductCategory';
import ViewProduct from './products/ViewProduct';

const Admin = () => {

    const token = localStorage.getItem("token");

    return (
        <div>
            <Routes>
               
                <Route path='/admin' element={<AdminLogin />} />
                {/* <Route path='/admin_home' element={token ? <AdminHome /> : <NotFound />} /> */}
                {token?<><Route path='/admin_home' element={<AdminHome/>}  />
                <Route path='/category' element={<Category />} />
                <Route path='/products' element={<Products />} />
                <Route path='/productlist/:id' element={<ProductCategory />} />
                <Route path='/product-details' element={<ViewProduct/>}/>
                </>:
                 <Route path='/NotFound' element={<NotFound />}/>}
            </Routes>

        </div>
    )
}

export default Admin