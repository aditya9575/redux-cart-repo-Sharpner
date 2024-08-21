import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice/uiSlice";
import cartSlice from "./cartSlice/cartSlice";



// here we set our root reducer which can be one reducer 
const store = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
})

export default store;