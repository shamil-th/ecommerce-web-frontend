import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategoryList } from '../../../features/admin/categorySlice';
import EditCategory from './EditCategory';
import ListCss from './CategoryList.module.css'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

    const categories = useSelector((state) => state.categories.categories)

    const [edit, setEdit] = useState(false)

    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryList());
    }, [dispatch]);

    const delteItem = async (id) => {
       await dispatch(deleteCategory(id))
        dispatch(getCategoryList())
    }

    const editCategoryItem = () => {
        setEdit(true);
    }

    const productList = async(id) => {
        navigate("/productlist",{ state : {num:id} });
        console.log(id)
    }

    return (
        <div className={ListCss.category_list}>
            {categories.map((category) => (
                <div key={category._id} className={ListCss.category}>
                    <img src={`http://localhost:4000/${category.categoryImg}`} alt="category" onClick={()=>productList(category._id)} />
                    <h3>{category.categoryName}</h3>
                    <div>
                    <button onClick={editCategoryItem}>Edit</button>
                    <button onClick={() => delteItem(category._id)}>Delete</button>
                    </div>
                    {edit ? <EditCategory category={category} setEdit={setEdit} /> : ""}
                </div>
            ))}
        </div>
    )
}

export default CategoryList