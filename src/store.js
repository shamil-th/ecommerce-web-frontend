import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSlice";
import categoryReducer from "./features/admin/categorySlice";
import productSlice from "./features/admin/productSlice";

const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories: categoryReducer,
        products: productSlice
    }
});

export default store;