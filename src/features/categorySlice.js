import { createSlice } from "@reduxjs/toolkit";
import { getCategories, productByCategory } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCategories.pending, (state, action) => {
      state.categoriesStatus = STATUS.LOADING;
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.categoriesStatus = STATUS.SUCCEEDED;
    })
    .addCase(getCategories.rejected, (state, action) => {
      state.categoriesStatus = STATUS.FAILED;
    })
    // category-product
    .addCase(productByCategory.pending, (state, action) => {
      state.categoryProductsStatus = STATUS.LOADING;
    })
    .addCase(productByCategory.fulfilled, (state, action) => {
      state.categoryProducts = action.payload;
      state.categoryProductsStatus = STATUS.SUCCEEDED;
    })
    .addCase(productByCategory.rejected, (state, action) => {
      state.categoryProductsStatus = STATUS.FAILED;
    })
  }
})

export const getAllCategories = (state) => state.category.categories;
export const getAllCategoriesStatus = (state) => state.category.categoriesStatus;
export const getAllProductByCategory = (state) => state.category.categoryProducts;
export const getAllProductByCategoryStatus = (state) => state.category.categoryProductsStatus;
export default categorySlice.reducer;
