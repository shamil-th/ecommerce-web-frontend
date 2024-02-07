import React, { useEffect } from 'react';
import { getAllProducts } from '../../../features/admin/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCss from './Product.module.css';
import { useNavigate } from 'react-router-dom';
import AllProductsList from './AllProductsList';

const AllProduct = () => {

    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (
        <>
            {status === 'succeed' && <div className={ProductCss.cat_products}>
                {products.map((product) => (
                    <AllProductsList product={product} key={product._id} />
                ))}
            </div>}
        </>
    )

}

export default AllProduct