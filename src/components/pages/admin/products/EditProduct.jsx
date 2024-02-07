import React, { useEffect, useState } from "react";
import ViewCss from "./ViewProduct.module.css";
import ListCss from "../CategoryList.module.css";

import {
  delProduct,
  getCategoryProduct,
  getProduct,
  updateProduct,
} from "../../../../features/admin/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProduct = ({ product }) => {
  const [editForm, setEditForm] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState("");

  const [remove, setRemove] = useState(false);
  const [dltForm, setDltForm] = useState(false);
  const [modal, setModal] = useState(false);

  const categoryId = product.categoryId;

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [spec, setSpec] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setDiscount(product.discount);
    setDesc(product.description);
    setImages(product.images);
    setSpec(product.specifications);
    setDiscountedPrice(product.discountedPrice);
  }, [product]);

  const handleImageChange = (e) => {
    setImages("");
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // const preview = (e) => {
  //     const previewImage = e.target.files[0]
  //     setPreviewImg(URL.createObjectURL(previewImage))
  // }

  useEffect(() => {
    const discountDecimal = discount / 100;

    // Calculate discounted price and round up to the nearest whole number
    const calculatedDiscountedPrice = Math.ceil(
      price - price * discountDecimal
    );

    setDiscountedPrice(calculatedDiscountedPrice);

    console.log("discountedPrice", calculatedDiscountedPrice);
  }, [price, discount]);

  // delete popup
  const deletePopup = () => {
    setRemove(true);
    setDltForm(true);
  };

  const hideModal = (id) => {
    setRemove(false);
    dispatch(getCategoryProduct(categoryId));
    dispatch(getProduct(id));
    navigate(`/productlist/${categoryId}`);
  };

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
    };

    await dispatch(updateProduct(data));
    dispatch(getCategoryProduct(categoryId));
    dispatch(getProduct(id));
    setEditForm(false);
  };

  const deleteProduct = async (id) => {
    await dispatch(delProduct(id));
    setDltForm(false);
    setModal(true);
  };

  return (
    <>
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            className={ViewCss.secondory}
            src={`http://localhost:4000/products/${image}`}
            alt="product"
          />
        ))}
      <>
        <h3>{name}</h3>
        <h4>Price: {price}</h4>
        <p>Discount:{discount}%</p>
        <p>Discounted Price: {discountedPrice}</p>
        <p>Specifications: {spec}</p>
        <p>Description: {desc}</p>
        {editForm && (
          <div className={ViewCss.edit_form}>
            <div className={ViewCss.input_fields}>
              <input type="file" multiple onChange={handleImageChange} />
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="discount percentage"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <input
                type="text"
                placeholder="specifications"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
              />
              <textarea
                type="text"
                rows="5"
                placeholder="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div>
              <button onClick={() => setEditForm(false)}>cancel</button>
              <button onClick={() => editProduct(product._id)}>Save</button>
            </div>
          </div>
        )}
      </>
      <div>
        {!editForm && (
          <>
            {" "}
            <button onClick={() => setEditForm(true)}>Edit</button>
            <button onClick={deletePopup}>Delete</button>
          </>
        )}
      </div>
      {remove && (
        <div className="overlay">
          {dltForm && (
            <div className={ListCss.dlt_form}>
              <p>Are you sure</p>
              <button onClick={() => deleteProduct(product._id)}>Yes</button>
              <button onClick={() => setRemove(false)}>No</button>
            </div>
          )}
          {modal && (
            <div className={ListCss.modal}>
              <h1>Category Deleted Successfully</h1>
              <button onClick={() => hideModal(product._id)}>Okay</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EditProduct;
