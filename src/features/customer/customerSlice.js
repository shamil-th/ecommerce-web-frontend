import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


// register new customer
export const customerSignup = createAsyncThunk('customers/customerSignup', async (data) => {
    try{
        const response = await axios.post('http://localhost:4000/customer/signup', data);
        if(!response.data){
            throw new Error('Signup failed');
        }

        window.location.replace("/login");
        return response.data;

    }catch(err){
        console.Error(err + 'internal server error');
    }
});

// customer login
export const customerlogin = createAsyncThunk('customers/customerlogin', async (data) => {
    try {
        const response = await axios.post('http://localhost:4000/customer/login', data);
        if (!response.data) {
            throw new Error('invalid details')
        }

        const token = response.data.token;

        if (token.length > 0) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            window.location.replace("/home")
            
        }
        return response.data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                return console.log('No user found with this email');
            } else if (error.response.status === 401) {
                return console.log('Incorrect password');
            } else {
                return console.log('Server error');
            }
        } else if (error.request) {
            return console.log('No response from the server');
        } else {
            return console.log('An unexpected error occurred');
        }
    }
})

const initialState = {
    customers: [],
}

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(customerlogin.fulfilled, (state) => {
                state.status = "succeed";
            })
            .addCase(customerSignup.fulfilled, (state)=> {
                state.status = "succeed";
            })
    }
})

export default customerSlice.reducer;
