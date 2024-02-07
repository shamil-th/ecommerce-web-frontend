import React, { useEffect } from 'react';
import Navbar from '../../common/customer/Navbar';
import HomeCss from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../../features/admin/categorySlice';
import CatList from './CatList';
import AllProduct from './AllProduct';

const Home = () => {
  const categories = useSelector((state) => state.categories.categories);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList())
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={HomeCss.category_bar}>
          {categories.map((category) => (
            <CatList key={category._id} category={category} />
          ))}
        </div>
        <div className={HomeCss.all_product}>
          <h2>Products</h2>
          <AllProduct />
        </div>
      </div>
    </>

  )
}

export default Home