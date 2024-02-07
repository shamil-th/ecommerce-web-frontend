import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editCategory, getCategoryList } from '../../../features/admin/categorySlice';
import EditCss from './EditCat.module.css';

const EditCategory = ({ category, setEdit }) => {

    const [name, setName] = useState(category.categoryName);
    const [description, setDescription] = useState(category.description);
    const [viewForm,setViewForm] = useState(true);
    const [modal,setModal] = useState(false);
    const imageRef = useRef(null);

    let dispatch = useDispatch();

    const edit = async (id) => {
        let image = imageRef.current.files[0];
        console.log("img path", image)
        if (!image) {
            console.log("no img", category.categoryImg)
            image = category.categoryImg;
        }
        const data = {
            id,
            categoryName: name,
            description: description,
            categoryImg: image,
        }
        await dispatch(editCategory(data));
        dispatch(getCategoryList());
        setViewForm(false);
        setModal(true);
    }

    const hideOverlay = () => {
        if(modal){
            setModal(false);
        }
        setEdit(false);
    }

    return (
        <div className={EditCss.edit_overlay}>
           {viewForm && <div className={EditCss.edit_form}>
                <input type="file" ref={imageRef} />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea name="description" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button onClick={() => edit(category._id)}>Save</button>
                <button onClick={() => hideOverlay()}>Cancel</button>
            </div>}
            {modal && 
            <div className={EditCss.modal}>
                <h1>Category Edited Successfully</h1>
                <button onClick={()=>hideOverlay()}>Okay</button>
            </div> }
        </div>
    )
}

export default EditCategory