import React, { useEffect } from 'react';
import AdminHeader from '../../common/AdminHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProduct } from '../../../features/admin/productSlice';
import { useNavigate } from 'react-router-dom';


const Product = () => {

  const products = useSelector((state)=> state.products.products);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(()=> {
    dispatch(getAllProducts());
  },[])

  const viewDetails = (id) => {
    navigate('/product-details',{state:{id:id}})
    dispatch(getProduct(id));
}
  return (
    <>
    <AdminHeader/>
    <div className='container'>
      {products.map((product) => (
        
        <div key={product._id}>
        <h2>{product.name}</h2>
        <button onClick={()=>viewDetails(product._id)}>View Details</button>
        </div>
        
      ))}
    </div>
    </>
  )
}

export default Product