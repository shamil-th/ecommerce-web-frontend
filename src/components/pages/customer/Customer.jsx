import React from "react";
import SignupCustomer from "./auth/SignupCustomer";
import LoginCustomer from "./auth/LoginCustomer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CatProducts from "./CatProducts";
import ProductProfile from "./ProductProfile";
import Cart from "./cart/Cart";
import NotFound from "../../common/NotFound";
import PaymentSuccess from "./payment/PaymentSuccess";

const Customer = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupCustomer />} />
        <Route path="/login" element={<LoginCustomer />} />
        {token && id && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/category-product" element={<CatProducts />} />
            <Route path="/product-profile" element={<ProductProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<PaymentSuccess/>}/>
          </>
        )}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
};

export default Customer;
