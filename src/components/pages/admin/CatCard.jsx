import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditCategory from './EditCategory';
import { deleteCategory, getCategoryList } from '../../../features/admin/categorySlice';


import ListCss from './CategoryList.module.css';


const CatCard = ({category}) => {

    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);

    let navigate = useNavigate();
    let dispatch = useDispatch();

 ;

    const delteItem = async (id) => {
       await dispatch(deleteCategory(id))
        dispatch(getCategoryList())
    }

    const editCategoryItem = () => {
        setEdit(true);
    }

    const productList = async(id) => {
        // navigate("/productlist",{ state : {num:id} });
        navigate(`/productlist/${id}`);
    }
  return (
    
         <div  className={ListCss.category}>
                    <img src={`http://localhost:4000/${category.categoryImg}`} alt="category" onClick={()=>productList(category._id)} />
                    <h3>{category.categoryName}</h3>
                    <div>
                    <button onClick={editCategoryItem}>Edit</button>
                    {!remove&&<button onClick={() => setRemove(true)}>Delete</button>}
                    {remove&&<div>
                    <p>Are you sure</p>
                    <button onClick={() => delteItem(category._id)}>Yes</button>
                    <button onClick={() => setRemove(false)}>No</button>
                    </div>}
                    </div>
                    {edit ? <EditCategory category={category} setEdit={setEdit} /> : ""}
                </div>
  )
}

export default CatCard