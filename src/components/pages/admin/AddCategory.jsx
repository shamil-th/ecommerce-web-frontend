import React, { useRef, useState } from 'react';
import CategoryCss from './Category.module.css';
import { addCategory, getCategoryList } from '../../../features/admin/categorySlice';
import { useDispatch } from 'react-redux';

const AddCategory = ({ setOverlay }) => {

  const [categoryName, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef(null);


  let dispatch = useDispatch();
  const hideOverlay = () => {
    setOverlay(false);
  }
  const createCategory = async () => {

    const data = {
      categoryName,
      description,
      categoryImg: imageRef.current.files[0],
    };

    await dispatch(addCategory(data));
    dispatch(getCategoryList())
    setCategory("");
    imageRef.current.value = "";
    setOverlay(false)

  }

  return (
    <div className={CategoryCss.category_form}>
      <h3>Create Category</h3>
      <i className="fa-solid fa-xmark" onClick={hideOverlay}></i>
      <label htmlFor="categoryImg">select img</label>
      <input type="file" id='categoryImg' ref={imageRef} />
      <input type="text" placeholder='Category name..' value={categoryName} onChange={(e) => setCategory(e.target.value)} />
      <textarea rows="5" type="text" placeholder='Description..' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type='button' onClick={createCategory}>Create</button>
    </div>
  )
}

export default AddCategory