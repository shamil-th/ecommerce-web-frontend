import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeCss from './Home.module.css';

const CatList = ({ category }) => {

  const img = category.categoryImg;
  let navigate = useNavigate();

  const productsPage = async (id) => {
    navigate('/category-product', { state: { id: id } })
  }

  return (
    <div className={HomeCss.category} onClick={() => productsPage(category._id)}>
      <img src={`http://localhost:4000/${category.categoryImg}`} alt="category" />
      <h3>{category.categoryName}</h3>
    </div>
  )
}

export default CatList