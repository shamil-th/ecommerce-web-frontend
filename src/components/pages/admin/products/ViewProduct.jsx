import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../features/admin/productSlice";
import { useLocation } from "react-router-dom";
import ViewCss from "./ViewProduct.module.css";
import AdminHeader from "../../../common/AdminHeader";
import EditProduct from "./EditProduct";

const ViewProduct = () => {
  const product = useSelector((state) => state.products.product);

  let dispatch = useDispatch();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className={ViewCss.viewPage}>
          <EditProduct product={product} />
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
