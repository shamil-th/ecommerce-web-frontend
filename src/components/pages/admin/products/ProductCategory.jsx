import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct } from '../../../../features/admin/productSlice';
import ProductCatList from './ProductCatList';
import AdminHeader from '../../../common/AdminHeader'
import CreateProduct from './CreateProduct';
import ProductCss from './ProductCat.module.css';

const ProductCategory = () => {

    const categoryProducts = useSelector((state) => state.products.categoryProducts);

    const [addProduct,setAddProduct] = useState(false);
    
    let dispatch = useDispatch();

    const { id } = useParams();


    useEffect(() => {
        dispatch(getCategoryProduct(id));
    }, [])

    return (
        <>
            <AdminHeader />
            <div className='container'>
                <div className={ProductCss.products}>
                    <div>
                    <button onClick={()=>setAddProduct(true)}>Add Product</button>
                    </div>
                    {addProduct&&  <div>
                        <CreateProduct categoryId={id} setAddProduct={setAddProduct}/>
                    </div>}
                    <div className={ProductCss.product_cards}>
                        {categoryProducts.map((product) => (
                            <ProductCatList key={product._id} product={product} categoryId={id} />
                        ))}
                    </div>
                 
                </div>
            </div>
        </>
    );
};

export default ProductCategory;
