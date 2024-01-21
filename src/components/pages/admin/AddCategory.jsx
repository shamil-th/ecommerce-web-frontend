import React, { useRef, useState } from 'react';
import CategoryCss from './Category.module.css';
import { addCategory, getCategoryList } from '../../../features/admin/categorySlice';
import { useDispatch } from 'react-redux';

const AddCategory = () => {

  const [categoryName, setCategory] = useState("");
  const imageRef = useRef(null);


  let dispatch = useDispatch();

  const createCategory = async () => {

    const data = {
      categoryName,
      categoryImg: imageRef.current.files[0],
    };

    console.log("category")
    await dispatch(addCategory(data));
    dispatch(getCategoryList())
    setCategory("");
    imageRef.current.value = "";


  }

  return (
    <div className={CategoryCss.category_form}>
      <label htmlFor="categoryImg">select img</label>
      <input type="file" id='categoryImg' ref={imageRef} />
      <input type="text" placeholder='Category name..' value={categoryName} onChange={(e) => setCategory(e.target.value)} />
      <button type='button' onClick={createCategory}>Create</button>
    </div>
  )
}

export default AddCategory