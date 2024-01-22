import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {  getCategoryList } from '../../../features/admin/categorySlice';
import ListCss from './CategoryList.module.css';
import CatCard from './CatCard';

const CategoryList = () => {

    const categories = useSelector((state) => state.categories.categories);

    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCategoryList());
    }, [dispatch])


    return (
        <div className={ListCss.category_list}>
            {categories.map((category) => (
               <CatCard key={category._id} category={category}/>
            ))}
        </div>
    )
}

export default CategoryList