import React, { useState } from 'react';
import CategoryCss from './Category.module.css';
import AddCategory from './AddCategory';
import AdminHeader from '../../common/AdminHeader';
import CategoryList from './CategoryList';


const Category = () => {

  const [overlay,setOverlay] = useState(false);
  
  return (
    <>
      <AdminHeader />
      <div className={`container ${CategoryCss.Category}`}>
        <div className={CategoryCss.button_section}>
        <button className={CategoryCss.create_btn} onClick={()=>setOverlay(true)}>Create Category</button>
        </div>
        <div><CategoryList setOverlay={setOverlay}/></div>
      </div>
      {overlay&&<div className={CategoryCss.overlay}>
        <AddCategory setOverlay={setOverlay}/>
      </div>}
    </>
  )
}

export default Category