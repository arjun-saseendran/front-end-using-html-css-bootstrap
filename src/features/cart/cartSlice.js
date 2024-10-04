import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    cartProductCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cartProducts.push(action.payload)
            state.cartProductCount += 1
       
        },
    }
})

export default cartSlice.reducer

export const {add} = cartSlice.actions