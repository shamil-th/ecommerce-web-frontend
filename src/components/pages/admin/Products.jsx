import React, { useEffect } from "react";
import AdminHeader from "../../common/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/admin/productSlice";
import AllProducts from "./AllProducts";
import ProductCss from './AllProducts.module.css';


const Product = () => {
  const products = useSelector((state) => state.products.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className={ProductCss.product_list}>
          {products.map((product) => (
            <AllProducts product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
