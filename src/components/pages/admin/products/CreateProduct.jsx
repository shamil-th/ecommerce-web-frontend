import React, {  useEffect, useState } from 'react';
import ProductCss from './ProductCat.module.css';
import { createProduct, getCategoryProduct } from '../../../../features/admin/productSlice';
import { useDispatch } from 'react-redux';

const CreateProduct = ({ categoryId,setAddProduct }) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("")
    const [spec, setSpec] = useState("");
    const [desc, setDesc] = useState("");

    const [images, setImages] = useState("");

  const [discountedPrice, setDiscountedPrice] = useState("");


  useEffect(() => {
    const discountDecimal = discount / 100;

    // Calculate discounted price and round up to the nearest whole number
    const calculatedDiscountedPrice = Math.ceil(price - price * discountDecimal);

    setDiscountedPrice(calculatedDiscountedPrice || "");
    console.log('discountedPrice',discountedPrice)
  },[discount,price])
  


    let dispatch = useDispatch();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    }

    const resetForm = () => {
        setName("");
        setPrice("");
        setDiscount("");
        setDiscount("");
        setDiscountedPrice("");
        setSpec("");
        setDesc("");
        setImages("");
    }

    const postProduct =  async() => {

        const newProduct = {
            categoryId,
            name,
            price,
            discount,
            discountedPrice,
            spec,
            desc,
            images
        }

         await dispatch(createProduct(newProduct));
        dispatch(getCategoryProduct(categoryId));
        setAddProduct(false);

        resetForm();
    }

    return (
        <div >
            <h3>Create Product</h3>
            <form className={ProductCss.input_fields}>
                <input type="file" multiple onChange={handleImageChange} />
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='discount percentage' onChange={(e) => setDiscount(e.target.value)} />
                {/* <input type="text" value={discountedPrice} disabled/> */}
                <input type="text" placeholder='specifications' onChange={(e) => setSpec(e.target.value)} />
                <textarea type="text" rows="5" placeholder='description' onChange={(e) => setDesc(e.target.value)} />
                <div className={ProductCss.buttons}>
                    <button type='button' onClick={()=>setAddProduct(false)}>Cancel</button>
                    <button type='button' onClick={postProduct}>Add Product</button>
                </div>
            </form>

        </div>
    )
}

export default CreateProduct