import React from 'react'

const CatList = ({category}) => {

    const img = category.categoryImg;
  return (
    <div>
        <img src={`http://localhost:4000/${category.categoryImg}`} alt="category" />
        {category.categoryName}
        </div>
  )
}

export default CatList