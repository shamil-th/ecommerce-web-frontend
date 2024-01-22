import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editCategory, getCategoryList } from '../../../features/admin/categorySlice';
// import CategoryCss from './Category.module.css';

const EditCategory = ({ category, setEdit }) => {

    const [name, setName] = useState(category.categoryName);
    const [description, setDescription] = useState(category.description);
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
        setEdit(false);
    }
    return (
        <div>
            <input type="file" ref={imageRef} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea name="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button onClick={() => edit(category._id)}>Save</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
    )
}

export default EditCategory