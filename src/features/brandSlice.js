import { createSlice } from "@reduxjs/toolkit";
import { getBrands, productByBrand } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  brands: [],
  brandsStatus: STATUS.IDLE,
  brandProducts: [],
  brandProductsStatus: STATUS.IDLE
}

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBrands.pending, (state, action) => {
      state.brandsStatus = STATUS.LOADING;
    })
    .addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.brandsStatus = STATUS.SUCCEEDED;
    })
    .addCase(getBrands.rejected, (state, action) => {
      state.brandsStatus = STATUS.FAILED;
    })
    // brand-category
    .addCase(productByBrand.pending, (state, action) => {
      state.brandProductsStatus = STATUS.LOADING;
    })
    .addCase(productByBrand.fulfilled, (state, action) => {
      state.brandProducts = action.payload;
      state.brandProductsStatus = STATUS.SUCCEEDED;
    })
    .addCase(productByBrand.rejected, (state, action) => {
      state.brandProductsStatus = STATUS.FAILED;
    })
  }
})

export const getAllBrands = (state) => state.brand.brands;
export const getAllProductByBrand = (state) => state.brand.brandProducts;
export const getAllProductByBrandStatus = (state) => state.brand.brandProductsStatus;
export default brandSlice.reducer;
