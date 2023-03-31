import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductSingle, getProductFeaturedAsync, getProductSaleAsync, getProductSearchAsync } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
  productFeatured: [],
  productFeaturedStatus: STATUS.IDLE,
  productSell: [],
  productSellStatus: STATUS.IDLE,
  productSearch: [],
  productSearchStatus: STATUS.IDLE,
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
    .addCase(getProductFeaturedAsync.pending, (state, action) => {
      state.productFeaturedStatus = STATUS.LOADING;
    })
    .addCase(getProductFeaturedAsync.fulfilled, (state, action) => {
      state.productFeatured = action.payload;
      state.productFeaturedStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProductFeaturedAsync.rejected, (state, action) => {
      state.productFeaturedStatus = STATUS.FAILED;
    })
    // product sell
    .addCase(getProductSaleAsync.pending, (state, action) => {
      state.productSellStatus = STATUS.LOADING;
    })
    .addCase(getProductSaleAsync.fulfilled, (state, action) => {
      state.productSell = action.payload;
      state.productSellStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProductSaleAsync.rejected, (state, action) => {
      state.productSellStatus = STATUS.FAILED;
    })
    // product search
    .addCase(getProductSearchAsync.pending, (state, action) => {
      state.productSearchStatus = STATUS.LOADING;
    })
    .addCase(getProductSearchAsync.fulfilled, (state, action) => {
      state.productSearch = action.payload;
      state.productSearchStatus = STATUS.SUCCEEDED;
    })
    .addCase(getProductSearchAsync.rejected, (state, action) => {
      state.productSearchStatus = STATUS.FAILED;
    })
  }
})

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;

export const getSingleProduct = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;

export const getProductFeatured = (state) => state.product.productFeatured;
export const getProductsFeturedStatus = (state) => state.product.productFeaturedStatus;

export const getProductSell = (state) => state.product.productSell;
export const getProductSellStatus = (state) => state.product.productSellStatus;

export const getproductSearch = (state) => state.product.productSearch;
export const getProductSearchStatus = (state) => state.product.productSearchStatus;

export default productSlice.reducer;
