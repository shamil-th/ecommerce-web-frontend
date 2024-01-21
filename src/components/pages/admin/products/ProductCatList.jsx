import React from 'react';
import ProductCss from './ProductCat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { delProduct, getCategoryProduct } from '../../../../features/admin/productSlice';

const ProductCatList = ({ product, categoryId }) => {

    // const getCategoryProduct = useSelector((state) => state.products.getCategoryProduct);

    let dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(delProduct(id));
        dispatch(getCategoryProduct(categoryId));
    }
    return (
        <div className={ProductCss.card}>
            {product.images.map((image, index) => (
                <img
                    key={index}
                    src={`http://localhost:4000/products/${image}`}
                    alt={`Image ${index + 1}`}
                />
            ))}
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
            <p>{product.specifications}</p>
            <p>{product.discount}</p>
            <p>{product.description}</p>
            <div>
                <button>Edit</button>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>


        </div>
    )
}

export default ProductCatList