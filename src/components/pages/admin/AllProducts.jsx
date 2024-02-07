import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../../features/admin/productSlice";
import ProductCss from "./AllProducts.module.css";

const AllProducts = ({ product }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const viewDetails = (id) => {
    navigate("/product-details", { state: { id: id } });
    dispatch(getProduct(id));
  };

  return (
    <div>
      <div className={ProductCss.product_card}>
        <img
          src={`http://localhost:4000/products/${product.images[0]}`}
          alt="product"
        />
        <h3>{product.name}</h3>
        <h4>Price: {product.price}</h4>
        <h4>Discount: {product.discount}</h4>
        <button onClick={() => viewDetails(product._id)}>View Details</button>
      </div>
    </div>
  );
};

export default AllProducts;
