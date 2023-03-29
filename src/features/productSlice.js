import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAILED;
    })
  }
})

export const getAllProducts = (state) => state.product.products;
export default productSlice.reducer;
