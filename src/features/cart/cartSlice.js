import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartProductCount: 0,
  productDetails: {
    title: "",
    description: "",
    image: "",
    price: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartProducts.push(action.payload);

      state.cartProductCount++;
    },
    viewProduct: (state, action) => {
      const { title, description, image, price } = action.payload;
      state.productDetails = {
        title: title,
        description: description,
        image: image,
        price: price,
      };
    },
    deleteProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      state.cartProductCount = state.cartProducts.length
    },
  },
});

export default cartSlice.reducer;

export const { add, viewProduct, deleteProduct } = cartSlice.actions;
