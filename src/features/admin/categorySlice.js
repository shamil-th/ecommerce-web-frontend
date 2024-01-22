import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add category
export const addCategory = createAsyncThunk('categories/addCategory', async (data) => {

    const formData = new FormData();
    formData.append('categoryName', data.categoryName);
    formData.append('description', data.description);
    formData.append('categoryImg', data.categoryImg);
    try {
        const response = await axios.post('http://localhost:4000/category/create-category', formData)
        if (!response.data) {
            throw new Error('failed to post data')
        }
        return response.data;
    } catch (error) {
        console.error(error, ":Server error")
    }
});

// get categorylist
export const getCategoryList = createAsyncThunk('categories/getCategoryList', async () => {

    try {
        const response = await axios.get('http://localhost:4000/category/get-category');
        if (!response.data) {
            throw new Error('failed to retrive data')
        }
        return response.data;
    } catch (error) {
        console.error(error, " server error")
    }
})

// update category
export const editCategory = createAsyncThunk('categories/editCategory', async (data) => {
    const id = data.id;

    const formData = new FormData();
    formData.append('categoryName', data.categoryName);
    formData.append('description', data.description);
    formData.append('categoryImg', data.categoryImg);

    console.log("onedit",  data.categoryImg)

    try {
        const response = await axios.put(`http://localhost:4000/category/get-category/${id}`, formData);

        if (!response.data) {
            throw new Error("Failed to edit")
        }
        return response.data
    } catch (error) {
        throw new Error("Failed to edit category");
    }
});

//delete category
export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/category/remove-category/${id}`);
        if (response.data) {
            throw new Error("failed to delete category");
        }
        return response.data;

    } catch (error) {
        throw new Error("failed to delete category")
    }
})

const initialState = {
    categories: [],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCategory.fulfilled, (state) => {
                state.status = "succeed";
            })
            .addCase(getCategoryList.fulfilled, (state, action) => {
                state.status = "succeed";
                state.categories = action.payload;
            })
            .addCase(editCategory.fulfilled, (state) => {
                state.status = "succeed";
            })
            .addCase(deleteCategory.fulfilled, (state) => {
                state.status = "succeed";
            })
    }
})



export default categorySlice.reducer;