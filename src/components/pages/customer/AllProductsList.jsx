import React from 'react';
import ProductCss from './Product.module.css';
import { useNavigate } from 'react-router-dom';

const AllProductsList = ({product}) => {


    let navigate = useNavigate();
    const productDetails = (id) => {
        navigate('/product-profile',{state: {id:id}})
    }

    return (
        <div className={ProductCss.product_card} key={product._id} onClick={() => productDetails(product._id)}>
            <img src={`http://localhost:4000/products/${product.images[0]}`} alt="product" />
            <h3>{product.name}</h3>
            <h4>Price: {product.price}</h4>
           { product.discount>0 && <h4>Discount: {product.discount}%</h4>}
        </div>
    )
}

export default AllProductsList