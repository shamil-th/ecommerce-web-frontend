import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const AddToCartButton = ({ addCart, productId, setInCart, inCart }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const userId = localStorage.getItem("id");
  let navigate = useNavigate();

  const gotoCart = () => {
    navigate('/cart');
  }

  useEffect(() => {
    if(cartItems.cart_products){
        const foundItem = cartItems.cart_products.find((item) => item._id === productId);
        if(foundItem){
            setInCart(true);
        }
    }
  }, [cartItems, productId]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartList(userId));
  }, []);
  return (
    <>
      {inCart?<button onClick={gotoCart}>Go to Cart</button>
      :<button onClick={addCart}>Add to Cart</button>}
    </>
  );
};

export default AddToCartButton;
