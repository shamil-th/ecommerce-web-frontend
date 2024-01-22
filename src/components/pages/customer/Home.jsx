import React, { useEffect } from 'react';
import Navbar from '../../common/customer/Navbar';
import HomeCss from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../../features/admin/categorySlice';
import CatList from './CatList';

const Home = () => {
    const categories = useSelector((state) => state.categories.categories); 
    let dispatch = useDispatch();

    useEffect(() => {
dispatch(getCategoryList())
    },[]);

    console.log(categories)

  return (
    <>
    <Navbar/>
     <div className="container"> 
     <div className={HomeCss.category_bar}>
{categories.map((category) => (
    <CatList key={category._id} category={category}/>
))}
        </div></div>
     </>
   
  )
}

export default Home