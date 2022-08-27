import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./DataSlice"

export const store = configureStore({
    reducer: {
        products: ProductSlice,  //this DataWebsite
        Cart: CartSlice       // this FUNction {ADD, REMOVE, DECREES}
    }
})