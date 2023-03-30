import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductSingle, getProductFeatured } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
  productFeatured: [],
  productFeaturedStatus: STATUS.IDLE
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
    // product featured
    .addCase(getProductFeatured.pending, (state, action) => {
      state.productFeaturedStatus = STATUS.LOADING;
    })
    .addCase(getProductFeatured.fulfilled, (state, action) => {
      state.productFeatured = action.payload;
      state.productFeaturedStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProductFeatured.rejected, (state, action) => {
      state.productFeaturedStatus = STATUS.FAILED;
    })
  }
})

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getSingleProduct = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;
export const getProducstFeatured = (state) => state.product.productFeatured;
export const getSingleProductsFeturedStatus = (state) => state.product.productFeaturedStatus;
export default productSlice.reducer;
