import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


// product add to cart
export const addtoCart = createAsyncThunk('cart/addtoCart', async (data) => {
    try {
        const response = await axios.post('http://localhost:4000/cart',data);
        if(!response.data){
            throw new Error('cannot update data')
        }
        return response.data;
    }catch (err) {
        console.error('cannot update cart')
    }
});

// show all items in the cart
export const cartList = createAsyncThunk('cart/cartList', async (id) => {
    try{
        const response = await axios.get(`http://localhost:4000/cart/${id}`);
        if(!response.data){
            throw new Error('cannot get cart');
        }
        return response.data;
    } catch(err) {
        console.error('cannot get cart');
    }
});

// remove an item from the cart
export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (data) => {
    console.log('removeCartItem',data)
    try {
        const response = await axios.put('http://localhost:4000/cart', data);
        if(!response.data){
            throw new Error('cannot remove item');
        }
        return response.data;
    }
    catch(err){
        console.err('something went wrong', err)
    }
});

const initialState = {
    cart: [],
    status:[]
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(addtoCart.fulfilled,(state)  => {
            state.status = 'item added to cart';
        })
        .addCase(cartList.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.cart = action.payload;
        })
        .addCase(removeCartItem.fulfilled, (state) => {
            state.status = 'item removed'
        })
    }
})


export default cartSlice.reducer;
