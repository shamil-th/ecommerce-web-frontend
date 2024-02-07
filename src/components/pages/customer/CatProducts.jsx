import React, { useEffect } from 'react';
import Navbar from '../../common/customer/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCategoryProduct } from '../../../features/admin/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCss from './Product.module.css';

const CatProducts = () => {

    const categoryProducts = useSelector((state) => state.products.categoryProducts)

    let dispatch = useDispatch();
    let location = useLocation();

    let navigate = useNavigate();
    const categoryId = location.state.id;

    useEffect(() => {
        dispatch(getCategoryProduct(categoryId))
    },[categoryId])

    const productDetails = (id) => {
        navigate('/product-profile',{state: {id:id}})
    }

    console.log(categoryProducts)

    return (
        <><Navbar />
            <div className='container'>
                <div className={ProductCss.cat_products}>{categoryProducts.map((product) => (
                     <div className={ProductCss.product_card} key={product._id} onClick={()=>productDetails(product._id)}><img src={`http://localhost:4000/products/${product.images[0]}`} alt="product" />
                   <h3>{product.name}</h3>
                   <h4>Price: {product.price}</h4>
                   <p>{product.specifications}</p>
                   </div>
                ))}
                    
                </div>
            </div>
        </>
    )
}

export default CatProducts