import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../features/admin/productSlice';
import { useLocation } from 'react-router-dom';
import ViewCss from './ViewProduct.module.css'
import AdminHeader from '../../../common/AdminHeader';

const ViewProduct = () => {
    const product = useSelector((state) => state.products.product);
    const [editForm,setEditForm] = useState(false)
    let dispatch = useDispatch();
    const location = useLocation();
    const id = location.state.id;
    console.log(product);
    console.log(id);
    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])
    return (
        <>
            <AdminHeader />
            <div className={ViewCss.viewPage}>
                {product.images && product.images.map((image, index) => (
                     index === 0 ?
                     <img
                        key={index}
                        className={ViewCss.cover}
                        src={`http://localhost:4000/products/${image}`}
                        alt='product'
                    />                        :
                        <img
                            key={index}
                        className={ViewCss.secondory}
                            src={`http://localhost:4000/products/${image}`}
                            alt='product'
                        />
          ))}
                {!editForm? <><h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>Discount:{product.discount}%</p>
                <p>{product.specifications ? product.specification : ""}</p>
                <p>{product.description ? product.description : ""}</p></>:<>
                <input type="text" /></>}
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}

export default ViewProduct