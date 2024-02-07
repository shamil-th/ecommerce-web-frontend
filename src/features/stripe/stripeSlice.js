import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const payment = createAsyncThunk("stripe/payment", async (data) => {
  console.log("stripe");
  console.log("stripe", data);
  try {
    const response = await axios.post(
      "http://localhost:4000/payment/create-checkout-session",
      data
    );
    if (!response.data) {
      throw new Error("payment failed");
    }
    console.log( response.data)
    return response.data;
  } catch (err) {
    console.error("something went wrong", err);
  }
});

const initialState = {
  stripe: [],
  stripeLink:[],
  status: [],
};

const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(payment.fulfilled, (state,action) => {
      state.status = "payment success";
      state.stripeLink = action.payload;
      console.log("red",action.payload)
    });
  },
});

export default stripeSlice.reducer;
