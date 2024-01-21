import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editCategory, getCategoryList } from '../../../features/admin/categorySlice';

const EditCategory = ({ category }) => {

    const [name, setName] = useState(category.categoryName);
    const imageRef = useRef(null);

    let dispatch = useDispatch();

    const edit = async (id) => {
        let image = imageRef.current.files[0];
        console.log("img path",image)
        if (!image) {
            console.log("no img",category.categoryImg)
             image = category.categoryImg;
        }
        const data = {
            id,
            categoryName:name,
            categoryImg:image,
        }
        await dispatch(editCategory(data));
        dispatch(getCategoryList());
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="file" ref={imageRef} />
            <button onClick={() => edit(category._id)}>Save</button>
            <button>Cancel</button>
        </div>
    )
}

export default EditCategory