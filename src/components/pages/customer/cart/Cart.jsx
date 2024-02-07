import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../../../../features/cart/cartSlice";
import Navbar from "../../../common/customer/Navbar";
import CartItems from "./CartItems";
import CartCss from "./Cart.module.css";
import PayButton from "./PayButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const status = useSelector((state) => state.cart.status);

  const [total, setTotalPrice] = useState(0);

  let dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem("id");
    dispatch(cartList(userId));
  }, []);

  // Calculate total price when cart changes
  useEffect(() => {
    if (cart?.cart_products) {
      const totalPrice = cart.cart_products.reduce((acc, product) => {
        const productTotal =  product.discountedPrice>0 ? product.discountedPrice : product.price;
        return acc + productTotal;
      }, 0);
      setTotalPrice(totalPrice);
    }
  }, [cart,cart.cart_products]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className={CartCss.cart_list}>
          {status === "succeeded" &&
            cart.cart_products.map((item) => (
              <CartItems item={item} key={item._id} />
            ))}
        </div>
        <div>
          <h3>Total {total}</h3>
          <PayButton items={cart?.cart_products}/>
        </div>
      </div>
    </>
  );
};

export default Cart;
