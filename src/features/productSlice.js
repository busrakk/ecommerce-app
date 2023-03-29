import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductSingle } from "../redux/services";
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
    // product single
    .addCase(getProductSingle.pending, (state, action) => {
      state.productSingleStatus = STATUS.LOADING;
    })
    .addCase(getProductSingle.fulfilled, (state, action) => {
      state.productSingle = action.payload;
      state.productSingleStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProductSingle.rejected, (state, action) => {
      state.productSingleStatus = STATUS.FAILED;
    })
  }
})

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getSingleProduct = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;
export default productSlice.reducer;
