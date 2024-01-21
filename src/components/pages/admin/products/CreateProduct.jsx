import React, { useState } from 'react';
import ProductCss from './ProductCat.module.css';
import { createProduct, getCategoryProduct } from '../../../../features/admin/productSlice';
import { useDispatch } from 'react-redux';

const CreateProduct = ({ categoryId }) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("")
    const [spec, setSpec] = useState("");
    const [desc, setDesc] = useState("");

    const [images, setImages] = useState();

    let dispatch = useDispatch();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
       
    }
    console.log(images)

    const postProduct = async () => {
        const newProduct = {
            categoryId,
            name,
            price,
            discount,
            spec,
            desc,
            images
        }
        await dispatch(createProduct(newProduct));
        dispatch(getCategoryProduct(categoryId))
    }

    return (
        <div >
            <h3>Create Product</h3>
            <div className={ProductCss.input_fields}>
                <input type="file" multiple onChange={handleImageChange} />
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='discount percentage' onChange={(e) => setDiscount(e.target.value)} />
                <input type="text" placeholder='specifications' onChange={(e) => setSpec(e.target.value)} />
                <textarea type="text" rows="5" placeholder='description' onChange={(e) => setDesc(e.target.value)} />
                <div className={ProductCss.buttons}>
                    <button>Cancel</button>
                    <button onClick={postProduct}>Add Product</button>
                </div>
            </div>

        </div>
    )
}

export default CreateProduct