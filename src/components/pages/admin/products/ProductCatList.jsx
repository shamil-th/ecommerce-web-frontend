import React, { useState } from "react";
import ProductCss from "./ProductCat.module.css";
import ListCss from "../CategoryList.module.css";
import { useDispatch } from "react-redux";
import {
  delProduct,
  getCategoryProduct,
  getProduct,
} from "../../../../features/admin/productSlice";
import { useNavigate } from "react-router-dom";

const ProductCatList = ({ product, categoryId }) => {
  // const getCategoryProduct = useSelector((state) => state.products.getCategoryProduct);

  const images = product.images ? product.images : "";


  const [remove, setRemove] = useState(false);
  const [dltForm, setDltForm] = useState(false);
  const [modal, setModal] = useState(false);


  let dispatch = useDispatch();
  let navigate = useNavigate();

  const deleteProduct = async (id) => {
    await dispatch(delProduct(id));
    dispatch(getCategoryProduct(categoryId));
  };

  const viewDetails = (id) => {
    navigate("/product-details", { state: { id: id } });
    dispatch(getProduct(id));
  };

  const deletePopup = () => {
    setRemove(true);
    setDltForm(true);
}

const hideModal = (id) => {
    setRemove(false);
    dispatch(getCategoryProduct(categoryId));
    dispatch(getProduct(id));
}


  return (
    <div className={ProductCss.card}>
      {/* {product.images.map((image, index) => ( */}
      <img src={`http://localhost:4000/products/${images[0]}`} alt="product" />
      {/* ))} */}
      <h4>{product.name}</h4>
      <h6>{product.price}</h6>
      <p>{product.specifications}</p>
      <p>{product.discount}</p>
      <p>{product.description}</p>
      <div>
        <button onClick={() => viewDetails(product._id)}>View Details</button>
        <button onClick={deletePopup}>Delete</button>
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
    </div>
  );
};

export default ProductCatList;
