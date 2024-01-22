import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const adminLogin = createAsyncThunk('admin/adminLogin', async (data) => {

    try {
        const response = await axios.post('http://localhost:4000/admin/login', data);
        if (!response.data) {
            throw new Error('failed to login');
        }

        const token = response.data.token;

        if (token.length > 0) {
            console.log("sucess")
            localStorage.setItem('token', response.data.token);
            // window.location.replace("/admin_home");
            window.location.replace("/category");
        }
        return response.data;

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
    admin: [],
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.fulfilled, (state) => {
                state.status = "succeeded";
            })
    }
})

export default adminSlice.reducer;