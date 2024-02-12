import React, { useEffect, useState } from "react";
import Navbar from "../../common/customer/Navbar";
import ProductCss from "./ProductProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/admin/productSlice";
import { useLocation } from "react-router-dom";
import { addtoCart, cartList } from "../../../features/cart/cartSlice";
import AddToCartButton from "./AddToCartButton";

const ProductProfile = () => {
  const product = useSelector((state) => state.products.product);
  // const [cover,setCover] = useState('');
  let location = useLocation();
  let dispatch = useDispatch();
  const [discoutedPrice, setDiscountedPrice] = useState("");
  const [inCart,setInCart] = useState(false);


  let id = location.state.id;

  useEffect(() => {
    dispatch(getProduct(id));
    // setCover(product.images[0]);
  }, [id]);

  let price = product.price;
  let discount = product.discount;

  useEffect(() => {
    const discountDecimal = discount / 100;

    // Calculate discounted price and round up to the nearest whole number
    const calculatedDiscountedPrice = Math.ceil(
      price - price * discountDecimal
    );

    setDiscountedPrice(calculatedDiscountedPrice || "");
  }, [price, discount]);

  const addCart = () => {
    const id = product._id;
    const userId = localStorage.getItem("id");
    const quantity = 1;

    const data = {
      id,
      userId,
      quantity,
    };
    dispatch(addtoCart(data));
    setInCart(true)
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={ProductCss.product_profile}>
          <div className={ProductCss.images}>
            <div className={ProductCss.cover}>
              {product.images && (
                <img
                  className={ProductCss.product_cover}
                  src={`http://localhost:4000/products/${product.images[0]}`}
                  alt="product cover"
                />
              )}
              {product.discount > 0 && (
                <div className={ProductCss.discount_off}>
                  <p>Off {product.discount}%</p>
                </div>
              )}
            </div>
            <div className={ProductCss.queue_images}>
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    className={ProductCss.product_images}
                    src={`http://localhost:4000/products/${image}`}
                    alt="product"
                    key={product._id + index}
                  />
                ))}
            </div>
          </div>
          <div className={ProductCss.details}>
            <h3>{product.name}</h3>
            {product.discount > 0 ? (
              <div className={ProductCss.price}>
                <div className={ProductCss.discount_price}>
                  <h4>M.R.P: </h4>{" "}
                  <i
                    className={`fa-solid fa-indian-rupee-sign ${ProductCss.strike_price}`}
                  ></i>
                  <h4>
                    <del className={ProductCss.strike_price}>
                      {product.price}
                    </del>{" "}
                  </h4>
                </div>{" "}
                <div className={ProductCss.discount_price}>
                  <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  <h4> {discoutedPrice}</h4>
                </div>
              </div>
            ) : (
              <div className={ProductCss.price}>
                <h4>Mrp:</h4>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <h4>{product.price}</h4>
              </div>
            )}
            <p>{product.specifications}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <AddToCartButton addCart={addCart} productId={product._id} inCart={inCart} setInCart={setInCart}/>
      </div>
    </>
  );
};

export default ProductProfile;
