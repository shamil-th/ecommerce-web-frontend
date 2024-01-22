import React from 'react';
import ProductCss from './ProductCat.module.css'
import { useDispatch } from 'react-redux';
import { delProduct, getCategoryProduct, getProduct } from '../../../../features/admin/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductCatList = ({ product, categoryId }) => {

    // const getCategoryProduct = useSelector((state) => state.products.getCategoryProduct);

   
    const images = product.images?product.images:"";

    let dispatch = useDispatch();
    let navigate = useNavigate();



    const deleteProduct = async (id) => {
        await dispatch(delProduct(id));
        dispatch(getCategoryProduct(categoryId));
    }
   

    const viewDetails = (id) => {
        navigate('/product-details',{state:{id:id}})
        dispatch(getProduct(id));
    }

    return (
        <div className={ProductCss.card}>
            {/* {product.images.map((image, index) => ( */}
                <img
                 
                    src={`http://localhost:4000/products/${images[0]}`}
                    alt='product'
                />
            {/* ))} */}
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
            <p>{product.specifications}</p>
            <p>{product.discount}</p>
            <p>{product.description}</p>
            <div>
                {/* <button onClick={() => setEdit(!edit)}>Edit</button> */}
                <button onClick={() => viewDetails(product._id)}>View Details</button>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>     
        </div>
    )
}

export default ProductCatList