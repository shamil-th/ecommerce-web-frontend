import React, { useState } from 'react';
import ProductCss from './ProductCat.module.css'
import { useDispatch } from 'react-redux';
import { delProduct, getCategoryProduct, getProduct, updateProduct } from '../../../../features/admin/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductCatList = ({ product, categoryId }) => {

    // const getCategoryProduct = useSelector((state) => state.products.getCategoryProduct);
    const [edit, setEdit] = useState(false);

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [discount, setDiscount] = useState(product.discount?product.discount:"")
    const [spec, setSpec] = useState(product.specifications?product.specifications:"");
    const [desc, setDesc] = useState(product.description?product.description:"");
    const [images, setImages] = useState(product.images?product.images:"");

    let dispatch = useDispatch();
    let navigate = useNavigate();


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    }


    const deleteProduct = async (id) => {
        await dispatch(delProduct(id));
        dispatch(getCategoryProduct(categoryId));
    }
    const editProduct = async (id) => {
        const data = {
            categoryId,
            name,
            price,
            discount,
            spec,
            desc,
            images,
            id,
        }
       await dispatch(updateProduct(data));
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
                <button onClick={() => viewDetails(product._id)}>Edit</button>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
            {edit && <div >
                <input type="file" multiple onChange={handleImageChange} />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='discount percentage' value={discount} onChange={(e) => setDiscount(e.target.value)} />
                <input type="text" placeholder='specifications' value={spec} onChange={(e) => setSpec(e.target.value)} />
                <textarea type="text" rows="5" placeholder='description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                <button onClick={() => editProduct(product._id)}>Save</button>
            </div>}
        </div>
    )
}

export default ProductCatList