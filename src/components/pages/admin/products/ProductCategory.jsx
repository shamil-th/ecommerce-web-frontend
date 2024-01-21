import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct } from '../../../../features/admin/productSlice';
import ProductCatList from './ProductCatList';
import AdminHeader from '../../../common/AdminHeader'
import CreateProduct from './CreateProduct';

const ProductCategory = () => {

    const categoryProducts = useSelector((state) => state.products.categoryProducts);
    let dispatch = useDispatch();
    const location = useLocation();
    const id = location.state.num
    console.log("jgj", id);

    useEffect(() => {
        dispatch(getCategoryProduct(id));
        console.log(categoryProducts);
    }, [])

    return (
        <>
            <AdminHeader />
            <div className='container'>
                <button>Add Product</button>
                {categoryProducts.map((product) => (
                    <ProductCatList key={product._id} product={product} categoryId={id} />
                ))}
                <div>
                <CreateProduct categoryId={id}/>
                </div>
            </div>
        </>
    );
};

export default ProductCategory;
