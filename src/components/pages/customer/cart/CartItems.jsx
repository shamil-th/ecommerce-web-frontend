import React, { useEffect, useState } from "react";
import CartCss from "./Cart.module.css";
import ProductCss from "../ProductProfile.module.css";
import { useDispatch } from "react-redux";
import { cartList, removeCartItem } from "../../../../features/cart/cartSlice";

const CartItems = ({ item }) => {
  let dispatch = useDispatch();

  const userId = localStorage.getItem("id");
  const productId = item._id;

  const removeItem = async () => {
    const data = {
      userId,
      productId,
    };
    await dispatch(removeCartItem(data));
    dispatch(cartList(userId));
  };
  return (
    <div className={CartCss.cart_item}>
      <div>
        <img
          src={`http://localhost:4000/products/${item.images[0]}`}
          alt="product"
        />
      </div>
      <div>
        <h3>{item.name}</h3>
        {item.discount > 0 ? (
          <div className={ProductCss.price}>
            <div className={ProductCss.discount_price}>
              <i
                className={`fa-solid fa-indian-rupee-sign ${ProductCss.strike_price}`}
              ></i>
              <h4>
                <del className={ProductCss.strike_price}>{item.price}</del>
              </h4>
            </div>
            <div className={ProductCss.discount_price}>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <h4>{item.discountedPrice}</h4>
              {item.discount > 0 && (
                <div>
                  <p>{item.discount}% off</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={ProductCss.price}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <h4>{item.price}</h4>
          </div>
        )}
        <p>{item.specifications}</p>
        <p>{item.description}</p>
      </div>
      <div>
        <button onClick={()=>removeItem()}>Remove</button>
      </div>
    </div>
  );
};

export default CartItems;
