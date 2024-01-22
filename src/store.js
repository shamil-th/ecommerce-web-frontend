import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSlice";
import categoryReducer from "./features/admin/categorySlice";
import productSlice from "./features/admin/productSlice";
import customerSlice from "./features/customer/customerSlice";

const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories: categoryReducer,
        products: productSlice,
        customers: customerSlice,
    }
});

export default store;