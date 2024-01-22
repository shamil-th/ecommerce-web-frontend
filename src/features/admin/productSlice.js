import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// post product
export const createProduct = createAsyncThunk('products/createProduct', async (data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("categoryId", data.categoryId);
    formData.append("price", data.price)
    formData.append("discount", data.discount)
    formData.append("specifications", data.spec)
    formData.append("description", data.desc);
    data.images.map((image) => (
        formData.append('Images', image)
    ))

    try {
        const response = await axios.post('http://localhost:4000/products/product', formData);
        if (!response.data) {
            throw new Error("error while creating product");
        }
        return response.data;
    } catch (error) {
        console.error(error, "cannot create product");
    }
});

// retrive products based on selected category
export const getCategoryProduct = createAsyncThunk('products/getCategoryProduct', async (id) => {
    try {
        const response = await axios.get(`http://localhost:4000/products/category/products/${id}`);
        if (!response.data) {
            throw new Error("error while retrive products from categories")
        }
        return response.data
    }
    catch (error) {
        console.error(error, "error while retriving data")
    }
});

// retrive single product 
export const getProduct = createAsyncThunk('product/getProduct', async (id) => {
    try{
        const response = await axios.get(`http://localhost:4000/products/product/${id}`);
        if(!response.data){
            throw new Error('product not found');
        }
        console.log('single',response.data);
        return response.data;
    }catch(err) {
        console.Error("error while retriving data");
    }
})
// edit product
export const updateProduct = createAsyncThunk('product/updateProduct', async (data) => {

    const id = data.id;
    console.log("update",id)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("categoryId", data.categoryId);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("specifications", data.spec);
    formData.append("description", data.desc);
    data.images.map((image) => (
        formData.append('Images', image)
    ));

    try {
        const response = await axios.put(`http://localhost:4000/products/product/${id}`, formData);
        if (!response.data) {
            throw new Error('Product update failed', Error);
        }
        return response.data;

    } catch (err) {
        console.error("Product update failed", err)
    }
})

// delete product
export const delProduct = createAsyncThunk('products/delProduct', async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/products/product/${id}`);
        if (!response.data) {
            throw new Error("error while deleting product");
        }
        return response.data;
    } catch (error) {
        console.error(error, "cannot delete product");
    }
});

const initialState = {
    products: [],
    categoryProducts: [],
    product: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.fulfilled, (state) => {
                state.status = "succeed";
            })
            // .addCase(createProduct.rejected, (state, action) => {
            //     state.status = "failed";
            //     state.error = action.error.message;
            // })
            .addCase(getCategoryProduct.fulfilled, (state, action) => {
                state.status = "succeed";
                state.categoryProducts = action.payload;
            })
            // .addCase(getCategoryProduct.rejected, (state, action) => {
            //     state.status = "failed";
            //     state.error = action.error.message;
            // })
            .addCase(delProduct.fulfilled, (state) => {
                state.status = "succeed"
            })
            // .addCase(delProduct.rejected, (state, action) => {
            //     state.status = "failed";
            //     state.error = action.error.message;
            // })
            .addCase(updateProduct.fulfilled, (state) => {
                state.status = "succeed";
            })
            // .addCase(updateProduct.rejected, (state, action) => {
            //     state.status = "failed";
            //     state.error = action.error.message;
            // })
            .addCase(getProduct.fulfilled, (state,action) => {
                state.status = "succeed";
                state.product = action.payload;
            })
    }
});

export default productSlice.reducer