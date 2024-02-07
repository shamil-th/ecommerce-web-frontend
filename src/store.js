import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSlice";
import categoryReducer from "./features/admin/categorySlice";
import productSlice from "./features/admin/productSlice";
import customerSlice from "./features/customer/customerSlice";
import cartSlice from "./features/cart/cartSlice";
import stripeSlice from "./features/stripe/stripeSlice";

const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories: categoryReducer,
        products: productSlice,
        customers: customerSlice,
        cart:cartSlice,
        stripe:stripeSlice
    }
});

export default store;