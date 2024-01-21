import React from 'react';
import CategoryCss from './Category.module.css';
import AddCategory from './AddCategory';
import AdminHeader from '../../common/AdminHeader';
import CategoryList from './CategoryList';


const Category = () => {
  return (
    <>
      <AdminHeader />
      <div className={`container ${CategoryCss.Category}`}>
        <button>Create Category</button>
        <div><AddCategory /></div>
        <div><CategoryList/></div>
      </div>
    </>
  )
}

export default Category